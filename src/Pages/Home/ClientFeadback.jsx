import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import Aos from "aos";

const ClientFeedback = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
        })
    },[])

    return (
        <section className="mb-24" data-aos="fade-right">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold mb-14 text-center">Client Feedback</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg shadow-xl p-6 mb-6 mx-4" data-aos="zoom-in">
                        <div className="flex items-center mb-4">
                            <img src="https://i.ibb.co/Pwg5dD0/download.jpg" alt="Client 1" className="w-12 h-12 rounded-full object-cover" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">John Doe</h3>
                                <p className="text-gray-600">CEO, ABC Toys</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "Great selection of toys and excellent customer service! The team at Toyland has been a pleasure to work with, and their toys are always a hit with our customers. Highly recommended!"
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 mb-6 mx-4" data-aos="zoom-in">
                        <div className="flex items-center mb-4">
                            <img src="https://i.ibb.co/9GYgbc7/download.jpg" alt="Client 2" className="w-12 object-cover h-12 rounded-full" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">Jane Smith</h3>
                                <p className="text-gray-600">Parent</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "Toyland is my go-to place for purchasing toys for my kids. They have a wide range of options, and their quality is top-notch. Plus, their delivery is always prompt. Highly recommended!"
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 mb-6 mx-4" data-aos="zoom-in">
                        <div className="flex items-center mb-4">
                            <img src="https://i.ibb.co/cQmmdw3/download.jpg" alt="Client 3" className="w-12 object-cover h-12 rounded-full" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">David Wilson</h3>
                                <p className="text-gray-600">Educator</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            "I love the educational toys offered by Toyland. They make learning fun and engaging for children. The quality of their toys is exceptional, and the kids absolutely love them!"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;