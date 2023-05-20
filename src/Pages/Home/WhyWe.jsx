import React from 'react';
import img1 from '../../assets/collectionToy.avif'
import { FaChartLine, FaShuttleVan, FaSmile } from 'react-icons/fa';


const WhyWe = () => {
    return (
        <section className="py-1 mb-24">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold mb-14 text-center">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-8">
                        <figure className=''><FaShuttleVan className='text-6xl '></FaShuttleVan></figure>
                        <div className="card-body">
                            <h2 className="card-title">Free Delivery</h2>
                            <p>                We provide free delivery service to ensure your toys are delivered to your doorstep without any additional cost.
                            </p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-8">
                        <figure className=''><FaChartLine className='text-6xl '></FaChartLine></figure>
                        <div className="card-body">
                            <h2 className="card-title">Quality Assurance</h2>
                            <p>                Our toys are carefully selected and tested to ensure they meet the highest quality standards. We prioritize safety and durability to provide the best for your child.
                            </p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-8">
                        <figure className=''><FaSmile className='text-6xl '></FaSmile></figure>
                        <div className="card-body">
                            <h2 className="card-title">Exceptional Service</h2>
                            <p>                We take pride in providing exceptional customer service. Our friendly and knowledgeable team is always ready to assist you with any inquiries or concerns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWe;