import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import SkeletonProduct from '../skeletonProduct/SkeletonProduct'

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then(pro => {
        setProduct(pro.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(()=> {
        setLoading(false);
      })
  }, [])

  console.log(product);
  if (error) {
    return <div className='text-center text-red-700'>
      <p>Somsing went wrong</p>
    </div>
  }

  return (
    <div className='bg-black pt-[70px]'>
      <div className="w-full max-w-[1440px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product?.products?.map((product) => (
          <div key={product.id} className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span> {product.category}</span>
                <span> {product.brand}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-green-400 font-bold text-lg">
                  ${product.price}
                </span>
                <span className="line-through text-sm text-red-500">
                  ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                </span>
                <span className="text-yellow-500 text-sm">
                  ({product.discountPercentage}% off)
                </span>
              </div>
              <div className="text-sm text-yellow-400">⭐ {product.rating}</div>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                  View
                </button>
                <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading ? <SkeletonProduct count={30}/> : null}
    </div>
  )
}

export default Product