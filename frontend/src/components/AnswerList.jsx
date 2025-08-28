// src/components/AnswerList.jsx
import React from 'react';
import AnswerCard from './AnswerCard';

const AnswerList = ({ answers }) => {
  return (
    <div className="space-y-6">
      {answers.map(answer => (
        <AnswerCard key={answer._id} answer={answer} />
      ))}
    </div>
  );
};

export default AnswerList;