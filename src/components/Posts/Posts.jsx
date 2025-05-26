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
      <div className='text-center text-red-700 mt-10 text-lg font-semibold'>
        <p>Something went wrong. Please refresh the page.</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen py-10 px-4 bg-[#0d0c1b]'>
      <h2 className='max-w-[1440px] mx-auto text-start text-3xl font-bold mb-10 text-white'>
        📝 Post List
      </h2>

      <div className='max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {posts?.posts?.map((post) => (
          <div
            key={post.id}
            className='bg-[#1f1d2b] border border-[#2e2c3a] rounded-2xl p-6 shadow-xl text-white transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300'
          >
            <h3 className='text-xl font-bold mb-3 text-center text-cyan-300'>
              {post.title}
            </h3>

            <p className='text-sm text-gray-300 mb-4 line-clamp-4 text-justify'>
              {post.body}
            </p>

            <div className='text-sm text-gray-400 space-y-1'>
              <p><span className='font-medium text-white'>Tags:</span> {post.tags.join(', ')}</p>
              <p><span className='font-medium text-white'>Likes:</span> {post.reactions?.likes}</p>
              <p><span className='font-medium text-white'>Dislikes:</span> {post.reactions?.dislikes}</p>
            </div>

            <div className='mt-5 flex gap-3 justify-center'>
              <button className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:brightness-110 transition duration-200'>
                Read More
              </button>
              <button className='px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition'>
                Bookmark
              </button>
            </div>
          </div>
        ))}
      </div>

      {loading && <SkeletonPosts count={30} />}
    </div>
  )
}

export default Posts
