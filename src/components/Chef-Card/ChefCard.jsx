import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ singleInfo }) => {
    const {id, chefPicture, chefName ,numRecipes, yearsExperience } = singleInfo




    return (
        <div className="card w-full max-h-fit bg-base-100 shadow-xl hover:-translate-y-10 transition-all ease-in-out duration-300">
            <figure><img className='object-cover object-center w-full h-[370px]' src={chefPicture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{chefName}</h2>
                <p className='text-xl'>{yearsExperience} Years Of Experienced</p>
                <p>Total Recipes: {numRecipes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chefInfo/${id}`} ><span className="btn btn-outline">Details</span></Link>
                </div>
            </div>
        </div>


    );
};

export default ChefCard;