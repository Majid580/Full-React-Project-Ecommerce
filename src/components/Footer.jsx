import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center bg-gradient-to-t from-yellow-100 via-red-100 to-pink-100 text-gray-800 p-10 rounded-t-2xl shadow-inner">
      {/* Navigation Links */}
      <nav className="mb-4 flex flex-wrap justify-center gap-6 text-base font-medium">
        <a className="link link-hover hover:text-pink-600 transition">
          About Us
        </a>
        <a className="link link-hover hover:text-pink-600 transition">
          Contact
        </a>
        <a className="link link-hover hover:text-pink-600 transition">Jobs</a>
        <a className="link link-hover hover:text-pink-600 transition">
          Press Kit
        </a>
      </nav>

      {/* Social Media Icons */}
      <div className="flex gap-6 mb-4">
        <a
          href="#"
          className="text-gray-600 hover:text-blue-500 transition duration-300"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-red-600 transition duration-300"
          aria-label="YouTube"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631..." />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-800 transition duration-300"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l..." />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <aside className="text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} — All rights reserved by{" "}
          <span className="font-semibold text-pink-600">
            ACME Industries Ltd
          </span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
