"use client";

import React, { useState, useEffect } from "react";

const LoginBanner = ({ courseTitle, slug, isQuiz = false }) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = () => {
    const accessData = localStorage.getItem("islamic_studies_access");
    if (accessData) {
      try {
        const { expiresAt } = JSON.parse(accessData);
        if (new Date().getTime() < expiresAt) {
          setHasAccess(true);
        } else {
          localStorage.removeItem("islamic_studies_access");
          setHasAccess(false);
        }
      } catch {
        localStorage.removeItem("islamic_studies_access");
        setHasAccess(false);
      }
    } else {
      setHasAccess(false);
    }
    setIsLoading(false);
  };

  if (isLoading || hasAccess) {
    return null;
  }

  const pageType = isQuiz ? "quiz" : "course";
  const subject = isQuiz 
    ? `Request Access Code for ${courseTitle} Quiz`
    : `Request Access Code for ${courseTitle} Course`;
  const body = isQuiz
    ? `Hello,\n\nI would like to request an access code to take the quiz for the "${courseTitle}" course.\n\nThank you!`
    : `Hello,\n\nI would like to request an access code to access the "${courseTitle}" course.\n\nThank you!`;

  const mailtoLink = `mailto:Mubarak014@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 mb-1">
            Please login to access this {pageType}.
          </p>
          <p className="text-xs text-gray-600 mb-2">
            Use the Login button at the top right to enter your access code. Need an access code?
          </p>
          <a
            href={mailtoLink}
            className="text-xs text-gray-900 hover:text-gray-700 underline font-medium"
          >
            Request access code via email →
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;
