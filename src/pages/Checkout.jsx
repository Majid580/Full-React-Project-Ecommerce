import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Billing Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">
            💳 Billing Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="input input-bordered col-span-1 md:col-span-2 w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Country"
              className="input input-bordered w-full"
            />
          </div>

          <div className="pt-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              Payment Method
            </h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="radio checked:bg-blue-500"
                  defaultChecked
                />
                <span className="text-gray-800">Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="radio checked:bg-blue-500"
                />
                <span className="text-gray-800">Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-10">
          <h2 className="text-2xl font-bold text-pink-600 mb-6">
            🧾 Order Summary
          </h2>

          <ul className="divide-y divide-gray-200 space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="py-2 flex justify-between items-start"
              >
                <div className="w-3/4">
                  <p className="font-medium text-gray-700 line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-pink-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="divider my-4" />

          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2 text-gray-800">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="btn btn-primary w-full mt-6 hover:scale-105 transition-all duration-300">
            🛍️ Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
