import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SkeletonPosts from '../skeletonPost/SkeletonPosts'

const Posts = () => {
    const [posts, setPosts] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
         setLoading(true)
        axios
            .get("https://dummyjson.com/posts")
            .then(res => {
                setPosts(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => setLoading(false))
    }, [])

    if (error) {
        return (
            <div className='text-center text-red-700'>
                <p>Something went wrong</p>
            </div>
        )
    }

    return (
        <div className='min-h-screen py-10 bg-gray-950'>
            <h2 className='container mx-auto text-start text-3xl font-bold mb-10 text-white'>Post List</h2>

            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {posts?.posts?.map((post) => (
                    <div
                        key={post.id}
                        className='bg-gray-900 bg-opacity-60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl'
                    >
                        <h3 className='text-xl font-semibold text-white mb-2 text-center'>
                            {post.title}
                        </h3>
                        <p className='text-sm text-gray-300 mb-3 line-clamp-4 text-justify'>
                            {post.body}
                        </p>

                        <div className='text-sm text-gray-300 mb-4'>
                            <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
                            <p><strong>Likes:</strong> {post.reactions?.likes}</p>
                            <p><strong>Dislikes:</strong> {post.reactions?.dislikes}</p>
                        </div>

                        <div className='mt-auto flex gap-3 w-full justify-center'>
                            <button className='px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition'>
                                Read More
                            </button>
                            <button className='px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition'>
                                Bookmark
                            </button>
                        </div>
                    </div>
                ))}
            </div>
             {loading && <SkeletonPosts count={30}  /> }
        </div>
    )
}

export default Posts
