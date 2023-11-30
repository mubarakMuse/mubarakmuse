import React from 'react';
import TafseerSignUpForm from '@/components/TafseerSignUpForm';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <Link href="/" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
            clipRule="evenodd"
          />
        </svg>{" "}
        Back
      </Link>
      <div className="bg-gray-100 min-h-screen text-center flex items-center justify-center">
        <div className="bg-gray-100 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Mubarak&apos;s Tafseer Class</h1>
          <p className="text-xl font-semibold mb-4">Sign-Up form (Details Below)</p>
          <div className="mt-4 mb-8">
            <TafseerSignUpForm />
          </div>

          <div className="space-y-4">
            <div className="border bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Mission & Goal</h2>
              <ul className="list-inside list-disc mt-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Study Juz Amma Tafseer
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Understand Practical Lessons
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Graduate Successfully
                </li>
              </ul>
            </div>
            <div className="border bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Program Details</h2>
              <ul className="list-inside list-disc mt-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Every Monday
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  6:30 PM - 8 PM
                </li>
              </ul>
            </div>
            <div className="border bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Location</h2>
              <p className="mt-2">12500 Minnehaha Ave, Minneapolis, MN 55404</p>
              <p className="mt-1">(In-person) </p>

            </div>
            <div className="border bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Age Group</h2>
              <p className="mt-2">10-13 Years Old (Middle School)</p>
            </div>
            <div className="border bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Qualifications</h2>
              <ol className="list-inside list-decimal mt-2">
                <li>Memorized Juz Amma</li>
                <li>Proficient Reading Skills</li>
                <li>Self-Motivated Students</li>
              </ol>
            </div>
            <div className="border bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Class Size</h2>
              <p className="mt-2">Limited to 20 Students only</p>
            </div>
            <div className="border bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Price</h2>
              <p className="mt-2">Starting at $50/Month (Free scholarships available)</p>
            </div>
            <div className="border bg-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="mt-2">Macalin Mubarak: 612-814-9554</p>
              <p className="mt-2">Mubarak014@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
