// import React, { useState } from "react";
// import { ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";

// const ForumDetail = ({ question, answers }) => {
//   const [voteCount, setVoteCount] = useState(question.votesCount);

//   const handleVote = (type) => {
//     if (type === "up") setVoteCount(voteCount + 1);
//     if (type === "down") setVoteCount(voteCount - 1);
//     // TODO: call backend API /api/vote
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       {/* Question Section */}
//       <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
//         <h1 className="text-2xl font-bold mb-2">{question.title}</h1>
//         <p className="text-gray-700 mb-4">{question.body}</p>

//         <div className="flex items-center space-x-4 text-sm text-gray-500">
//           <span>By: {question.author.username}</span>
//           <span>•</span>
//           <span>{new Date(question.createdAt).toLocaleDateString()}</span>
//         </div>

//         {/* Tags */}
//         <div className="mt-3 flex space-x-2">
//           {question.tags.map((tag, idx) => (
//             <span
//               key={idx}
//               className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Votes */}
//         <div className="flex items-center space-x-3 mt-4">
//           <button
//             onClick={() => handleVote("up")}
//             className="p-2 rounded-full hover:bg-green-100"
//           >
//             <ThumbsUp className="w-5 h-5 text-green-600" />
//           </button>
//           <span className="font-medium">{voteCount}</span>
//           <button
//             onClick={() => handleVote("down")}
//             className="p-2 rounded-full hover:bg-red-100"
//           >
//             <ThumbsDown className="w-5 h-5 text-red-600" />
//           </button>
//         </div>
//       </div>

//       {/* Answers Section */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold mb-3">Answers</h2>
//         {answers.map((answer) => (
//           <div
//             key={answer._id}
//             className="bg-gray-50 shadow-sm rounded-xl p-4"
//           >
//             <p className="text-gray-800 mb-3">{answer.body}</p>
//             <div className="flex items-center justify-between text-sm text-gray-500">
//               <span>By: {answer.author.username}</span>
//               <div className="flex items-center space-x-2">
//                 {question.acceptedAnswerId === answer._id && (
//                   <span className="flex items-center text-green-600 font-medium">
//                     <CheckCircle className="w-4 h-4 mr-1" /> Accepted
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Answer Section */}
//       <div className="mt-6 bg-white shadow rounded-xl p-4">
//         <h3 className="font-semibold text-lg mb-2">Your Answer</h3>
//         <textarea
//           rows="5"
//           className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Write your answer here..."
//         />
//         <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//           Post Answer
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ForumDetail;
// src/components/ForumDetail.jsx
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";
const ForumDetail = ({ question }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{question.title}</h1>
        <div className="p-2 px-10 text-white bg-blue-500 rounded-lg text-xl font-semibold ">Answer</div>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>Asked on {new Date(question.createdAt).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{question.views} views</span>
      </div>
      <div className="flex space-x-4">
        <div className="flex-shrink-0 text-center">
          <button className="text-gray-500 hover:text-blue-600 transition">
            {/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l8 8-8 8-1.41-1.41L16.17 13H4v-2h12.17l-5.58-5.59L12 4z" /></svg> */}
            <ThumbsUp className="w-5 h-5 text-green-600" />
          </button>
          <p className="text-xl font-bold text-gray-700">{question.votes}</p>
          <button className="text-gray-500 hover:text-blue-600 transition mt-2">
            {/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20l-8-8 8-8 1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20z" /></svg> */}
            <ThumbsDown className="w-5 h-5 text-red-600" />
          </button>
        </div>
        <div className="flex-1">
          <div className="prose max-w-none text-gray-800">
            <p>{question.body}</p>
          </div>
          <div className="flex space-x-2 mt-4">
            {question.tags.map(tag => (
              <span key={tag} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-4">
        <CommentList parentId={question._id} parentType="question" />
        <CommentForm parentId={question._id} parentType="question" />
      </div>

     
    </div>
  );
};

export default ForumDetail;