"use client";

import React, { useState, useEffect } from "react";
import AccessButton from "./components/AccessButton";

const CourseAccess = ({ children, courseTitle }) => {
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
          // Expired, remove it
          localStorage.removeItem("islamic_studies_access");
          setHasAccess(false);
        }
      } catch {
        // Old format, remove it
        localStorage.removeItem("islamic_studies_access");
        setHasAccess(false);
      }
    } else {
      setHasAccess(false);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  const emailSubject = courseTitle 
    ? `Request Access Code for ${courseTitle}`
    : "Request Access Code for Islamic Studies Course";
  const emailBody = courseTitle
    ? `Hello,\n\nI would like to request an access code to access the "${courseTitle}" course.\n\nThank you!`
    : `Hello,\n\nI would like to request an access code to access Islamic Studies courses.\n\nThank you!`;
  const mailtoLink = `mailto:Mubarak014@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header with Login Button */}
        <div className="flex justify-end mb-8">
          <AccessButton />
        </div>

        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-2">Course Access Required</h2>
          {courseTitle && (
            <h3 className="text-xl font-semibold mb-6 text-gray-700">{courseTitle}</h3>
          )}
          <p className="text-base text-gray-600 mb-6">
            Please login using the Login button above to access this course.
          </p>
          <p className="text-sm text-gray-600 mb-8">
            Need an access code? Contact us to request access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={mailtoLink}
              className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Request Access Code via Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAccess;
