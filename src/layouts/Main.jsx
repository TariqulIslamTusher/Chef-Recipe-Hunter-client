import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div>
            
            <div className='min-h-[60vh] '>
                <div>{navigation.state === 'loading' && 'loading'}</div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;