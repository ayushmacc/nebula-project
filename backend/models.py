from sqlalchemy import Column, Integer, String, Float, DateTime
from .database import Base

class Portfolio(Base):
    __tablename__ = 'portfolios'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    asset_name = Column(String)
    asset_type = Column(String)
    quantity = Column(Float)
    current_price = Column(Float)
    timestamp = Column(DateTime)
