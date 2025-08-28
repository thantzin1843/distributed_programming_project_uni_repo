from fastapi import APIRouter
from database import question_collection,comment_collection, answer_collection  
from schemas.question_schema import Question  
from schemas.comment_schema import Comment  
from schemas.answer_schema import Answer
from fastapi.encoders import jsonable_encoder
from bson import ObjectId

router = APIRouter()

# get all questions
@router.get("/")
async def get_all_questions():
    questions = list(question_collection.find())
    for question in questions:
        question["_id"] = str(question["_id"])
    return jsonable_encoder(
        questions,
        custom_encoder={ObjectId: str}
    )

# get question by id
@router.get("/{question_id}")
async def get_question_by_id(question_id: str):
    question = question_collection.find_one({"_id": ObjectId(question_id)})
    if question:
        question["_id"] = str(question["_id"])
        return jsonable_encoder(
            question,
            custom_encoder={ObjectId: str}
        )
    return {"error": "Question not found"}

# POST to save question
@router.post("/")
async def create_question(question: Question):
    question_data = question.dict(by_alias=True, exclude_none=True)
    result = question_collection.insert_one(question_data)

    response = {**question_data, "_id": str(result.inserted_id)}

    return jsonable_encoder(
        response,
        custom_encoder={ObjectId: str}
    )

# comment
@router.post("/save_comment")
async def create_comment(comment: Comment):
    # Convert Pydantic model to dict and use aliases for MongoDB
    comment_data = comment.dict(by_alias=True, exclude_none=True)
    
    # Insert into MongoDB
    result = comment_collection.insert_one(comment_data)
    
    # Prepare response
    response = {**comment_data, "_id": str(result.inserted_id)}
    
    return jsonable_encoder(response, custom_encoder={ObjectId: str})


# save answer
@router.post("/save_answer")
async def create_answer(answer: Answer):
    # Convert Pydantic model to dict and use aliases
    answer_data = answer.dict(by_alias=True, exclude_none=True)
    
    # Insert into MongoDB
    result = answer_collection.insert_one(answer_data)
    
    # Prepare response
    response = {**answer_data, "_id": str(result.inserted_id)}
    
    return jsonable_encoder(response, custom_encoder={ObjectId: str})