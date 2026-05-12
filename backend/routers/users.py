from secrets import token_hex

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


def sync_player_count(db, game: GameMap) -> int:
    player_count = db.query(func.count(Users.id)).filter(Users.game_key == game.key).scalar() or 0
    game.player_count = player_count
    return player_count


def normalize_game_key(game_key: str) -> str:
    return game_key.strip().upper()


def normalize_username(username: str) -> str:
    return username.strip()


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
        sync_player_count(db, game)
        db.commit()

        return {
            "message": "game_created",
            "game_key": game.key,
            "owner_name": game.owner_name,
            "player_id": player.id,
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
        player_count = sync_player_count(db, game)
        db.commit()

        return {
            "message": "joined_game",
            "game_key": game.key,
            "username": player.username,
            "player_id": player.id,
            "player_count": player_count,
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

        players = (
            db.query(Users)
            .filter(Users.game_key == normalized_game_key)
            .order_by(Users.id.asc())
            .all()
        )
        player_count = sync_player_count(db, game)
        db.commit()

        return {
            "game_key": game.key,
            "owner_name": game.owner_name,
            "player_count": player_count,
            "players": [{"id": player.id, "username": player.username} for player in players],
        }
    finally:
        db.close()
