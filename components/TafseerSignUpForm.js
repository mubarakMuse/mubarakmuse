'use client'
import { useState } from 'react';
import { SupabaseClient } from "@supabase/supabase-js";

const TafseerSignUpForm = () => {
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [numStudents, setNumStudents] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState(null); // Initialize message state
  const [messageType, setMessageType] = useState(null); // Initialize message type
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  const supabase = new SupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from('signups')
        .upsert([
          {
            email,
            parent_name: parentName,
            num_students: numStudents,
            phone_number: phoneNumber,
          },
        ]);

      if (error) {
        throw error;
      }

      // Set success message
      setMessage('Sign-up successful!');
      setMessageType('success');
      setFormSubmitted(true); // Set form as submitted

      // Clear form fields
      setEmail('');
      setParentName('');
      setNumStudents('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Error submitting sign-up data:', error);

      // Set error message
      setMessage('Error submitting sign-up data. Please try again later.');
      setMessageType('error');
    }
  };

  return (
    <div>
        
      {formSubmitted ? (
        <div
          className={`${
            messageType === 'success' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
          } p-2 mb-4 rounded-lg`}
        >
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-blue-200 p-6 text-centerrounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="parentName" className="block text-gray-700 font-semibold mb-2">Parent Name:</label>
            <input
              type="text"
              id="parentName"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="numStudents" className="block text-gray-700 font-semibold mb-2">Number of Students:</label>
            <input
              type="number"
              id="numStudents"
              value={numStudents}
              onChange={(e) => setNumStudents(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TafseerSignUpForm;
