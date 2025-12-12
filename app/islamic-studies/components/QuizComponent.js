"use client";

import React, { useState } from "react";

const QuizComponent = ({ quiz, sectionNumber, questionNumber, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === quiz.correctAnswer;

  // Build quiz title
  let quizTitle = `Section ${sectionNumber} Quiz`;
  if (totalQuestions && totalQuestions > 1) {
    quizTitle += ` - Question ${questionNumber} of ${totalQuestions}`;
  }

  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h3 className="text-sm font-semibold mb-4">{quizTitle}</h3>
      <p className="text-sm mb-4 leading-relaxed">{quiz.question}</p>
      <div className="space-y-2 mb-4">
        {quiz.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrectOption = option === quiz.correctAnswer;
          
          let buttonClass = "w-full text-left px-4 py-2 text-sm border rounded hover:bg-gray-100 transition-colors";
          
          if (showResult) {
            if (isCorrectOption) {
              buttonClass += " bg-green-50 border-green-300 text-green-800";
            } else if (isSelected && !isCorrect) {
              buttonClass += " bg-red-50 border-red-300 text-red-800";
            } else {
              buttonClass += " border-gray-200 text-gray-600";
            }
          } else {
            buttonClass += " border-gray-300";
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && handleAnswer(option)}
              disabled={showResult}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
          {isCorrect ? (
            <p className="font-semibold">✓ Correct!</p>
          ) : (
            <div>
              <p className="font-semibold mb-1">✗ Incorrect</p>
              <p className="text-gray-600">Correct answer: {quiz.correctAnswer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
