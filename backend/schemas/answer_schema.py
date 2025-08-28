from pydantic import BaseModel, Field
from typing import List, Optional, Literal
from datetime import datetime
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v, info=None):  # add info=None for Pydantic v2
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls, core_schema, handler):
        return {
            "type": "string",
            "format": "ObjectId"
        }

class Voter(BaseModel):
    userId: PyObjectId = Field(..., description="Reference to User who voted")
    vote: Literal[1, -1] = Field(..., description="Vote can be +1 or -1")


class Answer(BaseModel):
    id: Optional[PyObjectId] = Field(default=None, alias="_id")
    questionId: PyObjectId = Field(..., description="Reference to Question")
    answeredBy: PyObjectId = Field(..., description="Reference to User who answered")
    body: str = Field(..., description="Answer body, supports Markdown/HTML")
    answer_images: List[str] = Field(default=[], description="List of answer image URLs")

    # Status
    isAccepted: bool = Field(default=False, description="True if marked as solution")

    # Voting
    votes: int = Field(default=0, description="Sum of upvotes - downvotes")
    voters: List[Voter] = Field(default=[], description="Unique vote tracking")

    # Timestamps
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
