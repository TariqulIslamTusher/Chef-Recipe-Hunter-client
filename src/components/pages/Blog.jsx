import React from 'react';
import Navbar from '../Navbar';
import QustionAnswer from './QustionAnswer';


const Blog = () => {

    return (
        <div>
            <div className='bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300' style={{ backgroundImage: "url('https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
                <Navbar></Navbar>
                <QustionAnswer></QustionAnswer>
            </div>
        </div>
    );
};

export default Blog;