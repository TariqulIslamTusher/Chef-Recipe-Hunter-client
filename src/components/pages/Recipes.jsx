import React from 'react';

const Recipes = ({recipe}) => {
    
    const {name , ingredients, imgRec} = recipe
    
    return (
        <div>
            {/* first recipes card */}
            <div className="card hover:-translate-y-3 transition-all duration-200 w-full bg-base-100 shadow-xl image-full">
                    <figure>
                        <img loading='lazy' className='w-full max-h-96 object-cover object-center' src={imgRec} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-yellow-300">{name}</h2>
                        {
                            ingredients.map(SingleIngredients => <li>{SingleIngredients}</li>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default Recipes;