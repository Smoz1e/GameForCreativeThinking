from config import Base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Mapped, mapped_column
from fastapi_users import models
import models

class Users(models.BaseUser):
    __tablename__  = "users"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    username: Mapped[str] = mapped_column(String, unique=True, index=True)
    password: Mapped[str] = mapped_column(String)
    phone_number: Mapped[str] = mapped_column(String)

    Owner_id: Mapped[int] = mapped_column(Integer, models.ForeignKey("app.Model", verbose_name=_(""), on_delete=models.CASCADE))