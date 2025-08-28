from pydantic import BaseModel, Field
from typing import Optional, Literal
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


class Comment(BaseModel):
    id: Optional[PyObjectId] = Field(default=None, alias="_id")
    body: str = Field(..., description="Comment text content")
    createdBy: PyObjectId = Field(..., description="Reference to User who created the comment")
    
    parentType: Literal["question", "answer"] = Field(..., description="Indicates whether comment is on a Question or an Answer")
    parentId: PyObjectId = Field(..., description="Reference to the Question or Answer")

    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
