// src/components/AnswerCard.jsx
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

const AnswerCard = ({ answer }) => {
  const isAccepted = answer.isAccepted;

  return (
    <div className={`bg-white p-6 rounded-md shadow-sm border ${isAccepted ? 'border-blue-500' : 'border-gray-200'}`}>
      <div className="flex space-x-4">
        <div className="flex-shrink-0 text-center">
         <button className="text-gray-500 hover:text-blue-600 transition">
            {/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l8 8-8 8-1.41-1.41L16.17 13H4v-2h12.17l-5.58-5.59L12 4z" /></svg> */}
            <ThumbsUp className="w-5 h-5 text-green-600" />
          </button>
          <p className="text-xl font-bold text-gray-700">{answer.votes}</p>
          <button className="text-gray-500 hover:text-blue-600 transition mt-2">
            {/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20l-8-8 8-8 1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20z" /></svg> */}
            <ThumbsDown className="w-5 h-5 text-red-600" />
          </button>
          {isAccepted && (
            <div className="mt-2 text-green-500">
              <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
              <span className="text-xs font-semibold">Accepted</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="prose max-w-none text-gray-800">
            <p>{answer.body}</p>
          </div>
          <div className="text-xs text-gray-400 mt-4 text-right">
            Answered by {answer.answeredBy.name} on {new Date(answer.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-4">
        <CommentList parentId={answer._id} parentType="answer" />
        <CommentForm parentId={answer._id} parentType="answer" />
      </div>
    </div>
  );
};

export default AnswerCard;