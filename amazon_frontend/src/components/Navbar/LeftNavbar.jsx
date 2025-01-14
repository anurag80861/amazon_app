import React from 'react';

function LeftNavbar() {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800">
      <a href="/" className="text-xl font-bold">
        <img src="https://www.shutterstock.com/image-vector/kiev-ukraine-september-24-2023-260nw-2365975827.jpg" alt="Amazon" className="h-8" />
      </a>
      <div className="text-sm text-white">
        <a href="/" className="text-xl font-bold">
          <img src="https://th.bing.com/th/id/OIP.fH_RzFRFa_iFH6x4Sxp0xgHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Amazon" className="h-8" />
        </a>
        <span className="block">Deliver to</span>
        <strong className="block text-white">United States</strong>
      </div>
    </div>
  );
}

export default LeftNavbar;