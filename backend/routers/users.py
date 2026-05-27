from secrets import token_hex
import json

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from sqlalchemy import func

from database.config import SessionLocal
from database.models import GameMap, Users

router = APIRouter(prefix="/api", tags=["users"])


class CreateGameRequest(BaseModel):
    owner_name: str = Field(min_length=1, max_length=100)


class JoinGameRequest(BaseModel):
    username: str = Field(min_length=1, max_length=100)
    game_key: str = Field(min_length=4, max_length=64)


class LeaveGameRequest(BaseModel):
    username: str = Field(min_length=1, max_length=100)
    game_key: str = Field(min_length=4, max_length=64)


class StateUpdateRequest(BaseModel):
    game_key: str = Field(min_length=4, max_length=64)
    state: dict


def sync_player_count(db, game: GameMap) -> int:
    player_count = db.query(func.count(Users.id)).filter(Users.game_key == game.key).scalar() or 0
    game.player_count = player_count
    return player_count


def normalize_game_key(game_key: str) -> str:
    return game_key.strip().upper()


def normalize_username(username: str) -> str:
    return username.strip()


def default_player_state(player_id: int, username: str, position_id: int = 1) -> dict:
    return {
        "id": player_id,
        "name": username,
        "money": 900,
        "time": 24,
        "energy": 100,
        "skill": 1,
        "career": 0,
        "workedThisWeek": 0,
        "studiedThisWeek": 0,
        "turnsLeft": 1,
        "extraTurnPrice": 120,
        "positionId": position_id,
    }


def default_game_state(game: GameMap, players: list[dict]) -> dict:
    return {
        "day": 1,
        "activePlayerIndex": 0,
        "dayStarterIndex": 0,
        "players": players,
        "gameKey": game.key,
        "ownerName": game.owner_name,
    }


def read_game_state(game: GameMap) -> dict:
    raw_state = game.state_json or '{}'
    try:
        state = json.loads(raw_state)
    except json.JSONDecodeError:
        state = {}

    state.setdefault('day', 1)
    state.setdefault('activePlayerIndex', 0)
    state.setdefault('dayStarterIndex', 0)
    state.setdefault('players', [])
    state.setdefault('gameKey', game.key)
    state.setdefault('ownerName', game.owner_name)
    return state


def write_game_state(game: GameMap, state: dict) -> None:
    game.state_json = json.dumps(state, ensure_ascii=False)
    game.player_count = len(state.get('players', []))


def sanitize_game_state(db, game: GameMap, state: dict) -> dict:
    db_players = (
        db.query(Users)
        .filter(Users.game_key == game.key)
        .order_by(Users.id)
        .all()
    )
    players_by_id = {player.id: player for player in db_players}
    players_by_name = {player.username: player for player in db_players}
    old_players = state.get('players', [])
    active_index = int(state.get('activePlayerIndex', 0) or 0)
    day_starter_index = int(state.get('dayStarterIndex', 0) or 0)
    active_player = old_players[active_index] if 0 <= active_index < len(old_players) else None
    day_starter_player = old_players[day_starter_index] if 0 <= day_starter_index < len(old_players) else None

    sanitized_players = []
    seen_ids = set()
    for entry in old_players:
        player = players_by_id.get(entry.get('id')) or players_by_name.get(entry.get('name'))
        if player is None or player.id in seen_ids:
            continue

        clean_entry = dict(entry)
        clean_entry['id'] = player.id
        clean_entry['name'] = player.username
        sanitized_players.append(clean_entry)
        seen_ids.add(player.id)

    for player in db_players:
        if player.id not in seen_ids:
            sanitized_players.append(default_player_state(player.id, player.username))

    state['players'] = sanitized_players
    state['gameKey'] = game.key
    state['ownerName'] = game.owner_name

    def normalized_index(current_index: int, previous_player) -> int:
        if not sanitized_players:
            return 0

        previous_id = previous_player.get('id') if previous_player else None
        previous_name = previous_player.get('name') if previous_player else None
        for index, player_state in enumerate(sanitized_players):
            if previous_id is not None and player_state.get('id') == previous_id:
                return index
            if previous_name is not None and player_state.get('name') == previous_name:
                return index

        return min(max(current_index, 0), len(sanitized_players) - 1)

    state['activePlayerIndex'] = normalized_index(active_index, active_player)
    state['dayStarterIndex'] = normalized_index(day_starter_index, day_starter_player)
    return state


