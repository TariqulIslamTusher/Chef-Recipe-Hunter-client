import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chef-Card/ChefCard'
import Priority from './Priority';

const Home = () => {
    const chefsInfo = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='bg-gradient-to-b from-gray-900 via-gray-300 to-cyan-700 border-t-indigo-300'>
                <div className='grid grid-cols-1 px-4 md:grid-cols-3 container mx-auto gap-8 -translate-y-40'>
                    {
                        chefsInfo.map(singleInfo => <ChefCard key={singleInfo.id} singleInfo={singleInfo}></ChefCard>)
                    }
                </div>
            </div>

            <div className='bg-gradient-to-b from-cyan-700 to-gray-400 text-center'>
                    <Priority></Priority>
            </div>

        </div>
    );
};

export default Home;