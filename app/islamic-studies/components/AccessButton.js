"use client";

import React, { useState, useEffect } from "react";

const AccessButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = () => {
    const accessData = localStorage.getItem("islamic_studies_access");
    if (accessData) {
      try {
        const { expiresAt } = JSON.parse(accessData);
        if (new Date().getTime() < expiresAt) {
          setIsLoggedIn(true);
        } else {
          // Expired, remove it
          localStorage.removeItem("islamic_studies_access");
          setIsLoggedIn(false);
        }
      } catch {
        // Old format, remove it
        localStorage.removeItem("islamic_studies_access");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!accessCode.trim()) {
      setError("Please enter a valid access code");
      return;
    }

    // Store access with expiration (4 hours from now)
    const expiresAt = new Date().getTime() + 4 * 60 * 60 * 1000; // 4 hours
    localStorage.setItem("islamic_studies_access", JSON.stringify({
      granted: true,
      expiresAt: expiresAt
    }));

    setIsLoggedIn(true);
    setShowModal(false);
    setAccessCode("");
    
    // Reload to refresh access
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("islamic_studies_access");
    setIsLoggedIn(false);
    window.location.reload();
  };

  if (isLoggedIn) {
    return (
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
      >
        Logout
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
      >
        Login
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Enter Access Code</h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  setError("");
                  setAccessCode("");
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="accessCode" className="block text-sm font-medium mb-2">
                  Access Code
                </label>
                <input
                  type="text"
                  id="accessCode"
                  value={accessCode}
                  onChange={(e) => {
                    setAccessCode(e.target.value);
                    setError("");
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your access code"
                  autoFocus
                  required
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setError("");
                    setAccessCode("");
                  }}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </form>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                Access will expire after 4 hours. You can login again anytime.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessButton;
