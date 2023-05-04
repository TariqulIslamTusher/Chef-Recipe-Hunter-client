import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Navbar from '../Navbar';


const Register = () => {
    const { createAcctWithEmail, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location);



    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const url = e.target.url.value
        const email = e.target.email.value
        const password = e.target.password.value


        // creating user with email
        createAcctWithEmail(email, password)
            .then(res => {
                const loggedUser = res.user;

                setUser(loggedUser);
                navigate(location?.state?.pathname || '/')
                // calling the photo and url updating function
                updatePhotoAndUrl(loggedUser, name, url)
                    .then(() => {

                    }).catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch(err => {
                console.log(err.message);
            })

        // Photo and url updating function
        const updatePhotoAndUrl = (user, name, url) => {
            return updateProfile(user, { displayName: name, photoURL: url })
        }

    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='container w-6/12 mx-auto m-8 h-[screen]'>
                <form onSubmit={handleSubmit} className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-blue-400">
                    <div className='text-center mb-6'>
                        <h2 className='font-bold text-amber-700 text-5xl'>Register Here</h2>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="url">
                            Photo Url
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="url"
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
                            name="email"
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
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>

                    <p>Already have an account?<Link className='btn btn-link' to='/login'>Log In</Link></p>


                </form>
            </div>
        </div>
    );
};

export default Register;