from pydantic import BaseModel
from datetime import datetime

class PortfolioCreate(BaseModel):
    user_id: str
    asset_name: str
    asset_type: str
    quantity: float
    current_price: float
    timestamp: datetime

class PortfolioOut(PortfolioCreate):
    id: int

    class Config:
        orm_mode = True
