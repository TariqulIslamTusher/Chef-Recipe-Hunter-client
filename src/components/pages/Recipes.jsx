import React, { useState } from 'react';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';

const Recipes = ({ recipe }) => {

    const { name, ingredients, imgRec, recipeRating, methode } = recipe

    const [fav, setFav] = useState(false)

    const handleFav = () => {
        setFav(true)
        toast.info('Recipes added to Favourite list')
    }

    return (
        <div>
            <ToastContainer></ToastContainer>

            <div className="card hover:-translate-y-3 transition-all duration-200 h-full w-full bg-base-100 shadow-xl image-full">
                <figure>
                    <img loading='lazy' className='w-full min-h-[650px] object-cover' src={imgRec} alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col">
                    <h2 className="font-bold text-2xl text-yellow-300 ">{name}</h2>
                    <div>
                        {
                            ingredients.map(SingleIngredients => <li className='my-0 leading-0'>{SingleIngredients}</li>)
                        }
                    </div>

                    <div className='bg-yellow-800 mt-auto  bg-opacity-40 p-2 text-center rounded-lg'>

                        <h1 className='text-slate-200 my-2 text-xl font-semibold border-b-2 border-yellow-400'>Methodes of Recipe</h1>

                        <p className='text-justify'>{methode}</p>

                        <div>

                            <Rating className='ml-auto'
                                readonly
                                placeholderRating={recipeRating}
                                emptySymbol={<FaRegStar className='text-warning text-xl'></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning text-xl'></FaStar>}
                                fullSymbol={<FaStar className='text-warning text-xl'></FaStar>} />
                        </div>

                    </div>


                    <button onClick={handleFav} disabled={fav} className='flex items-center justify-center w-full mt-4 bg-yellow-500 py-2 hover:bg-yellow-300 disabled:bg-opacity-30 text-black font-bold rounded-lg'><span> Favourite</span><FaHeart className='text-xl ml-4 text-white'></FaHeart></button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;