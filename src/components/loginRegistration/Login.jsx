import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider
const githubProvider = new GithubAuthProvider

const Login = () => {

    const { LoginWithEmail, setUser, password, setPassword, passwordError, setPError, emailError, setEmailError, email, setEmail,  rootErr, setRootError} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value


       


        if (!email) {
            setPError('')
            setEmailError('Email can not be empty')
            return event.target.email.focus()
        } else if (emailError) {
            setPError('')
            setEmailError(emailError)
            return event.target.email.focus()
        } else if (!password) {
            setEmailError('')
            setPError('Pasword can not be empty')
            return event.target.password.focus()
        }
        else if(passwordError){
            setEmailError('')
            setPError(passwordError)
            return event.target.password.focus()
        }
        else {
            setEmailError('')
            setPError('')
        }
        

        LoginWithEmail(email, password)
            .then(res => {
                toast.success('login success')
                const emailUser = res.user
                setUser(emailUser);
                navigate(location.state?.pathname || '/' ,  { replace: true })
            })
            .catch(err => {
                setRootError(err.message);
                toast.error(rootErr)
                event.target.password.value =''
                event.target.email.value = ""
                event.target.email.focus()
               
            })
    }

    // handleGoogle function
    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                const loggedUser = res.user
                setUser(loggedUser);
                toast.success('Login Successed')
                navigate(location?.state?.pathname || '/',  { replace: true })

            })
            .catch(err =>{
                console.log(err.message)
                setRootError(err.message)
                toast.error(rootErr)
            })
    }

    // handle github function
    const handleGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((res) => {
                const loggedUser = res.user
                setUser(loggedUser);
                toast.success('Login Successed')
                navigate(location.state?.pathname || '/' ,  { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                setRootError(err.message)
                toast.error(rootErr)
            })
    }

    const handleEmail = (e) => {
        const emailInput = e.target.value
        setEmail(emailInput)
        if (emailInput.length === 0) {
            setEmailError('')
        }
        else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput)) {
            setEmailError('Please input a valid Email')
        }
        else {
            setEmailError('')
        }
    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value

        if (passwordInput.length === 0) {
            setPError('')
        }
        else if (passwordInput.length < 6) {
            setPError('Password must be at least 6 caracters')
        }
        else {
            setPError('')
        }
        setPassword(e.target.value)
    }


    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
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
                            value={email}
                            onChange={handleEmail}
                            placeholder="Enter your email"
                        />
                          {emailError ? <p className='text-red-500'>{emailError}</p> : ''}
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
                            value={password}
                            onChange={handlePassword}
                        />
                          {passwordError ? <p className='text-red-500'>{passwordError}</p> : ''}
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Log In</button>

                    <p className='my-3'>New Here?<Link className='text-red-800 font-bold ml-2' to='/register' state={location.state}>Register now</Link></p>

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
        </div>
    );
};

export default Login;