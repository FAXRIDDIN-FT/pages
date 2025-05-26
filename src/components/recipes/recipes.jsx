import { Link } from 'react-router-dom'
import SkeletonResipe from '../skeletonResipe/SkeletonResipe'

const Recipes = ({ recipes, loading }) => {
  if (!recipes) {
    return (
      <div className="text-center text-white py-20 text-lg">Yuklanmoqda...</div>
    )
  }

  return (
    <div className="min-h-screen py-10 px-4 bg-[#0e0d1e]">
      <h2 className="max-w-7xl mx-auto text-4xl font-bold mb-12 text-white text-center">
        🍳 Explore Delicious Recipes
      </h2>

      {loading && <SkeletonResipe count={30} />}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes?.recipes?.map((recipe, index) => (
          <Link to={`/recipes/${recipe.id}`} key={index}>
            <div className="bg-[#191827] rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative w-full h-52">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {recipe.name}
                </h3>

                <p className="text-sm text-gray-400 mb-3">
                  ⏱️ {recipe.cookTimeMinutes} mins | 🔥 {recipe.caloriesPerServing} kcal
                </p>

                <div className="mb-4">
                  <p className="text-white font-semibold text-sm mb-1">Top Ingredients:</p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.slice(0, 3).map((ingredient, i) => (
                      <span
                        key={i}
                        className="bg-[#2a2a3d] text-gray-200 text-xs px-3 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex justify-between gap-3">
                  <button className="w-full py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg text-sm font-medium hover:brightness-110 transition">
                    View
                  </button>
                  <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Recipes
