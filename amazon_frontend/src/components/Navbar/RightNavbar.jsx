import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const RightNavbar = () => {
  return (
    <div className="flex items-center gap-6 text-sm text-white p-4 bg-transparent shadow-lg rounded-md">
      {/* Language Selector */}
      <div className="relative flex items-center gap-1 cursor-pointer hover:text-gray-300 transition duration-300">
        <img
          src="https://flagcdn.com/in.svg"
          alt="India Flag"
          className="w-5 h-5 rounded-full"
        />
        <select
          className="bg-transparent text-white text-sm p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-label="Language Selector"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
          <option value="pa">Punjabi</option>
          <option value="gu">Gujarati</option>
        </select>
      </div>

      {/* Account Section */}
      <div className="cursor-pointer hover:text-gray-300 transition duration-300">
        <span className="block text-gray-300">Hello, Anurag</span>
        <span className="font-bold">Account & Lists</span>
      </div>

      {/* Orders Section */}
      <div className="cursor-pointer hover:text-gray-300 transition duration-300">
        <span className="block text-gray-300">Returns</span>
        <span className="font-bold">& Orders</span>
      </div>

      {/* Cart Section */}
      <div className="relative flex items-center cursor-pointer hover:text-gray-300 transition duration-300">
        {/* Cart Icon */}
        <PiShoppingCartSimple className="w-6 h-6" aria-label="Cart" />
        {/* Badge */}
        <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-1.5">
          0
        </span>
      </div>
    </div>
  );
};

export default RightNavbar;