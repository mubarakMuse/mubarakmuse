"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const CodingGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailBody = `
    You have received a new inquiry for the coding guide:

    Full Name: ${formData.name}
    Email: ${formData.email}

    Best wishes,
    mubarakmuse.com
    `;

    const emailParams = {
      to_email: "mubarak014@gmail.com", // Replace with your email
      message: emailBody,
      reply_to: formData.email,
      from_name: formData.name,
    };

    try {
      await emailjs.send(
        "default_service",
        "template_1jr7eem",
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Replace with your EmailJS User ID
      );

      alert("Message Sent Successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("An error occurred, please try again.");
    }

    setFormData({
      name: "",
      email: ""
    });
  };

  return (
    <div className="mx-auto p-6 max-w-4xl bg-white text-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">
        Learn to Code in Only 55 Hours
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Follow this step-by-step guide to kickstart your coding journey in just 55 hours!
      </p>

      <div className="flex flex-col items-center mb-8">
        <a
          href="https://calendly.com/mubarak014/meet-with-mubarak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold bg-blue-600 text-white px-6 py-3 rounded-full transition transform hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 mb-4"
        >
          Schedule a Free 15-Minute Call
        </a>
      </div>

      <button
        onClick={toggleExpansion}
        className="w-full text-left text-lg font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 p-4 rounded-lg mb-4 transition-colors"
      >
        {isExpanded ? 'Hide Guide Details ⬆️' : 'Show Guide Details ⬇️'}
      </button>

      {isExpanded && (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">1. HTML - 5 Hours</h3>
            <p className="text-gray-700 mb-2">
              Start with the basics of web structure, including elements, attributes, and forms.
            </p>
            <a
              href="https://www.codecademy.com/learn/learn-html"
              className="text-indigo-600 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Codecademy HTML Course
            </a>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">2. CSS - 5 Hours</h3>
            <p className="text-gray-700 mb-2">
              Learn how to style and layout your web pages using Flexbox, Grid, and responsive design techniques.
            </p>
            <a
              href="https://www.codecademy.com/learn/learn-css"
              className="text-indigo-600 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Codecademy CSS Course
            </a>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">3. JavaScript - 10 Hours</h3>
            <p className="text-gray-700 mb-2">
              Understand the fundamentals of programming and interactivity on the web.
            </p>
            <a
              href="https://www.codecademy.com/learn/introduction-to-javascript"
              className="text-indigo-600 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Codecademy JavaScript Course
            </a>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">4. Command Line - 3 Hours</h3>
            <p className="text-gray-700 mb-2">
              Get comfortable with navigating and managing files through the terminal.
            </p>
            <a
              href="https://www.codecademy.com/learn/learn-the-command-line"
              className="text-indigo-600 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Codecademy Command Line Course
            </a>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">5. React - 12 Hours</h3>
            <p className="text-gray-700 mb-2">
              Build dynamic user interfaces with this popular JavaScript library.
            </p>
            <a
              href="https://www.codecademy.com/learn/react-101"
              className="text-indigo-600 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Codecademy React Course
            </a>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">6. Node.js - 10 Hours</h3>
            <p className="text-gray-700 mb-2">
              Learn server-side JavaScript and build basic APIs.
            </p>
            <a
              href="https://www.codecademy.com/learn/learn-node-js"
              className="text-indigo-600 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Codecademy Node.js Course
            </a>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">7. SQL - 5 Hours</h3>
            <p className="text-gray-700 mb-2">
              Learn to interact with databases and perform CRUD operations.
            </p>
            <a
              href="https://www.codecademy.com/learn/learn-sql"
              className="text-indigo-600 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Codecademy SQL Course
            </a>
          </div>
        </div>
      )}

      <h3 className="text-3xl font-bold mt-10 mb-4">Additional Steps</h3>
      <p className="text-lg mb-4 text-gray-700">
        After completing these courses, follow these additional steps to further solidify your skills:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          Practice coding challenges on{' '}
          <a
            href="https://leetcode.com/"
            className="text-indigo-600 hover:text-indigo-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
          .
        </li>
        <li>Build personal projects to apply what you have learned and showcase your skills.</li>
        <li>Contribute to open-source projects to gain practical experience.</li>
      </ul>
      
      <div className="flex flex-col items-center mb-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Request More Info</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          or call us at{' '}
          <a href="tel:+17653511316" className="text-indigo-600 hover:underline">
            +1 (765)-351-1316
          </a>
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-3xl font-bold mb-4">Watch the Video</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/jDQwl0TB9Tk"
            title="Learn to Code in 55 Hours Video"
            className="w-full h-full rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CodingGuide;
