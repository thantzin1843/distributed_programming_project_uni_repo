// src/components/CommentList.jsx
import React from 'react';

const CommentList = ({ parentId, parentType }) => {
  // In a real app, you'd fetch comments based on parentId
  const comments = [
    { _id: 'com1', body: 'Great explanation!', createdBy: { name: 'Dev User' }, createdAt: '2025-08-20T12:00:00Z' },
     { _id: 'com1', body: 'Great explanation!', createdBy: { name: 'Dev User' }, createdAt: '2025-08-20T12:00:00Z' },
      { _id: 'com1', body: 'Great explanation!', createdBy: { name: 'Dev User' }, createdAt: '2025-08-20T12:00:00Z' },
  ];

  return (
    <div className="space-y-1 text-sm">
      {comments.map(comment => (
        <div key={comment._id} className="text-gray-600 border-b border-gray-100 pb-2">
          <span className="text-gray-800">{comment.body}</span>
          <span className="text-gray-400"> – {comment.createdBy.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CommentList;