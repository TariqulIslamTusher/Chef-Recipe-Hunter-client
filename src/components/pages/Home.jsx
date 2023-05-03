import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chef-Card/ChefCard';

const Home = () => {
    const chefsInfo = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='bg-gradient-to-br from-red-200 via-gray-300 border-t-indigo-300'>
                <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto'>
                    {
                        chefsInfo.map(singleInfo => <ChefCard singleInfo={singleInfo}></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;