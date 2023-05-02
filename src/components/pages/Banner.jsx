import React from 'react';
import css from '../../index.css'

const Banner = () => {
    return (
        <div id='banner'>
            <div className='relative'>
                <img className='w-full h-64' src='../../../assets/banner.jpg' alt="" />
                <div className='absolute right-3 top-2/4 hover:bg-slate-50'>
                    <h1>Welcome to the era of this food</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;