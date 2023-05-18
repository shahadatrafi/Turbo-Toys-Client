import React from 'react';

import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero h-[250px] md:h-[650px] object-cover" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content w-full text-neutral-content">
                <div className='w-full ps-4 md:ps-16'>
                    <h3 className='text-xl font-bold mb-3 text-purple-300'>For Your Little Champs</h3>
                    <h1 className="mb-5 md:mb-16 text-3xl md:text-6xl font-bold text-base-100">New Toys For Your Kids</h1>
                    <p className="mb-8 text-xl md:text-3xl text-base-100">Get Up To <span className='font-bold text-purple-400'>30%</span> Off Available</p>
                    <button className="btn btn-primary text-white">Shop Now</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;