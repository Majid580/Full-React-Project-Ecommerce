import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import {
  decreaseQuantityToProduct,
  addQuantityToProduct,
} from "../redux/productsSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((x) => x.id === parseInt(id))
  );
  if (!product)
    return (
      <div className="text-center mt-20 text-gray-600">Product not found</div>
    );
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-4 shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full max-h-[500px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg p-6 shadow space-y-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-sm text-gray-600 capitalize">
              Category: {product.category}
            </p>

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
            <p className="text-gray-700">{product.description}</p>

            {/* Price */}
            <div className="text-3xl font-semibold text-emerald-600">
              ${product.price}
            </div>

            {/* Buttons */}
            <div className="flex gap-10">
              <button
                onClick={() => {
                  dispatch(decreaseQuantityToProduct({ id: product.id }));
                  console.log(product.quantity);
                }}
                className="btn bg-amber-400 hover:scale-104 hover:bg-amber-600"
              >
                -
              </button>
              <span>{<span>{product.quantity || 1}</span>}</span>
              <button
                onClick={() => {
                  dispatch(addQuantityToProduct({ id: product.id }));
                  console.log(product.quantity);
                }}
                className="btn bg-amber-400 hover:scale-104 hover:bg-amber-600"
              >
                +
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                }}
                className="btn btn-primary text-white w-full hover:scale-107 transition-all ease-in-out"
              >
                Add to Cart
              </button>
            </div>
            <Link to="/checkout">
              <button className="btn  w-full  text-white bg-pink-400  hover:scale-107 transition-all ease-in-out">
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
