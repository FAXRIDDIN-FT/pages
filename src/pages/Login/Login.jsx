import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
    
      <div className="flex justify-center flex-col items-center min-h-screen bg-black">
        <div className="bg-gray-900 shadow-lg rounded-xl p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Password</label>
              <input type="password" placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition">
              Login
            </button>
          </form>
        </div>
         <button onClick={() => navigate("/") } className=' text-white text-center text-2xl '>   Go Home</button>
      </div>
    </>
  )
}

export default Login