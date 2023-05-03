import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            
            <div className='min-h-[60vh] '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;