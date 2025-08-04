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
      className="dropdown-content z-[999] mt-3 w-[90vw] max-w-sm bg-gradient-to-br from-white via-gray-50 to-pink-50 rounded-xl shadow-lg p-4 max-h-[80vh] overflow-y-auto"
    >
      <h2 className="text-xl font-extrabold text-pink-700 text-center mb-4 tracking-wide">
        🛒 Your Cart
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 italic">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-5">
            {items.map((product) => (
              <li
                key={product.id}
                className="flex items-start sm:items-center justify-between bg-white rounded-lg p-3 shadow-md transition hover:scale-[1.02]"
              >
                <div className="flex gap-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-contain rounded-lg "
                  />
                  <div className="text-sm">
                    <h3 className="font-semibold text-gray-800 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-500">Qty: {product.quantity}</p>
                    <p className="text-pink-600 font-semibold text-sm">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        dispatch(decreaseQuantity(product));
                        if (product.quantity > 1) {
                          toast.success(
                            `Quantity of ${product.title} decreased`
                          );
                        } else {
                          toast.error("Quantity can not be less than 1");
                        }
                      }}
                      className="btn btn-sm bg-yellow-200 hover:bg-yellow-400 text-black px-2"
                    >
                      -
                    </button>
                    <span className="text-black font-semibold">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => {
                        dispatch(increaseQuantity(product));
                        toast.success(`Quantity of ${product.title} Increased`);
                      }}
                      className="btn btn-sm bg-yellow-200 hover:bg-yellow-400 text-black px-2"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      dispatch(removeFromCart(product));
                      toast.success(`${product.title} removed!`);
                    }}
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Remove item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex justify-between text-sm text-gray-700 font-medium">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="mt-4 block text-center bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md py-2 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
