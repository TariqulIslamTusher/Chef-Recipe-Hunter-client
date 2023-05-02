import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='shadow-xl sticky top-0 left-0 right-0'>
            <div className="navbar bg-transparent container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">CHEF'S WORLD</a>
                </div>
                <div className="flex-none gap-2">
                    <ul className='flex flex-grow'>
                        <Link to='/' className='hover:bg-slate-200 rounded-xl transition-all delay-100 px-4 py-2'>Home</Link>
                        <Link to='/blog' className='hover:bg-slate-200 rounded-xl transition-all delay-100 px-4 py-2'>Blog</Link>
                        <Link className='hover:bg-slate-200 rounded-xl transition-all delay-100 px-4 py-2'>About</Link>
                        <Link to='/login' className='hover:bg-slate-200 rounded-xl transition-all delay-100 px-4 py-2'>Log In</Link>
                    </ul>
                    <div className="w-10 rounded-full">
                        <img src="../../public/chef-icon.png" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;