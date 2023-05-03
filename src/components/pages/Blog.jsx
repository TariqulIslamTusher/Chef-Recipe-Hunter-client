import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from '../Navbar';

const Blog = () => {

    return (
        <div>
            <Navbar></Navbar>
            There i'll answer the question
        </div>
    );
};

export default Blog;