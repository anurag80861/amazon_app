import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center flex-grow mx-4 bg-transparent p-2 rounded-md shadow-lg">
      <select
        className="bg-gray-300 text-black text-sm p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        aria-label="Category"
        style={{ height: '40px' }} // Adjust height to match input field
      >
        <option className="text-gray-700" value="all">All</option>
        <option className="text-gray-700" value="books">Books</option>
        <option className="text-gray-700" value="electronics">Electronics</option>
      </select>
      <input
        type="text"
        className="flex-grow p-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Search Amazon"
        aria-label="Search"
        style={{ height: '40px' }} // Adjust height to match select and button
      />
      <button
        className="bg-yellow-500 text-black p-2 rounded-r-md hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
        aria-label="Search Button"
        style={{ height: '40px' }} // Adjust height to match input field
      >
        <CiSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;