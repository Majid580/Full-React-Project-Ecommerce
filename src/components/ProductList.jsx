import React from "react";
import { fetchProducts } from "../redux/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import {
  addQuantityToProduct,
  decreaseQuantityToProduct,
} from "../redux/productsSlice";
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
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.image}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      dispatch(decreaseQuantityToProduct(product));
                    }}
                    className="btn bg-amber-200 hover:bg-amber-600"
                  >
                    -
                  </button>
                  <span>{product.quantity ? product.quantity : 1}</span>
                  <button
                    onClick={() => {
                      dispatch(addQuantityToProduct(product));
                    }}
                    className="btn bg-amber-200 hover:bg-amber-600"
                  >
                    +
                  </button>
                </div>
                <div className="flex mt-3">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product));
                      console.log(cart);
                    }}
                    className="btn btn-secondary flex w-full"
                  >
                    Add To Cart
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
