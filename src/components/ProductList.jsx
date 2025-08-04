import React from "react";
import { fetchProducts } from "../redux/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import {
  addQuantityToProduct,
  decreaseQuantityToProduct,
} from "../redux/productsSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const ProductList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items.map((product) => (
              <div key={product.id}>
                <Link to={`/productDetail/${product.id}`}>
                  <img
                    alt={product.imageAlt}
                    src={product.image}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                </Link>
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      dispatch(decreaseQuantityToProduct(product));
                      if (product.quantity > 1) {
                        toast.success(
                          `Quantity of ${product.title} decreased `
                        );
                      } else {
                        toast.error("Quantity can not be less than 1");
                      }
                    }}
                    className="btn bg-amber-400 hover:scale-104 hover:bg-amber-600"
                  >
                    -
                  </button>
                  <span>{product.quantity ? product.quantity : 1}</span>
                  <button
                    onClick={() => {
                      dispatch(addQuantityToProduct(product));
                      toast.success(`Quantity of ${product.title} Increased`);
                    }}
                    className="btn bg-amber-400 hover:scale-104 hover:bg-amber-600"
                  >
                    +
                  </button>
                </div>
                <div className="flex mt-3">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product));
                      toast.success(`${product.title} added to cart!`);
                    }}
                    className="btn btn-secondary flex w-full hover:scale-105 transition-all ease-in-out hover:bg-pink-800 "
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
