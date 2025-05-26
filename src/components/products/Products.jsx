import { Link } from "react-router-dom";
import SkeletonProduct from "../skeletonProduct/SkeletonProduct";

const Products = ({ loading, product }) => {
  return (
    <div className="pt-[100px] px-4 min-h-screen bg-[#0f172a]">
      <h2 className="text-3xl text-white font-bold mb-10 text-center">
        🛍️ Trending Products
      </h2>

      {loading && <SkeletonProduct count={30} />}

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product?.products?.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-gradient-to-tr from-[#1e293b] to-[#0f172a] text-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="relative group w-full h-[250px] overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 group-hover:opacity-90 transition-all duration-500 ease-in-out"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  ⭐ {product.rating}
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-cyan-400 line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-300 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span className="capitalize">{product.category}</span>
                  <span>{product.brand}</span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-green-400 font-bold text-lg">
                    ${product.price}
                  </span>

                  <span className="text-pink-400 text-sm font-semibold">
                    {product.discountPercentage}% OFF
                  </span>
                </div>

                <button className="mt-4 w-full py-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg text-sm font-semibold hover:brightness-110 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
