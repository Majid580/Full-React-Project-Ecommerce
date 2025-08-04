// components/CartDropdown.jsx
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const items = cart || [];
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      tabIndex={0}
      className="dropdown-content z-[999] mt-3 w-[90vw] max-w-[420px] bg-white shadow rounded-sm p-4 overflow-y-auto max-h-[80vh]"
    >
      <h2 className="text-xl font-bold text-center mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((product) => (
              <li key={product.id} className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="size-16 rounded-sm object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    Qty: {product.quantity}
                  </p>
                  <p className="text-xs text-gray-600">
                    Price: ${product.price}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      dispatch(decreaseQuantity(product));
                      if (product.quantity > 1) {
                        toast.success(
                          `Quantity of ${product.title} decreased `
                        );
                      } else {
                        toast.error("Quantity can not be less than 1");
                      }
                    }}
                    className="btn bg-amber-200 hover:bg-amber-600"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => {
                      dispatch(increaseQuantity(product));
                      toast.success(`Quantity of ${product.title} Increased`);
                    }}
                    className="btn bg-amber-200 hover:bg-amber-600"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(product));
                    toast.success(`${product.title} removed !!`);
                  }}
                  className="text-gray-600 hover:text-red-600"
                >
                  <span className="sr-only">Remove item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-sm text-gray-700">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              href="#"
              className="mt-4 block text-center bg-gray-700 text-white rounded-sm py-2 text-sm hover:bg-gray-600"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
