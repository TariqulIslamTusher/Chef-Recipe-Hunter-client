import React, { useContext } from 'react';
import Navbar from '../Navbar';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ChefDetails = () => {

    const chefData = useLoaderData()
    const {setLoader, user} = useContext(AuthContext)
    if(!user){
        setLoader(true)
        return "loading"
    }


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