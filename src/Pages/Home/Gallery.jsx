import React from 'react';
import img1 from '../../assets/gallery/1.jpg'
import img2 from '../../assets/gallery/2.jpg'
import img3 from '../../assets/gallery/3.jpg'
import img4 from '../../assets/gallery/4.jpg'
import img5 from '../../assets/gallery/5.jpg'
import img6 from '../../assets/gallery/6.jpg'
import img7 from '../../assets/gallery/7.jpg'
import img8 from '../../assets/gallery/8.jpg'
import img9 from '../../assets/gallery/9.jpg'
import img10 from '../../assets/gallery/10.jpg'
import img11 from '../../assets/gallery/11.jpg'
import img12 from '../../assets/gallery/12.jpg'

const Gallery = () => {
    return (
        <div className='mt-28'>
            <div className='text-center'>
                <h1 className="text-5xl font-bold mb-12">Our Gallary</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative">
                    <img
                        src={img1}
                        alt="Image 1"
                        className="w-full h-[250px] rounded-lg  transform hover:rotate-6 transition duration-1000"
                    />

                </div>
                <div className="relative">
                    <img
                        src={img2}
                        alt="Image 2"
                        className="w-full h-[250px] rounded-lg transform hover:rotate-6 transition duration-1000"
                    />

                </div>
                <div className="relative">
                    <img
                        src={img3}
                        alt="Image 3"
                        className="w-full h-[250px] rounded-lg transform hover:rotate-6 transition duration-1000"
                    />

                </div>
                <div className="relative">
                    <img
                        src={img4}
                        alt="Image 3"
                        className="w-full h-[250px] rounded-lg transform hover:rotate-6 transition duration-1000"
                    />

                </div>
                <div className="relative">
                    <img
                        src={img5}
                        alt="Image 1"
                        className="w-full h-[250px] rounded-lg transform hover:rotate-6 transition duration-1000"
                    />

                </div>
                <div className="relative">
                    <img
                        src={img6}
                        alt="Image 2"
                        className="w-full h-[250px] rounded-lg transform hover:rotate-6 transition duration-1000"
                    />

                </div>
                <div className="relative">
                    <img
                        src={img7}
                        alt="Image 3"
                        className="w-full h-[250px] rounded-lg transform hover:rotate-6 transition duration-1000"
                    />

                </div>
                <div className="relative">
                    <img
                        src={img8}
                        alt="Image 3"
                        className="w-full h-[250px] rounded-lg transform hover:rotate-6 transition duration-1000"
                    />

                </div>
                <div className="relative">
                    <img
                        src={img9}
                        alt="Image 1"
                        className="w-full h-[250px] rounded-lg transform hover:rotate-6 transition duration-1000"
                    />

                </div>
            </div>
        </div>
    );
};

export default Gallery;