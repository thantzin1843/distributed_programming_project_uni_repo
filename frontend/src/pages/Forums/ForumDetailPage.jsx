// import ForumDetail from "../../components/ForumDetail";


// export default function ForumDetailPage() {
//   const mockQuestion = {
//     _id: "q1",
//     title: "Why is my React Native image upload not working with MongoDB?",
//     body: "I tried uploading images using Multer, but it fails when I save to MongoDB GridFS...",
//     author: { username: "Alice" },
//     tags: ["React Native", "MongoDB", "File Upload"],
//     votesCount: 5,
//     createdAt: "2025-08-24T10:00:00Z",
//     acceptedAnswerId: "a2",
//   };

//   const mockAnswers = [
//     {
//       _id: "a1",
//       body: "Check if your Multer config is storing files correctly. Also, MongoDB GridFS requires specific setup.",
//       author: { username: "Bob" },
//     },
//     {
//       _id: "a2",
//       body: "You need to use Multer-GridFS-Storage package. It connects Multer with MongoDB GridFS easily.",
//       author: { username: "Charlie" },
//     },
//   ];

//   return <ForumDetail question={mockQuestion} answers={mockAnswers} />;
// }
// src/pages/ForumDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnswerList from '../../components/AnswerList';
import ForumDetail from '../../components/ForumDetail';

const ForumDetailPage = () => {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  // In a real app, this would fetch data from your API
  useEffect(() => {
    // Dummy data for demonstration
    const dummyQuestion = {
      _id: '123',
      title: 'Why use Haar Cascade instead of CNN?',
      body: 'I am working on a facial recognition project and trying to decide between using Haar Cascades or a Convolutional Neural Network (CNN). What are the practical differences, and when would one be preferred over the other?',
      votes: 42,
      views: 1200,
      isResolved: false,
      tags: ['Computer Vision', 'Python', 'Machine Learning'],
      askedBy: { name: 'Alice Smith' },
      createdAt: '2025-08-20T10:00:00Z',
    };

    const dummyAnswers = [
      {
        _id: 'ans1',
        questionId: '123',
        answeredBy: { name: 'Bob Johnson' },
        body: 'Haar Cascades are much simpler and faster for real-time applications on low-power devices. They are  are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are are much simpler and faster for real-time applications on low-power devices. They are a feature-based approach that requires less computational power. CNNs, on the other hand, are more accurate and robust to variations in lighting, pose, and scale, but require significant computational resources and a large training dataset.',
        isAccepted: true,
        votes: 25,
        createdAt: '2025-08-20T11:00:00Z',
      },
       {
        _id: 'ans2',
        questionId: '123',
        answeredBy: { name: 'Thant' },
        body: 'Haar Cascades are much simpler and faster for real-time applications on low-power devices. They are a feature-based approach that requires less computational power. CNNs, on the other hand, are more accurate and robust to variations in lighting, pose, and scale, but require significant computational resources and a large training dataset.',
        isAccepted: true,
        votes: 25,
        createdAt: '2025-08-20T11:00:00Z',
      },
      // ... more dummy answers
    ];
    setQuestion(dummyQuestion);
    setAnswers(dummyAnswers);
  }, [questionId]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen relative">
      <ForumDetail question={question} />
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{answers.length} Answers</h2>
        <AnswerList answers={answers} />
        {/* <AnswerFor questionId={question._id} /> */}
      </div>

       {/* answer form  */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Your Answer</h2>
        <textarea
          rows="6"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your answer here..."
        ></textarea>
        <input type="file" name="" id="" className="p-2 rounded-md border border-gray-500 w-full" />
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Post Your Answer
        </button>
        </div>
    </div>
  );
};

export default ForumDetailPage;