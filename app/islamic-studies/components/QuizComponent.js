"use client";

import React, { useState } from "react";

const QuizComponent = ({ quiz, sectionNumber, questionNumber, totalQuestions }) => {
  // Handle both single quiz object and array of quizzes
  const quizArray = Array.isArray(quiz) ? quiz : [quiz];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [eliminatedOptions, setEliminatedOptions] = useState({});
  const [showResults, setShowResults] = useState({});
  const [animationDirection, setAnimationDirection] = useState('enter');

  const currentQuiz = quizArray[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const eliminated = eliminatedOptions[currentQuestionIndex] || [];
  const showResult = showResults[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuiz?.correctAnswer;
  const canProceed = isCorrect && showResult;

  const handleAnswer = (answer) => {
    if (showResult && isCorrect) return; // Already got it right
    
    const correct = answer === currentQuiz.correctAnswer;
    
    if (correct) {
      // Correct answer - show success and allow proceed
      setSelectedAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: answer
      }));
      setShowResults(prev => ({
        ...prev,
        [currentQuestionIndex]: true
      }));
    } else {
      // Wrong answer - eliminate this option
      setEliminatedOptions(prev => ({
        ...prev,
        [currentQuestionIndex]: [...(prev[currentQuestionIndex] || []), answer]
      }));
    }
  };

  const handleNext = () => {
    if (!canProceed) return;
    
    if (currentQuestionIndex < quizArray.length - 1) {
      setAnimationDirection('exit');
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setAnimationDirection('enter');
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setAnimationDirection('exit');
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev - 1);
        setAnimationDirection('enter');
      }, 300);
    }
  };

  // Build quiz title
  let quizTitle = `Section ${sectionNumber} Quiz`;
  if (quizArray.length > 1) {
    quizTitle += ` - Question ${currentQuestionIndex + 1} of ${quizArray.length}`;
  }

  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h3 className="text-sm font-semibold mb-4">{quizTitle}</h3>
      
      {/* Question with animation */}
      <div 
        key={currentQuestionIndex}
        className={`transition-all duration-300 ease-in-out ${
          animationDirection === 'enter' 
            ? 'animate-fade-in' 
            : 'animate-fade-out'
        }`}
      >
        <p className="text-sm mb-4 leading-relaxed font-medium">{currentQuiz.question}</p>
        
        <div className="space-y-2 mb-4">
          {currentQuiz.options.map((option, index) => {
            const isEliminated = eliminated.includes(option);
            const isCorrectOption = option === currentQuiz.correctAnswer;
            const isSelected = selectedAnswer === option;
            
            let buttonClass = "w-full text-left px-4 py-3 text-sm border rounded-md transition-all duration-200 font-medium relative";
            
            if (showResult && isCorrectOption) {
              // Only show green when they got it right
              buttonClass += " bg-green-50 border-green-400 text-green-900 shadow-sm";
            } else if (isEliminated) {
              // Eliminated options - scratched off and disabled
              buttonClass += " bg-gray-100 border-gray-300 text-gray-400 opacity-60 cursor-not-allowed line-through";
            } else if (isSelected) {
              buttonClass += " bg-gray-800 border-gray-800 text-white shadow-md";
            } else {
              buttonClass += " border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400";
            }

            return (
              <button
                key={index}
                onClick={() => !showResult && !isEliminated && handleAnswer(option)}
                disabled={showResult || isEliminated}
                className={buttonClass}
              >
                <div className="flex items-center gap-2">
                  {showResult && isCorrectOption && (
                    <span className="text-green-600 font-bold text-base flex-shrink-0">✓</span>
                  )}
                  {isEliminated && (
                    <span className="text-gray-400 font-bold text-base flex-shrink-0">✗</span>
                  )}
                  <span className={isEliminated ? 'line-through' : ''}>{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Result message - only show when correct */}
        {showResult && isCorrect && (
          <div className="mb-4 p-3 rounded-md text-sm font-medium transition-all duration-300 bg-green-50 text-green-800 border border-green-200">
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              <span>Correct! Well done.</span>
            </div>
          </div>
        )}
        
        {/* Show message when wrong option is eliminated */}
        {eliminated.length > 0 && !showResult && (
          <div className="mb-4 p-3 rounded-md text-sm font-medium bg-yellow-50 text-yellow-800 border border-yellow-200">
            <div className="flex items-center gap-2">
              <span className="text-lg">✗</span>
              <span>That's not correct. Try another option.</span>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center gap-3 mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          
          {canProceed && currentQuestionIndex < quizArray.length - 1 && (
            <button
              onClick={handleNext}
              className="px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors shadow-sm"
            >
              Next Question →
            </button>
          )}
          
          {canProceed && currentQuestionIndex === quizArray.length - 1 && (
            <div className="px-4 py-2 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-md">
              ✓ All questions completed!
            </div>
          )}
        </div>
      </div>

      {/* Progress indicator */}
      {quizArray.length > 1 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex gap-1">
            {quizArray.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  index < currentQuestionIndex
                    ? 'bg-green-500'
                    : index === currentQuestionIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
