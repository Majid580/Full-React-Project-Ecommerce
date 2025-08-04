import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
import InputSearchFilter from "./InputSearchFilter";
import CategoryFilter from "./CategoryFilter";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="navbar bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold tracking-wide"
        >
          🛍️ ShopEase
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <Link
          to="/"
          className="btn btn-sm btn-outline hover:btn-accent text-white border-white"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="btn btn-sm btn-outline hover:btn-accent text-white border-white"
        >
          Cart
        </Link>
        <Link
          to="/checkout"
          className="btn btn-sm btn-outline hover:btn-accent text-white border-white"
        >
          Checkout
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center text-black gap-3 ml-3">
        <InputSearchFilter />
        <CategoryFilter />
      </div>

      <div className="flex-none ml-4">
        {/* Cart Icon with Badge */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-pink-600"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-yellow-400 text-black">
                {cart.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow text-black"
          >
            <div className="card-body">
              <CartDropdown />
            </div>
          </div>
        </div>

        {/* Profile Avatar */}
        <div className="dropdown dropdown-end ml-3">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:bg-pink-600"
          >
            <div className="w-10 rounded-full ring ring-offset-2 ring-white ring-offset-pink-500">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-info">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
