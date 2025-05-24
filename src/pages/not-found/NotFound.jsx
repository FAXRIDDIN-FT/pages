import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-900  text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-cyan-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6">Oops! The page you're looking for doesn't exist.</p>
        
        <button  onClick={() => navigate("/") } className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg transition"  >
          Back to Home
        </button>
      </div>
    </div>
    </>
  )
}

export default NotFound