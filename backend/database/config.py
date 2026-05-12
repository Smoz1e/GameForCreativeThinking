import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

BASE_URL = os.getenv(
	"SQLALCHEMY_DATABASE_URL",
	"postgresql+psycopg2://smoz1e_admin:o29I16m09@localhost:5432/gamebase",
)

engine = create_engine(BASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()