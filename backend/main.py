from pathlib import Path

from fastapi import FastAPI, APIRouter, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
app = FastAPI()
router = APIRouter() 
BASE_DIR = Path(__file__).resolve().parent
app.mount("/static", StaticFiles(directory=str(BASE_DIR.parent / "frontend")), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR.parent / "frontend" / "templates"))

@app.get("/home")
def read_root(request: Request):
    return templates.TemplateResponse(request, "cart.html")


@app.get("/")
def register_page(request: Request):
    return templates.TemplateResponse(request, "register.html")
