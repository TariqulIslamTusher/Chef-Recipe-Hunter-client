import React from 'react';
import Navbar from '../Navbar';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';

const ChefDetails = () => {

    const chefData = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>
            <div className=' bg-gradient-to-r from-slate-300 via-slate-50 to-slate-300'>
                <SingleChef key={chefData.id} chefData={chefData}></SingleChef>
            </div>
        </div>
    );
};

export default ChefDetails;