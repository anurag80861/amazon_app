import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
function LeftNavbar() {
  return (
    <div className="flex items-center gap-4 p-4 ">
      <a href="/" className="text-xl font-bold">
        <img src="https://www.shutterstock.com/image-vector/kiev-ukraine-september-24-2023-260nw-2365975827.jpg" alt="Amazon" className="h-8" />
      </a>
      <div className="text-sm text-white">
        <a href="/" className="text-xl font-bold">
        <IoLocationSharp />
        </a>
        <span className="block">Deliver to</span>
        <strong className="block text-white">United States</strong>
      </div>
    </div>
  );
}

export default LeftNavbar;