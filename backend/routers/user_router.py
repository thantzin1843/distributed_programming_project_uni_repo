from fastapi import APIRouter
from schemas.user_schema import User
from database import user_collection
router = APIRouter()

@router.post('/')
async def createUser(user:User):
    result = user_collection.insert_one(user.dict())
    return {**user.dict(),"_id": str(result.inserted_id)}

