import React from "react";
import { useParams } from "react-router-dom";
const RicepesDetails = ({ recipes }) => {
  const { id } = useParams();
  const item = recipes?.recipes?.find((r) => r.id === parseInt(id));

  if (!item) {
    return <div>...</div>;
  }

  console.log(item);

  return (
    <>
    <div className="my-[100px] bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
  <div className="relative w-full md:w-1/2 h-72 overflow-hidden rounded-xl">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
    />
  </div>
  <div className="flex-1 text-gray-800">
    <h3 className="text-3xl font-bold text-cyan-600 mb-2 text-left">{item.name}</h3>
    <p className="text-sm text-gray-600 mb-3">
      ⏱️ {item.cookTimeMinutes} mins | 🔥 {item.caloriesPerServing} kcal
    </p>
    <div className="text-sm text-gray-700 mb-4">
      <strong className="text-gray-900">Top Ingredients:</strong>
      <ul className="list-disc list-inside mt-2">
        {item.ingredients.slice(0, 3).map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
    <div className="mt-6 flex gap-4">
     
    </div>
  </div>
</div>

    </>
  );
};

export default RicepesDetails;