@router.post("/games/create")
def create_game(payload: CreateGameRequest):
    db = SessionLocal()
    try:
        owner_name = normalize_username(payload.owner_name)
        game_key = token_hex(3).upper()
        while db.query(GameMap).filter(GameMap.key == game_key).first() is not None:
            game_key = token_hex(3).upper()

        game = GameMap(key=game_key, owner_name=owner_name, player_count=1)
        player = Users(username=owner_name, game_key=game_key)

        db.add(game)
        db.add(player)
        db.commit()
        db.refresh(game)
        db.refresh(player)
        state = default_game_state(game, [default_player_state(player.id, player.username)])
        write_game_state(game, state)
        db.commit()

        return {
            "message": "game_created",
            "game_key": game.key,
            "owner_name": game.owner_name,
            "player_id": player.id,
            "state": state,
        }
    finally:
        db.close()


@router.post("/games/join")
def join_game(payload: JoinGameRequest):
    db = SessionLocal()
    try:
        game_key = normalize_game_key(payload.game_key)
        username = normalize_username(payload.username)
        game = db.query(GameMap).filter(GameMap.key == game_key).first()
        if game is None:
            raise HTTPException(status_code=404, detail="game_not_found")

        existing_player = (
            db.query(Users)
            .filter(Users.game_key == game.key)
            .filter(Users.username == username)
            .first()
        )
        if existing_player is not None:
            raise HTTPException(status_code=400, detail="username_already_used_in_game")

        player = Users(username=username, game_key=game.key)

        db.add(player)
        db.commit()
        db.refresh(player)
        state = sanitize_game_state(db, game, read_game_state(game))
        players = state.get('players', [])
        if state.get('activePlayerIndex', 0) >= len(players):
            state['activePlayerIndex'] = 0
        if state.get('dayStarterIndex', 0) >= len(players):
            state['dayStarterIndex'] = 0
        write_game_state(game, state)
        db.commit()

        return {
            "message": "joined_game",
            "game_key": game.key,
            "username": player.username,
            "player_id": player.id,
            "player_count": len(players),
            "state": state,
        }
    finally:
        db.close()


@router.get("/games/{game_key}")
def get_game(game_key: str):
    db = SessionLocal()
    try:
        normalized_game_key = normalize_game_key(game_key)
        game = db.query(GameMap).filter(GameMap.key == normalized_game_key).first()
        if game is None:
            raise HTTPException(status_code=404, detail="game_not_found")

        state = sanitize_game_state(db, game, read_game_state(game))
        player_count = sync_player_count(db, game)
        write_game_state(game, state)
        db.commit()

        return {
            "game_key": game.key,
            "owner_name": game.owner_name,
            "player_count": player_count,
            "state": state,
        }
    finally:
        db.close()


@router.put("/games/state")
def update_game_state(payload: StateUpdateRequest):
    db = SessionLocal()
    try:
        normalized_game_key = normalize_game_key(payload.game_key)
        game = db.query(GameMap).filter(GameMap.key == normalized_game_key).first()
        if game is None:
            raise HTTPException(status_code=404, detail="game_not_found")

        state = sanitize_game_state(db, game, payload.state)
        write_game_state(game, state)
        db.commit()

        return {
            "message": "state_saved",
            "state": state,
        }
    finally:
        db.close()


@router.post("/games/leave")
def leave_game(payload: LeaveGameRequest):
    db = SessionLocal()
    try:
        normalized_game_key = normalize_game_key(payload.game_key)
        username = normalize_username(payload.username)

        game = db.query(GameMap).filter(GameMap.key == normalized_game_key).first()
        if game is None:
            raise HTTPException(status_code=404, detail="game_not_found")

        player = db.query(Users).filter(Users.game_key == normalized_game_key).filter(Users.username == username).first()
        if player is None:
            raise HTTPException(status_code=404, detail="player_not_found")

        db.delete(player)
        db.flush()

        state = sanitize_game_state(db, game, read_game_state(game))

        remaining_players = len(state.get('players', []))
        if remaining_players == 0:
            db.delete(game)
            db.commit()
            return {
                "message": "game_deleted",
                "game_key": normalized_game_key,
                "remaining_players": 0,
            }

        write_game_state(game, state)
        db.commit()

        return {
            "message": "player_left",
            "game_key": normalized_game_key,
            "remaining_players": remaining_players,
            "state": state,
        }
    finally:
        db.close()
