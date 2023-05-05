import React from 'react';
import { FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ChefCard = ({ singleInfo }) => {
    const { id, chefPicture, chefName, numRecipes, yearsExperience, likes, ratings } = singleInfo

    return (
        <div id='chef-card' className="card rounded-3xl w-full max-h-fit bg-base-100 shadow-2xl hover:-translate-y-4 transition-all ease-in-out duration-500">
           
                <LazyLoad>
                    <img className='object-cover rounded-t-xl object-center w-full h-[370px]' src={chefPicture} alt="" />
                </LazyLoad>
           
            <div className="card-body rounded-b-xl bg-gradient-to-br from-amber-200 to-sky-200 ">
                <h2 className="card-title text-xl md:text-2xl font-bold">{chefName}</h2>
                <p className='md:text-xl'>Experience: {yearsExperience} Years+</p>
                <p>Total Recipes: {numRecipes}</p>
                {/* likes and ratings */}
                <div className='flex justify-between mt-3 border-y-2 py-4'>
                    <div className='flex items-center gap-1'><FaThumbsUp className='text-slate-700 text-2xl'></FaThumbsUp> {likes} Likes</div>
                    <div><Rating
                        readonly
                        placeholderRating={ratings}
                        emptySymbol={<FaRegStar className='text-warning text-xl'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning text-xl'></FaStar>}
                        fullSymbol={<FaStar className='text-warning text-xl'></FaStar>} /></div>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/chefInfo/${id}`} ><span className="btn btn-outline ">View Recipes</span></Link>
                </div>
            </div>
        </div>


    );
};

export default ChefCard;