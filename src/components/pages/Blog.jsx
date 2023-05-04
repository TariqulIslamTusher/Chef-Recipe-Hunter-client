import React from 'react';
import Navbar from '../Navbar';

const Blog = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300'>
                <QustionAnswer></QustionAnswer>
            </div>
        </div>
    );
};

export default Blog;