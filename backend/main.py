from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from . import database, models, crud, schemas
from .finance import get_price

import uvicorn

app = FastAPI()

@app.post("/portfolio/", response_model=schemas.PortfolioOut)
async def add_to_portfolio(portfolio: schemas.PortfolioCreate, db: AsyncSession = Depends(database.get_db)):
    return await crud.create_portfolio(db, portfolio)

@app.get("/portfolio/{user_id}", response_model=list[schemas.PortfolioOut])
async def fetch_portfolio(user_id: str, db: AsyncSession = Depends(database.get_db)):
    return await crud.get_user_portfolio(db, user_id)

@app.get("/price/{ticker}")
def price_lookup(ticker: str):
    return {"ticker": ticker, "price": get_price(ticker)}

if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
