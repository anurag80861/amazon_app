
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center flex-grow mx-4">
      <select className="bg-gray-700 text-white text-sm p-2 rounded-l-md">
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="electronics">Electronics</option>
      </select>
      <input
        type="text"
        className="flex-grow p-2 text-gray-800 text-sm"
        placeholder="Search Amazon"
      />
      <button className="bg-yellow-500 text-black p-2 rounded-r-md hover:bg-yellow-600 transition duration-300">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;