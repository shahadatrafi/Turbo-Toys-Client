import React from 'react';

const Gallery = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative">
                <img
                    src="image1.jpg"
                    alt="Image 1"
                    className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                    <button className="text-white text-lg font-bold">View</button>
                </div>
            </div>
            <div className="relative">
                <img
                    src="image2.jpg"
                    alt="Image 2"
                    className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                    <button className="text-white text-lg font-bold">View</button>
                </div>
            </div>
            <div className="relative">
                <img
                    src="image3.jpg"
                    alt="Image 3"
                    className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out flex justify-center items-center">
                    <button className="text-white text-lg font-bold">View</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;