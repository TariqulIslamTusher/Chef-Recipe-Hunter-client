import React from 'react';
import css from '../../index.css'
import Navbar from '../Navbar';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('../../../assets/banner.jpg')" }}>
            {/* <Navbar></Navbar> */}

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white px-6 py-4 shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Discover the Joy of Cooking</h1>
                <p className="text-lg text-gray-700">Join our cooking classes and learn how to create delicious meals for your family and friends.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
                    Get Started
                </button>
            </div>
        </div>

    )
};

export default Banner;