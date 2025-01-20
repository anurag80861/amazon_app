import React from "react";

import img1 from "../../Assets/image16.jpg";
import img2 from "../../Assets/image17.jpg";
import img3 from "../../Assets/image18.jpg";
import img4 from "../../Assets/image19.jpg";
import img5 from "../../Assets/image20.jpg";

const products = [
  {
    id: 1,
    image: img1,
    title: "Effective and Good looking mirror",
    rating: 4.5,
    reviews: 11632,
    price: 279,
    originalPrice: 999,
  },
  {
    id: 2,
    image: img2,
    title: "JH Gallery Artificial Marigold Garlands Flowers",
    rating: 4.2,
    reviews: 183129,
    price: 4299,
    originalPrice: 4499,
  },
  {
    id: 3,
    image: img3,
    title: "JH Gallery Handcrafted Rajasthani Door & Wall   ",
    rating: 4.3,
    reviews: 2869,
    price: 11499,
    originalPrice: 15499,
  },
  {
    id: 4,
    image: img4,
    title: "VazzLox Night Lamp for Bedroom 4PCS Smart ",
    rating: 4.1,
    reviews: 9292,
    price: 114,
    originalPrice: 999,
  },
  {
    id: 5,
    image: img5,
    title: "Divyakosh Latkan for Home Decoration",
    rating: 4.6,
    reviews: 11813,
    price: 1524,
    originalPrice: 1890,
  },
];

const ProductCard = () => {
  const handleAddToCart = (product) => {
    console.log(`${product.title} added to cart!`);
  };

  return (
    <div className="flex flex-wrap gap-8 justify-center p-6 bg-gray-50">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-200 rounded-xl p-6 w-72 text-center shadow-lg bg-white hover:shadow-xl transition-shadow"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h3>
          <div className="flex justify-center items-center text-sm text-gray-600 mb-3">
            <span className="mr-1">⭐ {product.rating}</span>
            <span>({product.reviews} reviews)</span>
          </div>
          <div className="flex justify-center items-baseline mb-4">
            <span className="text-red-500 text-2xl font-bold">₹{product.price}</span>
            <span className="text-gray-500 line-through ml-3 text-lg">₹{product.originalPrice}</span>
          </div>
          <button
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
