import { useParams } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const { id } = useParams();
  const item = product?.products?.find((p) => p.id === parseInt(id));

  if (!item) return <div className="text-white p-6">Product not found</div>;

  return (
<div className="bg-white  my-[100px] rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
  <img
    src={item.thumbnail}
    alt={item.title}
    className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
  />
  <div className="flex-1 text-gray-800">
    <h1 className="text-4xl font-bold mb-3">{item.title}</h1>
    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
      Category: {item.category}
    </span>
    <p className="mb-4 text-gray-600">{item.description}</p>
    <div className="flex items-center space-x-4 mb-4">
      <span className="text-3xl font-bold text-green-600">${item.price}</span>
      <span className="text-sm font-semibold text-pink-500 bg-pink-100 px-2 py-1 rounded-full">
        {item.discountPercentage}% OFF
      </span>
    </div>
    <div className="mb-4">
      <span className="text-yellow-500 text-lg">⭐ {item.rating}</span>
    </div>
    <button className="mt-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
      Buy Now
    </button>
  </div>
</div>

  );
};

export default ProductDetail;
