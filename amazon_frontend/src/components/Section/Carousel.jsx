import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../../Assets/image1.jpg"
import img2 from "../../Assets/image2.jpg"
import img3 from "../../Assets/image3.jpg"
import img4 from "../../Assets/image4.jpg"
import img5 from "../../Assets/image5.jpg"
import img6 from "../../Assets/image6.jpg"

const Carousel = () => {
    const images = [
        img1, img2, img3, img4, img5, img6
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentIndex, images.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-screen mx-auto">
            <div className="overflow-hidden h-full">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                />
            </div>
            <button
                onClick={goToPrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Carousel;