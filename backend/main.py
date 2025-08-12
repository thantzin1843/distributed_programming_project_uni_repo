from fastapi import FastAPI 
from routers import user_router
app = FastAPI()
@app.get('/')
def home():
    return {"message":"home api"}

# User section
app.include_router(user_router.router , prefix='/api/users' , tags=['Users'])
