import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  addQuantityToProduct,
  decreaseQuantityToProduct,
} from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, searchQuery, category } = useSelector(
    (state) => state.products
  );

  const filteredItems = items.filter(
    (x) =>
      x.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category === "" || x.category === category)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-b from-white via-red-50 to-yellow-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-10">
          ✨ Explore Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/productDetail/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 sm:h-52 md:h-56 object-contain bg-white rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                />
              </Link>

              <h3 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h3>

              <div className="mt-auto">
                <p className="text-lg text-pink-700 font-bold mb-2">
                  ${product.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={() => {
                      dispatch(decreaseQuantityToProduct(product));
                      if (product.quantity > 1) {
                        toast.success(`Quantity of ${product.title} decreased`);
                      } else {
                        toast.error("Quantity can not be less than 1");
                      }
                    }}
                    className="btn btn-sm bg-yellow-200 text-black hover:bg-yellow-400"
                  >
                    -
                  </button>
                  <span className="font-semibold text-black">
                    {product.quantity || 1}
                  </span>
                  <button
                    onClick={() => {
                      dispatch(addQuantityToProduct(product));
                      toast.success(`Quantity of ${product.title} Increased`);
                    }}
                    className="btn btn-sm bg-yellow-200 text-black hover:bg-yellow-400"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                    toast.success(`${product.title} added to cart!`);
                  }}
                  className="btn btn-sm bg-pink-600 text-white w-full hover:bg-pink-700 transition"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
