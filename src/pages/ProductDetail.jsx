import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import {
  decreaseQuantityToProduct,
  addQuantityToProduct,
} from "../redux/productsSlice";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) =>
    state.products.items.find((x) => x.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white rounded-xl shadow-md p-6 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full max-h-[450px] object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-5">
          <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-orange-400"
                  checked={Math.round(product.rating.rate) === i + 1}
                  readOnly
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Price */}
          <div className="text-3xl font-semibold text-emerald-600">
            ${product.price}
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => {
                dispatch(decreaseQuantityToProduct({ id: product.id }));
                if (product.quantity > 1) {
                  toast.success(`Quantity of ${product.title} decreased`);
                } else {
                  toast.error("Quantity can not be less than 1");
                }
              }}
              className="btn bg-amber-300 hover:bg-amber-500"
            >
              −
            </button>
            <span className="text-lg font-semibold">
              {product.quantity || 1}
            </span>
            <button
              onClick={() => {
                dispatch(addQuantityToProduct({ id: product.id }));
                toast.success(`Quantity of ${product.title} increased`);
              }}
              className="btn bg-amber-300 hover:bg-amber-500"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                dispatch(addToCart(product));
                toast.success(`${product.title} added to cart!`);
              }}
              className="btn btn-primary w-full text-white hover:scale-105 transition-all ease-in-out"
            >
              Add to Cart
            </button>

            <Link to="/checkout">
              <button className="btn w-full bg-pink-500 text-white hover:bg-pink-700 hover:scale-105 transition-all ease-in-out">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
