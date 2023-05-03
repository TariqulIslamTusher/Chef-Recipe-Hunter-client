import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, signOutUser, setUser } = useContext(AuthContext)

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                setUser('')
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div>

            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to='/' >Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to='/blog' >Blog</NavLink>

                            <div>
                                {user ? 
                                    <button onClick={handleLogOut} className='btn btn-sm btn-warning'>Log Out</button> 
                                    : 
                                    <Link to='/login' ><button className='btn btn-sm lg:hidden btn-warning'>Log In</button></Link>}
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Chef's World</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to='/' >Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to='/blog' >Blog</NavLink>
                      
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex items-center gap-3 '>
                                <button onClick={handleLogOut} className='btn btn-sm hidden lg:inline btn-warning'>Log Out</button>
                                <div className='tooltip tooltip-bottom cursor-pointer' data-tip={user.displayName}>
                                    <img tooltip={user.displayName} className='h-12 w-auto rounded-full' src={`${user.photoURL}`}></img>
                                </div>
                            </div>
                            : <div className='flex items-center gap-3 '>
                                <Link to='/login' ><button className='btn btn-sm hidden lg:inline btn-warning'>Log In</button></Link>
                                <div className='tooltip tooltip-bottom cursor-pointer' data-tip="No User">
                                    <FaUser className='h-12 w-auto p-1 rounded-full border-2 border-gray-700'></FaUser>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default Navbar;