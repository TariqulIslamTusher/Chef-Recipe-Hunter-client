import React from 'react';
import "./Loader.css";
import Navbar from '../../Navbar';

const Loader = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="spinner">
                <div class="cube1"></div>
                <div class="cube2"></div>
            </div>
        </div>
    );
};

export default Loader;