import React from 'react';
import css from '../../index.css'
import Navbar from '../Navbar';

const Banner = () => {
    return (
        <div className="relative bg-fixed bg-cover bg-center h-[700px] object-cover" >
            <Navbar></Navbar>

            <div className="absolute hover:bg-opacity-20 transition-all duration-300 w-full lg:w-6/12 right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-10 rounded-xl px-6 py-4 shadow-lg">
                <h1 className="text-3xl font-bold text-yellow-400 mb-2 shadow-md">DISCOVER OUR CHEFS AND RECIPES</h1>
                <p className="text-xl text-slate-50">Italian food are familiar world wide since the era we know. Behind of this every chef's are dedicating their brilliant knowledge and hard-word. We are redirecting you here from a lumpen version to a chef version where you will know about our thousands of <span className='text-yellow-400 font-bold'>Italian Food</span> 
                <p className='text-yellow-400 my-3'>Why delay? <span className='text-teal-100'>Have a look and rate our chefs.</span></p> 
                
               </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
                   <a href="chef-card">Get Started</a>
                </button>
            </div>
        </div>

    )
};

export default Banner;