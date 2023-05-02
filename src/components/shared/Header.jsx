import React from 'react';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl pt-5 font-bold'>WELCOME TO THE CHEF'S WORLD</h1>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;