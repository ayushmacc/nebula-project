# FinSight - Real-Time Financial Dashboard

## Features
✅ Beautiful React UI with Tailwind CSS  
✅ FastAPI backend with WebSocket streaming  
✅ Real-time market price updates  
✅ Ready to run locally

## Getting Started

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Visit: http://localhost:5173

Make sure backend runs at: http://localhost:8000