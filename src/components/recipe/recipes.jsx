import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SkeletonResipe from '../skeletonResipe/SkeletonResipe'

const Recipes = () => {
    const [recipes, setRecipes] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get("https://dummyjson.com/recipes")
            .then(res => {
                setRecipes(res.data);
            })
            .catch((err) => {
                setError(err);
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
            <h2 className='container mx-auto text-start text-3xl font-bold mb-10 text-white'>Recipe List</h2>

            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {recipes?.recipes?.map((recipe) => (
                    <div  key={recipe.id}  className='bg-gray-900 bg-opacity-60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl' >
                        <img
                            className='w-full h-40 object-cover rounded-lg border-2 border-yellow-500 shadow-md'
                            src={recipe.image}
                            alt={recipe.name}
                        />
                        <h3 className='mt-4 text-xl font-semibold text-white text-center'>
                            {recipe.name}
                        </h3>
                        <p className='text-sm text-gray-300 mt-1'>Cooking Time: {recipe.cookTimeMinutes} mins</p>
                        <p className='text-sm text-gray-300'>Calories: {recipe.caloriesPerServing}</p>

                        <div className='mt-4 text-sm text-gray-300 text-center'>
                            <strong>Ingredients:</strong>
                            <ul className='list-disc list-inside mt-1'>
                                {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='mt-6 flex gap-3 w-full justify-center'>
                            <button className='px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition'>
                                View
                            </button>
                            <button className='px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition'>
                                Save
                            </button>
                        </div>
                    </div>
                ))}
            </div>
             {loading && <SkeletonResipe count={30} /> }
        </div>
    )
}

export default Recipes
