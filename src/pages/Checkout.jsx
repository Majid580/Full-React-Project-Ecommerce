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
    <div>
      <div className="min-h-screen bg-base-200 py-10 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* Billing Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Billing Details
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
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <div className="flex flex-col gap-2">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                  <span className="ml-2">Credit/Debit Card</span>
                </label>
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="radio checked:bg-blue-500"
                  />
                  <span className="ml-2">Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            <ul className="divide-y">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-md font-semibold text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="divider"></div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="btn btn-primary w-full mt-4 hover:scale-105 transition-all ease-in-out">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
