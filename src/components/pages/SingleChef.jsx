import React from 'react';
import { FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import Recipes from './Recipes';


const SingleChef = ({ chefData }) => {
    const { id, chefPicture, chefName, description, numRecipes, likes, ratings, yearsExperience, recipes } = chefData
    console.log(chefData);
    return (
        <div>
            {/* heading */}
            <div className='container text-center mx-auto w-full lg:w-8/12 p-5'>
                <h1 className='font-extrabold lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-pink-600'>CHEF'S DETAILS</h1>
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

                        <h1 className='text-xl leading-8'><span className='font-bold mr-3'>Experience :</span>{yearsExperience} Years+</h1>

                        <h1 className='text-xl leading-8'><span className='font-bold mr-3'>Ratings :</span>{ratings}</h1>

                        <h1 className='text-xl leading-8'><span className='font-bold mr-3'>Recipes: </span>{numRecipes}</h1>

                    </div>
                    {/* Icon part */}
                    <div className='flex justify-between mt-3 border-t-4 pt-4'>
                        <div className='flex items-center gap-1'><FaThumbsUp className='text-blue-800 text-xl'></FaThumbsUp><span>{likes} Likes</span></div>
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
            <div className='container text-center mx-auto w-full lg:w-8/12 p-5 mt-6'>
                <h1 className='font-extrabold lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-pink-600'>Chef's Special Recipes</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 pb-5 items-center gap-3 md:w-4/5 container mx-auto'>
                {
                    recipes.map(recipe => <Recipes key={id} recipe={recipe}></Recipes>)
                }
            </div>
        </div>
    );
};

export default SingleChef;