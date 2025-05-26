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
      .then(us => {
        setUsers(us.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return (
      <div className='text-center text-red-700 mt-10 text-lg font-semibold'>
        <p>Something went wrong. Please try again.</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen py-10 px-4 bg-[#0e0d1e]'>
      <h2 className='max-w-[1440px] mx-auto text-start text-3xl font-bold mb-10 text-white'>
        👤 User Profiles
      </h2>

      <div className='max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {users?.users?.map((user) => (
          <div
            key={user.id}
            className='bg-[#1d1b2a] border border-[#333348] rounded-2xl p-6 shadow-xl text-white flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300'
          >
            <div className='relative w-28 h-28 mb-4'>
              <img
                src={user.image}
                alt={user.firstName}
                className='w-full h-full rounded-full object-cover border-4 border-cyan-400 shadow-lg transition-transform duration-500 hover:scale-105'
              />
              <div className='absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-[#1d1b2a]'></div>
            </div>

            <h3 className='text-xl font-bold text-cyan-300'>
              {user.firstName} {user.lastName}
            </h3>
            <p className='text-sm text-gray-300'>{user.company?.title || 'Frontend Developer'}</p>

            <div className='text-sm text-gray-300 text-center mt-4 space-y-1'>
              <p><strong className='text-white'>📧 Email:</strong> {user.email}</p>
              <p><strong className='text-white'>📱 Phone:</strong> {user.phone}</p>
              <p><strong className='text-white'>📍 Location:</strong> {user.address?.city || 'Tashkent'}</p>
            </div>

            <div className='mt-6 flex gap-3 w-full justify-center'>
              <button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium rounded-lg hover:brightness-110 transition'>
                Edit
              </button>
              <button className='px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition'>
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
    