import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='container w-6/12 mx-auto m-8 h-[screen]'>
            <form className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-blue-400">
                <div className='text-center mb-6'>
                    <h2 className='font-bold text-green-700 text-5xl'>Log In</h2>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"


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

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Log In</button>

                <p>Don't have an account?<Link className='btn btn-link' to='/register'>Register now</Link></p>

                <div className='flex gap-3 items-center'>
                    <h1>Log In with </h1>
                    <span className=' border-2 bg-white shadow-sm p-3 text-center  text-red-600 text-2xl'><FaGoogle></FaGoogle>
                        <p className='text-sm'>Google</p>
                    </span>
                    <span className=' border-2 bg-white shadow-sm p-3 text-center  text-slate-700 text-2xl'><FaGithub></FaGithub>
                        <p className='text-sm'>Github</p>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;