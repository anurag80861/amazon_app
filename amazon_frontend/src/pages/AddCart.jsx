import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../components/redux/cartSlice'; // Update with actual actions
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

function AddCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total items and total amount
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity({ id: productId }));
  };

  return (
    <>
    <Navbar />
    <Header />
      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-6 mb-6 shadow-lg bg-white flex items-center gap-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <div className="flex items-center text-sm text-gray-600 my-2">
                  <span className="mr-2">⭐ {item.rating}</span>
                  <span>({item.reviews} reviews)</span>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-red-500 text-2xl font-bold">
                    ₹{item.price * item.quantity}
                  </span>
                  <span className="text-gray-500 line-through ml-3 text-lg">
                    ₹{item.originalPrice * item.quantity}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-3 rounded-lg"
                >
                  -
                </button>
                <span className="font-bold text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-lg bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Summary</h2>
          <div className="flex justify-between text-lg text-gray-700 mb-2">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between text-lg text-gray-700 mb-4">
            <span>Total Amount:</span>
            <span>₹{totalAmount}</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg w-full font-bold">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default AddCart;
