"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import coursesData from "../../courses.json";
import AccessButton from "../../components/AccessButton";
import LoginBanner from "../../components/LoginBanner";

const CourseQuiz = () => {
  const params = useParams();
  const slug = params?.slug;
  
  // Client-side function to get course by slug
  const getCourseBySlug = (slug) => {
    if (!slug) return null;
    const courses = coursesData.courses || [];
    return courses.find(course => course.courseSlug === slug) || null;
  };
  const [courseData, setCourseData] = useState(null);
  const [allQuestions, setAllQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // Check access
    const accessData = localStorage.getItem("islamic_studies_access");
    if (accessData) {
      try {
        const { expiresAt } = JSON.parse(accessData);
        if (new Date().getTime() < expiresAt) {
          setHasAccess(true);
        }
      } catch {
        setHasAccess(false);
      }
    }

    // Load course data
    if (slug) {
      const course = getCourseBySlug(slug);
      if (course) {
        setCourseData(course);
        
        // Check if course is available
        const isAvailable = course.status === "Available Now";
        
        if (isAvailable) {
          // Collect all quiz questions from all sections
          const questions = [];
          course.sections?.forEach((section) => {
            if (section.quiz && Array.isArray(section.quiz)) {
              section.quiz.forEach((quiz, index) => {
                questions.push({
                  id: `section-${section.sectionNumber}-q-${index}`,
                  sectionNumber: section.sectionNumber,
                  sectionTitle: section.sectionTitle,
                  question: quiz.question,
                  options: quiz.options,
                  correctAnswer: quiz.correctAnswer,
                });
              });
            }
          });
          
          setAllQuestions(questions);
        }
      }
    }
    setIsLoading(false);
  }, [slug]);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    // Scroll to top to see results
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateScore = () => {
    let correct = 0;
    allQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: allQuestions.length };
  };

  if (isLoading) {
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-600">Loading quiz...</p>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="bg-white text-black min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex justify-end mb-8">
            <AccessButton />
          </div>
          <LoginBanner courseTitle={courseData?.courseTitle || "Course"} slug={slug} isQuiz={true} />
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Access Required</h1>
            <p className="text-gray-600 mb-6">Please login to take the quiz.</p>
            <Link href={`/islamic-studies/${slug}`} className="text-sm text-gray-600 hover:underline">
              ← Back to Course
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="bg-white text-black min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <Link href="/islamic-studies" className="text-sm text-gray-600 hover:underline">
              ← Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isAvailable = courseData.status === "Available Now";

  if (!isAvailable) {
    return (
      <div className="bg-white text-black min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex justify-end mb-8">
            <AccessButton />
          </div>
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
            <div className="flex items-center gap-2">
              <span className="text-lg">⏳</span>
              <div>
                <p className="text-sm font-medium text-yellow-900">Coming Soon</p>
                <p className="text-xs text-yellow-700 mt-1">This course quiz will be available when the course is released.</p>
              </div>
            </div>
          </div>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Quiz Coming Soon</h1>
            <p className="text-gray-600 mb-6">This quiz will be available when the course is released.</p>
            <Link href={`/islamic-studies/${slug}`} className="text-sm text-gray-600 hover:underline">
              ← Back to Course
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (allQuestions.length === 0) {
    return (
      <div className="bg-white text-black min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">No Quiz Available</h1>
            <p className="text-gray-600 mb-6">This course doesn't have any quiz questions yet.</p>
            <Link href={`/islamic-studies/${slug}`} className="text-sm text-gray-600 hover:underline">
              ← Back to Course
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { correct, total } = calculateScore();
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Login Banner */}
        <LoginBanner courseTitle={courseData.courseTitle} slug={slug} isQuiz={true} />
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
          <Link href={`/islamic-studies/${slug}`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to Course
          </Link>
          <AccessButton />
        </div>

        {/* Course Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{courseData.courseTitle}</h1>
          <p className="text-sm text-gray-600">Complete Course Quiz</p>
        </div>

        {/* Results Summary */}
        {showResults && (
          <div className="mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
            <div className="text-center mb-4">
              <div className="text-4xl font-bold mb-2 text-gray-900">
                {correct} / {total}
              </div>
              <div className="text-2xl font-semibold mb-2" style={{ color: percentage >= 70 ? '#059669' : percentage >= 50 ? '#d97706' : '#dc2626' }}>
                {percentage}%
              </div>
              <p className="text-sm text-gray-600">
                {percentage >= 70 
                  ? "Excellent work! 🎉" 
                  : percentage >= 50 
                  ? "Good effort! Keep studying." 
                  : "Keep practicing! You'll improve."}
              </p>
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Retake Quiz
              </button>
              <Link
                href={`/islamic-studies/${slug}`}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Back to Course
              </Link>
            </div>
          </div>
        )}

        {/* Quiz Questions */}
        <div className="space-y-8">
          {allQuestions.map((question, index) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;
            const showAnswer = showResults;

            return (
              <div
                key={question.id}
                className="p-6 border border-gray-200 rounded-lg bg-white"
              >
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-base font-medium text-gray-900 mb-1">
                        {question.question}
                      </p>
                      <p className="text-xs text-gray-500">
                        From Section {question.sectionNumber}: {question.sectionTitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 ml-11">
                  {question.options.map((option, optIndex) => {
                    const isSelected = userAnswer === option;
                    const isCorrectOption = option === question.correctAnswer;
                    
                    let buttonClass = "w-full text-left px-4 py-3 text-sm border rounded-md transition-colors font-medium";
                    
                    if (showAnswer) {
                      if (isCorrectOption) {
                        buttonClass += " bg-green-50 border-green-400 text-green-900";
                      } else if (isSelected && !isCorrect) {
                        buttonClass += " bg-red-50 border-red-400 text-red-900";
                      } else {
                        buttonClass += " border-gray-200 text-gray-500 bg-white";
                      }
                    } else {
                      if (isSelected) {
                        buttonClass += " bg-gray-800 border-gray-800 text-white";
                      } else {
                        buttonClass += " border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400";
                      }
                    }

                    return (
                      <button
                        key={optIndex}
                        onClick={() => !showAnswer && handleAnswer(question.id, option)}
                        disabled={showAnswer}
                        className={buttonClass}
                      >
                        <div className="flex items-center gap-2">
                          {showAnswer && isCorrectOption && (
                            <span className="text-green-600 font-bold text-base">✓</span>
                          )}
                          {showAnswer && isSelected && !isCorrect && (
                            <span className="text-red-600 font-bold text-base">✗</span>
                          )}
                          <span>{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {showAnswer && (
                  <div className={`mt-4 ml-11 p-3 rounded-md text-sm font-medium ${
                    isCorrect 
                      ? 'bg-green-50 text-green-800 border border-green-300' 
                      : 'bg-red-50 text-red-800 border border-red-300'
                  }`}>
                    {isCorrect ? (
                      <span>✓ Correct!</span>
                    ) : (
                      <span>✗ Incorrect</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        {!showResults && (
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                {Object.keys(answers).length} of {total} questions answered
              </p>
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length === 0}
                className="px-8 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseQuiz;
