import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SkeletonUser from '../skeletonUser/SkeletonUser'

const Users = () => {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://dummyjson.com/users")
      .then(res => setUsers(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return (
      <div className='text-center text-red-500 mt-10 text-lg font-semibold'>
        Something went wrong. Please try again.
      </div>
    )
  }

  return (
    <div className='min-h-screen py-10 px-6 bg-[#0b0b17]'>
      <h2 className='text-white text-4xl font-bold text-center mb-12'>User Profiles</h2>

      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {users?.users?.map((user) => (
          <div
            key={user.id}
            className='bg-[#161621] rounded-xl p-6 text-white shadow-md hover:shadow-xl transition duration-300'
          >
            <div className='flex items-center gap-5 mb-5'>
              <div className='relative w-20 h-20'>
                <img
                  src={user.image}
                  alt={user.firstName}
                  className='w-full h-full object-cover rounded-full border-2 border-indigo-500'
                />
                <span className='absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-[#161621] rounded-full animate-ping'></span>
                <span className='absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-[#161621] rounded-full'></span>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-cyan-400'>{user.firstName} {user.lastName}</h3>
                <p className='text-sm text-gray-400'>{user.company?.title || 'Developer'}</p>
              </div>
            </div>

            <div className='text-gray-300 text-sm space-y-1 pl-1'>
              <p>📧 <span className='text-white'>{user.email}</span></p>
              <p>📱 <span className='text-white'>{user.phone}</span></p>
              <p>📍 <span className='text-white'>{user.address?.city || 'Tashkent'}</span></p>
            </div>

            <div className='mt-6 flex justify-between gap-4'>
              <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition'>
                Edit
              </button>
              <button className='w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition'>
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {loading && <SkeletonUser count={30} />}
    </div>
  )
}

export default Users
