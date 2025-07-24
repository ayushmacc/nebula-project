from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from . import models, schemas

async def create_portfolio(db: AsyncSession, data: schemas.PortfolioCreate):
    new_entry = models.Portfolio(**data.dict())
    db.add(new_entry)
    await db.commit()
    await db.refresh(new_entry)
    return new_entry

async def get_user_portfolio(db: AsyncSession, user_id: str):
    result = await db.execute(select(models.Portfolio).where(models.Portfolio.user_id == user_id))
    return result.scalars().all()
