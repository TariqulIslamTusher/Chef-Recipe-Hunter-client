import React from 'react';

const Priority = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 container mx-auto items-center justify-center pb-7 -mt-10'>
            <div className='lg:w-5/12 px-4'>
                <div className="carousel h-72 carousel-vertical rounded-box">
                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    </div>


                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/1813505/pexels-photo-1813505.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/1813505/pexels-photo-1813505.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    </div>


                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    </div>
                    <div className="carousel-item h-full">
                        <img className='w-full object-cover' src='https://images.pexels.com/photos/5769392/pexels-photo-5769392.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                    </div>

                </div>
            </div>
            <div className='text-center px-4 lg:w-7/12 text-2xl'>
                <h1 className='text-4xl text-yellow-400 font-extrabold border-b-2 pb-2 mb-3'>OUR CHEF'S RECIPES</h1>
                <p className='text-justify text-gray-200'>A chef is a highly trained and skilled professional cook who is proficient in all aspects of food preparation of a particular cuisine. The word "chef" is derived (from shortened) from the term chef de cuisine , the director or head of a kitchen. Chefs can receive both formal training from an institution, as well as through apprenticeship with an experienced chef.</p>
            </div>
        </div>
    );
};

export default Priority;