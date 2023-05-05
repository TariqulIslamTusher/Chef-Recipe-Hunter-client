import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chef-Card/ChefCard'
import Priority from './Priority';
import { toast } from 'react-toastify';
import Lesson from './Lesson';
import Navbar from '../Navbar';

const Home = () => {
    const chefsInfo = useLoaderData()

    return (
        <div style={{ backgroundImage: "url('https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
            
            <Banner></Banner>
            <div className='bg-gradient-to-b from-gray-900 via-gray-300 to-cyan-700 border-t-indigo-300'>
                <div className='grid grid-cols-1 px-4 md:grid-cols-3 container mx-auto gap-8 md:px-20 md:-translate-y-40'>
                    {
                        chefsInfo.map(singleInfo => <ChefCard key={singleInfo.id} singleInfo={singleInfo}></ChefCard>)
                    }
                </div>
            </div>

            <div className='bg-gradient-to-b from-cyan-700 from-60%  to-teal-700 text-center md:px-20 py-5'>
                    <Priority></Priority>
            </div>

            <div className='bg-gradient-to-b from-teal-700 to-slate-500 text-center md:px-20 pt-7 md:pt-12'>
                <Lesson></Lesson>
            </div>

        </div>
    );
};

export default Home;