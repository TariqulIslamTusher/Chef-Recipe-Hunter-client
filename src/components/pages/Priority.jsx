import React from 'react';

const Priority = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 container mx-auto items-center justify-center pb-7 -mt-10'>
            <div>
                <div className="h-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full">
                        <img src='https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div className="carousel-item h-full">
                        <img src='https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div className="carousel-item h-full">
                        <img src='https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>

                </div>
            </div>
            <div className='text-center w-6/12 text-2xl'>
                <h1 className='text-4xl text-white font-extrabold mb-3'>Our CHEFS</h1>
                <p className='text-gray-200'>A chef is a highly trained and skilled professional cook who is proficient in all aspects of food preparation of a particular cuisine. The word "chef" is derived (from shortened) from the term chef de cuisine , the director or head of a kitchen. Chefs can receive both formal training from an institution, as well as through apprenticeship with an experienced chef.</p>
            </div>
        </div>
    );
};

export default Priority;