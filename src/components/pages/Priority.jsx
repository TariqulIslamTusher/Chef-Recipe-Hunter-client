import React from 'react';
import LazyLoad from 'react-lazy-load';

const Priority = () => {
  return (
    <div className='-mt-16'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-rose-400 font-extrabold pb-2 mb-3'>OUR CHEF'S RECIPES</h1>
      </div>

      <div className='flex flex-col md:flex-row gap-5 container mx-auto items-center justify-center pb-7'>
        <div className='md:w-7/12 h-full mx-auto px-4'>
          <div className="carousel h-64 carousel-vertical rounded-xl">
            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>
            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>
            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>


            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>
            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>
            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>


            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>
            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>
            <div className="carousel-item h-full">
              <LazyLoad>
                <img className='w-full h-auto object-cover' src='https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
              </LazyLoad>
            </div>
          </div>
        </div>
        <div className='text-center px-4 lg:w-7/12 text-2xl'>
          <p className='text-justify text-gray-200'>A chef is a highly trained and skilled professional cook who is proficient in all aspects of food preparation of a particular cuisine. The word "chef" is derived (from shortened) from the term chef de cuisine , the director or head of a kitchen. Chefs can receive both formal training from an institution, as well as through apprenticeship with an experienced chef.</p>
        </div>
      </div>
    </div>
  );
};

export default Priority;