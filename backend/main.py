from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from database.config import Base, engine
from routers.users import router as users_router

app = FastAPI()
BASE_DIR = Path(__file__).resolve().parent
app.mount("/static", StaticFiles(directory=str(BASE_DIR.parent / "frontend")), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR.parent / "frontend" / "templates"))

Base.metadata.create_all(bind=engine)

app.include_router(users_router)

@app.get("/cart")
def game_page(request: Request):
    return templates.TemplateResponse(request, "cart.html")


@app.post("/cart")
def register_player(request: Request):
    return RedirectResponse(url="/cart", status_code=303)


@app.get("/")
def register_page(request: Request):
    return templates.TemplateResponse(request, "register.html")
