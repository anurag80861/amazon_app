import React from 'react'; 
import { IoLocationSharp } from "react-icons/io5"; 
import { AiOutlineAmazon } from "react-icons/ai";

function LeftNavbar() {
    return (
        <div className="flex items-center gap-4 p-4">
            <div className="flex flex-col items-center">
                <AiOutlineAmazon className="text-white text-3xl" />
                <h1 className="text-white text-xl">Amazon.in</h1>
            </div>
            <div className="text-sm text-white">
                <a href="/" className="flex items-center text-xl font-bold">
                    <IoLocationSharp className="mr-1" />
                    <span>Deliver to</span>
                </a> <strong className="block text-white">United States</strong>

            </div>
        </div>);
}

export default LeftNavbar; 