import React from 'react';
import { FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';


const SingleChef = ({ chefData }) => {
    const { id, chefPicture, chefName, description, numRecipes, likes, ratings, yearsExperience, recipes } = chefData
    console.log(chefData);
    return (
        <div>
            {/* heading */}
            <div className='container text-center mx-auto w-full lg:w-8/12 p-5'>
                <h1 className='font-extrabold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-pink-600'>Chef's Details</h1>
            </div>

            {/* Single Chef's Details */}
            <div className="flex flex-col items-center  bg-white border border-gray-300 rounded-lg shadow-lg md:flex-row md:w-3/5 hover:bg-yellow-50 container mx-auto">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src={chefPicture} alt="" />
                <div className="flex flex-col justify-between p-6 leading-normal">
                    <h1 className="mb-3 lg:text-6xl pb-3 font-bold text-gray-900 border-b-4">{chefName}</h1>
                    {/* first border */}
                    <p className="lg:text-2xl mb-3 py-3 text-gray-700 border-b-4 text-justify">{description}</p>
                    {/* second Border */}
                    <div>
                        <h1 className='text-xl leading-8'><span className='font-bold mr-3'>Name :</span> {chefName}</h1>
                        <h1 className='text-xl leading-8'><span className='font-bold mr-3'>Experience :</span> {yearsExperience} Years+</h1>

                        <h1 className='text-xl leading-8'><span className='font-bold mr-3'>Ratings :</span>{ratings}</h1>

                        <h1 className='text-xl leading-8'><span className='font-bold mr-3'>Recipes: </span>{numRecipes}</h1>

                    </div>
                    {/* Icon part */}
                    <div className='flex justify-between mt-3 border-t-4 pt-4'>
                        <div className='flex items-center gap-1'><FaThumbsUp></FaThumbsUp> {likes} Likes</div>
                        <div><Rating
                            readonly
                            placeholderRating={ratings}
                            emptySymbol={<FaRegStar className='text-warning text-xl'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning text-xl'></FaStar>}
                            fullSymbol={<FaStar className='text-warning text-xl'></FaStar>} /></div>
                    </div>
                </div>

            </div>
            {/* Chef's Special Recipes */}
            <div className='container text-center mx-auto w-full lg:w-8/12 p-5'>
                <h1 className='font-extrabold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-600'>Chef's Special Recipes</h1>
            </div>
            <div className='flex flex-col items-center gap-4  md:flex-row md:w-3/5 container mx-auto'>
                {/* first recipes card */}
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img className='w-full h-auto object-cover' src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
                {/* second recipes card */}
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img className='w-full max-h-52 object-cover' src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
                {/* third recipes card */}
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img className='w-full max-h-52 object-cover' src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;