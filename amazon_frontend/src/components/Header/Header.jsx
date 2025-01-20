import React from 'react';
import img1 from "../../Assets/image7.jpg"
function Header() {
  const menuItems = [
    "All",
    "Today's Deals",
    "MX Player",
    "Sell",
    "Amazon Pay",
    "Gift Cards",
    "Buy Again",
    "AmazonBasics",
    "Gift Ideas",
    "Customer Service",
    "Browsing History"
  ];

  return (
    <div className="flex space-x-4 p-4 bg-gray-800 text-white items-center">
      <div className="flex space-x-4 flex-grow">
        {menuItems.map((item, index) => (
          <div key={index} className="cursor-pointer hover:text-yellow-500 transition duration-300">
            {item}
          </div>
        ))}
      </div>
      <img
        src={img1} // Update the path to your image
        alt="End Image"
        className="w-[405px] h-10 "  
      />
    </div>
  );
}

export default Header;