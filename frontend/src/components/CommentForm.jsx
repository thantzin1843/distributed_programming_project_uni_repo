// src/components/CommentForm.jsx
import React, { useState } from 'react';

const CommentForm = ({ parentId, parentType }) => {
  const [commentBody, setCommentBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentBody.trim()) {
      // Logic to post comment
      console.log(`Posting comment to ${parentType} with ID ${parentId}: ${commentBody}`);
      setCommentBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
        rows="2"
        placeholder="Add a comment..."
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white px-3 py-1 text-sm rounded-md shadow hover:bg-blue-700 transition"
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;