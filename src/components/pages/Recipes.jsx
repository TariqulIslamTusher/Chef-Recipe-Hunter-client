import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const Recipes = ({ recipe }) => {

    const { name, ingredients, imgRec } = recipe

    const [fav, setFav] = useState(false)

    const handleFav = () => {
        setFav(true)
        toast.info('Recipes added to Favourite list')
    }

    return (
        <div>
            <ToastContainer></ToastContainer>

            <div className="card hover:-translate-y-3 transition-all duration-200 w-full bg-base-100 shadow-xl image-full">
                <figure>
                    <img loading='lazy' className='w-full max-h-96 object-cover object-center' src={imgRec} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-yellow-300">{name}</h2>
                    {
                        ingredients.map(SingleIngredients => <li>{SingleIngredients}</li>)
                    }
                    <button onClick={handleFav} disabled={fav} className='flex items-center justify-center w-full mt-auto bg-yellow-500 py-2 hover:bg-yellow-300 disabled:bg-opacity-30 text-black font-bold rounded-lg'><span> Favourite</span><FaHeart className='text-xl ml-4 text-white'></FaHeart></button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;