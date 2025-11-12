import React, { useState } from "react";
import { Link } from "react-router";
import { FaSpinner } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("If this email is registered, a password reset link will be sent.");
    }, 1500);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Reset Your Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7E59D3]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-[#7E59D3] hover:bg-[#6b46c1] text-white font-medium py-2.5 rounded-lg transition duration-200"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2 h-5 w-5" />
                Sending...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            Remember your password?{" "}
            <Link to="/login" className="text-[#7E59D3] font-medium hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
