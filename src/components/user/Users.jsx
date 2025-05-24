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
                setUsers(us.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => setLoading(false))
    }, [])
    console.log(users);

    if (error) {
        return <div className='text-center text-red-700'>
            <p>Somsing went wrong</p>
        </div>
    }

    return (
        <>
            
            <div className=' min-h-screen py-10'>
                <h2 className='container mx-auto text-start text-3xl font-bold mb-10 text-white'>User Profiles</h2>

                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {users?.users?.map((user) => (
                        <div  key={user.id} className='bg-gray-900 bg-opacity-60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl'
                        >
                            <img
                                className='w-28 h-28 rounded-full border-4 border-blue-500 shadow-md'
                                src={user.image}
                                alt={user.firstName}
                            />
                            <h3 className='mt-4 text-xl font-semibold text-white'>
                                {user.firstName} {user.lastName}
                            </h3>
                            <p className='text-sm text-gray-300'>{user.company?.title || "Frontend Developer"}</p>

                            <div className='text-center mt-4 w-full text-sm text-gray-300'>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Location:</strong> {user.address?.city || "Tashkent"}</p>
                            </div>

                            <div className='mt-6 flex gap-3 w-full justify-center'>
                                <button className='px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition'>
                                    Edit
                                </button>
                                <button className='px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition'>
                                    Message
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {loading && <SkeletonUser count={30} /> }
            </div>


        </>
    )
}

export default Users