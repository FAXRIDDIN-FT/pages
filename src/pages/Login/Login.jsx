import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
    
 <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
  <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
    <h2 className="text-3xl font-extrabold text-center mb-8 text-indigo-700 tracking-wide">Welcome Back</h2>

    <form className="flex flex-col gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 border border-gray-300 bg-indigo-50 text-gray-800 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-3 border border-gray-300 bg-indigo-50 text-gray-800 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-indigo-300"
      >
        Login
      </button>
    </form>

    <div className="mt-6 text-center">
      <button
        onClick={() => navigate("/")}
        className="text-indigo-600 hover:text-indigo-500 transition text-lg font-medium"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default Login