from fastapi import FastAPI 
from routers import user_router,question_router
app = FastAPI()
@app.get('/')
def home():
    return {"message":"home api"}

# User section
app.include_router(user_router.router , prefix='/api/users' , tags=['Users'])
app.include_router(question_router.router , prefix='/api/questions' , tags=['Questions'])

