from sqlalchemy import Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from .config import Base


class GameMap(Base):
    __tablename__ = "game_map"

    id = Column(Integer, primary_key=True, index=True)
    key = Column(String(64), unique=True, index=True, nullable=False)
    owner_name = Column(String(100), nullable=False)
    player_count = Column(Integer, default=0, nullable=False)
    state_json = Column(Text, nullable=False, default='{}')

    players = relationship("Users", back_populates="game_map", cascade="all, delete-orphan")


class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), index=True, nullable=False)
    game_key = Column(String(64), ForeignKey("game_map.key"), nullable=False)

    game_map = relationship("GameMap", back_populates="players")
