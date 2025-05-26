import { Link } from 'react-router-dom'
import SkeletonResipe from '../skeletonResipe/SkeletonResipe'

const Recipes = ({recipes ,loading}) => {
  if(!recipes) {
    return <div>Yuklanmoqda...</div>
  }
  console.log(recipes)
  return (
    <div className='min-h-screen py-10 px-4 bg-[#0e0d1e]'>
      <h2 className='max-w-[1440px] mx-auto text-start text-3xl font-bold mb-10 text-white'>
        🍳 Recipe List
      </h2>

      {loading && <SkeletonResipe count={30} />}

      <div className='max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {recipes?.recipes?.map((recipe, index) => (
          <Link to={`/recipes/${recipe.id}`}  key={index} >
             <div
           
            className='bg-[#1d1b2a] border border-[#302f3f] rounded-2xl p-5 flex flex-col items-center'
          >
            <div className='relative w-full h-[180px] overflow-hidden rounded-xl mb-4'>
              <img
                src={recipe.image}
                alt={recipe.name}
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-xl'
              />
       
            </div>

            <h3 className='text-xl font-bold text-cyan-300 text-center'>
              {recipe.name}
            </h3>

            <p className='text-sm text-gray-300 mt-1'>
              ⏱️ {recipe.cookTimeMinutes} mins | 🔥 {recipe.caloriesPerServing} kcal
            </p>

            <div className='mt-4 text-sm text-gray-300 text-center'>
              <strong className='text-white'>Top Ingredients:</strong>
              <ul className='list-disc list-inside mt-2'>
                {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className='mt-6 flex gap-3 w-full justify-center'>
              <button className='px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:brightness-110 transition'>
                View
              </button>
              <button className='px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition'>
                Save
              </button>
            </div>
          </div>
          
          </Link>
       
        ))}
      </div>

    </div>
  )
}

export default Recipes
