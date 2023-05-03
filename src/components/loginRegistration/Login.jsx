import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider
const githubProvider = new GithubAuthProvider

const Login = () => {

    const { LoginWithEmail, setUser, user } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value
        

        LoginWithEmail(email, password)
            .then(res => {
                const emailUser = res.user
                console.log(emailUser);
                setUser(emailUser);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // handleGoogle function
    const handleGoogle =()=>{
        signInWithPopup(auth, googleProvider)
            .then((res)=>{
                const loggedUser = res.user 
                setUser(loggedUser)
                console.log(user);
            })
            .catch(err=> console.log(err.messag3e))
    }

    // handle github function
    const handleGithub=()=>{
        signInWithPopup(auth, githubProvider)
        .then((res)=>{
            const loggedUser = res.user 
            setUser(loggedUser)
            console.log(user);
        })
        .catch(err=> console.log(err.messag3e))
    }
  

    return (
        <div className='container w-6/12 mx-auto m-8 h-[screen]'>
            <form onSubmit={handleLogin} className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-blue-400">
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
                    
                    <div onClick={handleGoogle} className='cursor-pointer flex items-center gap-3 rounded-xl border-2 bg-white shadow-lg p-3 text-[#ff781e] text-2xl'>
                        <FaGoogle className='mx-auto'></FaGoogle>
                        <p className='text-sm'>Log in with Google</p>
                    </div>
                    <div onClick={handleGithub} className='rounded-xl cursor-pointer flex items-center gap-3 border-2 bg-white shadow-lg p-3 text-slate-700 text-2xl'>
                        <FaGithub className='mx-auto'></FaGithub>
                        <p className='text-sm'>Log in with Github</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;