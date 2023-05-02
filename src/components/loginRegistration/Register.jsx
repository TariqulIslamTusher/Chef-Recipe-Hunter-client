import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container w-6/12 mx-auto m-8 h-[screen]'>
            <form className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-blue-400">
               <div className='text-center mb-6'>
               <h2 className='font-bold text-amber-700 text-5xl'>Register Here</h2>
               </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="Name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Name"
                        type="text"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                        Photo Url
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="photo"
                        type="text"
                        placeholder="url:(https://imbb.food.png)"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter Your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>

                <p>Already have an account?<Link className='btn btn-link' to='/login'>Log In</Link></p>

               
            </form>
        </div>
    );
};

export default Register;