import React, { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RightNavbar = () => {
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const cartItemsCount = useSelector((state) => state.cart.items.length);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="flex items-center gap-6 text-sm text-white p-4 shadow-lg rounded-md relative z-50">
      {/* Language Selector */}
      <div
        className="relative flex items-center gap-1 cursor-pointer hover:text-yellow-500 transition duration-300"
        onMouseEnter={() => setShowLanguagePopup(true)}
        onMouseLeave={() => setShowLanguagePopup(false)}
      >
        <button className="flex items-center gap-1 text-white p-2 rounded-md">
          <img
            src="https://flagcdn.com/in.svg"
            alt="India Flag"
            className="w-5 h-5 rounded-full"
          />
          <span>{selectedLanguage}</span>
        </button>
        {showLanguagePopup && (
          <div className="absolute top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg p-4 z-50">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
            <p className="mb-2 font-semibold">Select your language:</p>
            <div className="grid grid-cols-1 gap-2">
              {["English", "Hindi", "Marathi", "Punjabi", "Gujarati"].map((language) => (
                <label key={language} className="cursor-pointer hover:bg-gray-200 p-2 rounded transition duration-300 flex items-center">
                  <input
                    type="radio"
                    name="language"
                    value={language}
                    checked={selectedLanguage === language}
                    onChange={handleLanguageChange}
                    className="mr-2"
                  />
                  <span>{language}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>


      <div className="relative group cursor-pointer">
  {/* Link to sign page */}
  <Link to='/sign' className="flex items-center hover:text-yellow-500 transition duration-300">
    <span className="block text-gray-300">Hello, Anurag</span>
  </Link>

  {/* Account & Lists */}
  <Link to='/sign' className="flex items-center hover:text-yellow-500 transition duration-300">
    <span className="font-bold ml-1">Account & Lists</span>
  </Link>

  {/* Dropdown Content */}
  <div className="absolute top-full left-0 w-64 bg-white shadow-lg border mt-2 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
    {/* Triangle above dropdown */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

    <div className="p-4">
      {/* Header */}
      <div className="text-gray-600 text-sm font-semibold mb-2">
        Who is shopping? Select a profile.
      </div>
      <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
        Manage Profiles
      </a>
    </div>
    <hr />
    <div className="grid grid-cols-2 divide-x">
      {/* Your Lists */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-700 text-sm mb-2">
          Your Lists
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <a href="#" className="hover:text-blue-500">
              Shopping List
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Create a Wish List
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Wish from Any Website
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Baby Wishlist
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Discover Your Style
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Explore Showroom
            </a>
          </li>
        </ul>
      </div>
      {/* Your Account */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-700 text-sm mb-2">
          Your Account
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <a href="#" className="hover:text-blue-500">
              Your Account
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Your Orders
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Your Wish List
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Keep Shopping For
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Your Recommendations
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Your Prime Membership
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

 






  {/* Account Section
 <Link to='/sign' className="cursor-pointer hover:text-yellow-500 transition duration-300">
        <span className="block text-gray-300">Hello, Anurag</span>
        <span className="font-bold">Account & Lists</span>
      </Link> */}

      


      {/* Orders Section */}
      <div className="cursor-pointer hover:text-yellow-500 transition duration-300">
        <span className="block text-gray-300">Returns</span>
        <span className="font-bold">& Orders</span>
      </div>


      {/* Cart Section */}
      <Link to="/cart" className="relative flex items-center cursor-pointer hover:text-yellow-500 transition duration-300">
        {/* Cart Icon */}
        <PiShoppingCartSimple className="w-6 h-6" aria-label="Cart" />
        {/* Badge */}
        <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full px-1.5">
          {cartItemsCount}
        </span>
      </Link>
    </div>
  );
};

export default RightNavbar;