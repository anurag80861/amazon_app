import React from "react";
import img1 from "../../Assets/image8.jpg"
import img2 from "../../Assets/image9.jpg"
import img3 from "../../Assets/image10.jpg"
import img4 from "../../Assets/image11.jpg"
import img5 from "../../Assets/image12.jpg"
import img6 from "../../Assets/image13.jpg"
import img7 from "../../Assets/image14.jpg"
import img8 from "../../Assets/image15.jpg"


const CartOfData = () => {
  return (
    <>
      <div>

        <div className="container mx-auto p-4 grid gap-8 grid-cols-1 lg:grid-cols-4  ">
          {/* Keep Shopping For Section */}
          <div className="bg-white shadow-md rounded p-4 h-[95%]" >
            <h3 className="text-xl font-bold mb-4">Keep shopping for</h3>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="text-center">
                <img
                  src={img1}
                  alt="Smart watches"
                  className=" rounded-md h-[50%] w-[60%]"
                />
                <h1 className="font-medium mt-2">Smart Phones iQoo Z9 S Pro</h1>
                <span className="text-sm text-gray-500">1 viewed</span>
              </div>
              <div className="text-center">
                <img
                  src={img2}
                  alt="Men's sports shorts"
                  className=" rounded-md  h-[50%] w-[60%]"
                />
                <p className="font-medium mt-2"> Smart Phones iQoo Z9 S</p>
                <span className="text-sm text-gray-500">1 viewed</span>
              </div>
              <div className="text-center">
                <img
                  src={img3}
                  alt="Televisions"
                  className="rounded-md  h-[55%] w-[60%]"
                />
                <p className="font-medium mt-2"> Smart Phones iQoo Z9 5G</p>
                <span className="text-sm text-gray-500">1 viewed</span>
              </div>
              <div className="text-center">
                <img
                  src={img4}
                  alt="Smartphones & basic phones"
                  className=" rounded-md  h-[50%] w-[60%]"
                />
                <p className="font-medium mt-2">Smartphones & basic phones <span> realme GT 7</span></p>
                <span className="text-sm text-gray-500">2 viewed</span>
              </div>

            </div>


            <a
              href="#"
              className="block mt-4 text-blue-600 hover:underline text-sm font-medium"
            >
              View your browsing history
            </a>
          </div>

          {/* Deals Based on Shopping Trends Section */}
          <div className="bg-white shadow-md rounded-lg p-4 h-[95%]">
            <h3 className="text-xl font-bold mb-4">Deals based on your </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  src={img5}
                  alt="Deal 1"
                  className=" rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">5% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img6}
                  alt="Deal 2"
                  className="w-full rounded-md h-[50%] :"
                />
                <p className="mt-2 text-sm font-medium text-red-500">72% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img7}
                  alt="Deal 3"
                  className=" rounded-md h-[40%] "
                />
                <p className="mt-2 text-sm font-medium text-red-500">48% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>

              <div className="text-center">
                <img
                  src={img8}
                  alt="Deal 4"
                  className="rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">28% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>

              </div>

            </div>

          </div>

          {/* Minimum 50% Off Section */}
          <div className="bg-white shadow-md rounded-lg p-4 h-[95%]">
            <h3 className="text-xl font-bold mb-4">Deals based on your </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  src={img5}
                  alt="Deal 1"
                  className=" rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">5% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img6}
                  alt="Deal 2"
                  className="w-full rounded-md h-[50%] :"
                />
                <p className="mt-2 text-sm font-medium text-red-500">72% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img7}
                  alt="Deal 3"
                  className=" rounded-md h-[40%] "
                />
                <p className="mt-2 text-sm font-medium text-red-500">48% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>

              <div className="text-center">
                <img
                  src={img8}
                  alt="Deal 4"
                  className="rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">28% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>

              </div>

            </div>

          </div>

          {/* Minimum 50% Off Section */}
          <div className="bg-white shadow-md rounded-lg p-4 h-[95%]">
            <h3 className="text-xl font-bold mb-4">Deals based on your </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  src={img5}
                  alt="Deal 1"
                  className=" rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">5% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img6}
                  alt="Deal 2"
                  className="w-full rounded-md h-[50%] :"
                />
                <p className="mt-2 text-sm font-medium text-red-500">72% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img7}
                  alt="Deal 3"
                  className=" rounded-md h-[40%] "
                />
                <p className="mt-2 text-sm font-medium text-red-500">48% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>

              <div className="text-center">
                <img
                  src={img8}
                  alt="Deal 4"
                  className="rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">28% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>

              </div>

            </div>

          </div>

        </div>


        <div className="container mx-auto p-4 grid gap-8 grid-cols-1 lg:grid-cols-4  ">
          {/* Keep Shopping For Section */}
          <div className="bg-white shadow-md rounded p-4 h-[95%]" >
            <h3 className="text-xl font-bold mb-4">Keep shopping for</h3>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="text-center">
                <img
                  src={img1}
                  alt="Smart watches"
                  className=" rounded-md h-[50%] w-[60%]"
                />
                <h1 className="font-medium mt-2">Smart Phones iQoo Z9 S Pro</h1>
                <span className="text-sm text-gray-500">1 viewed</span>
              </div>
              <div className="text-center">
                <img
                  src={img2}
                  alt="Men's sports shorts"
                  className=" rounded-md  h-[50%] w-[60%]"
                />
                <p className="font-medium mt-2"> Smart Phones iQoo Z9 S</p>
                <span className="text-sm text-gray-500">1 viewed</span>
              </div>
              <div className="text-center">
                <img
                  src={img3}
                  alt="Televisions"
                  className="rounded-md  h-[55%] w-[60%]"
                />
                <p className="font-medium mt-2"> Smart Phones iQoo Z9 5G</p>
                <span className="text-sm text-gray-500">1 viewed</span>
              </div>
              <div className="text-center">
                <img
                  src={img4}
                  alt="Smartphones & basic phones"
                  className=" rounded-md  h-[50%] w-[60%]"
                />
                <p className="font-medium mt-2">Smartphones & basic phones <span> realme GT 7</span></p>
                <span className="text-sm text-gray-500">2 viewed</span>
              </div>

            </div>


            <a
              href="#"
              className="block mt-4 text-blue-600 hover:underline text-sm font-medium"
            >
              View your browsing history
            </a>
          </div>

          {/* Deals Based on Shopping Trends Section */}
          <div className="bg-white shadow-md rounded-lg p-4 h-[95%]">
            <h3 className="text-xl font-bold mb-4">Deals based on your </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  src={img5}
                  alt="Deal 1"
                  className=" rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">5% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img6}
                  alt="Deal 2"
                  className="w-full rounded-md h-[50%] :"
                />
                <p className="mt-2 text-sm font-medium text-red-500">72% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img7}
                  alt="Deal 3"
                  className=" rounded-md h-[40%] "
                />
                <p className="mt-2 text-sm font-medium text-red-500">48% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>

              <div className="text-center">
                <img
                  src={img8}
                  alt="Deal 4"
                  className="rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">28% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>

              </div>

            </div>

          </div>

          {/* Minimum 50% Off Section */}
          <div className="bg-white shadow-md rounded-lg p-4 h-[95%]">
            <h3 className="text-xl font-bold mb-4">Deals based on your </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  src={img5}
                  alt="Deal 1"
                  className=" rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">5% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img6}
                  alt="Deal 2"
                  className="w-full rounded-md h-[50%] :"
                />
                <p className="mt-2 text-sm font-medium text-red-500">72% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img7}
                  alt="Deal 3"
                  className=" rounded-md h-[40%] "
                />
                <p className="mt-2 text-sm font-medium text-red-500">48% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>

              <div className="text-center">
                <img
                  src={img8}
                  alt="Deal 4"
                  className="rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">28% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>

              </div>

            </div>

          </div>

          {/* Minimum 50% Off Section */}
          <div className="bg-white shadow-md rounded-lg p-4 h-[95%]">
            <h3 className="text-xl font-bold mb-4">Deals based on your </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  src={img5}
                  alt="Deal 1"
                  className=" rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">5% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img6}
                  alt="Deal 2"
                  className="w-full rounded-md h-[50%] :"
                />
                <p className="mt-2 text-sm font-medium text-red-500">72% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>
              <div className="text-center">
                <img
                  src={img7}
                  alt="Deal 3"
                  className=" rounded-md h-[40%] "
                />
                <p className="mt-2 text-sm font-medium text-red-500">48% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>
              </div>

              <div className="text-center">
                <img
                  src={img8}
                  alt="Deal 4"
                  className="rounded-md h-[50%]"
                />
                <p className="mt-2 text-sm font-medium text-red-500">28% off</p>
                <span className="text-gray-500 text-xs">Republic Day Deal</span>

              </div>

            </div>

          </div>

        </div>
      
      </div>
    </>

  );
};

export default CartOfData;