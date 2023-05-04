import React from 'react';
import Navbar from '../Navbar';
import QustionAnswer from './QustionAnswer';


const Blog = () => {

    return (
        <div>
            <div className='bg-black'>
                <Navbar></Navbar>
            </div>
            <div className='bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300'>
                <QustionAnswer></QustionAnswer>
            </div>
        </div>
    );
};

export default Blog;