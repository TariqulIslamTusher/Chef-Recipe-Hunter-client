import React from 'react';
import css from '../../index.css'
import Navbar from '../Navbar';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-[700px] object-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
            <Navbar></Navbar>

            <div className="absolute w-full lg:w-6/12 right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-10 rounded-xl px-6 py-4 shadow-lg">
                <h1 className="text-3xl font-bold text-white mb-2 shadow-md">DISCOVER OUR CHEF</h1>
                <p className="text-xl text-slate-50">Most higher qualified chef of italiano cuisines are in font of you. <br></br> <span className='text-yellow-300'>Why delay????</span> <br></br> <span className='text-teal-100'>Have a look and rate them with your elegancy.</span></p>
                <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
                    Get Started
                </button>
            </div>
        </div>

    )
};

export default Banner;