import React from 'react';

const Navbar = () => {
    return (
        <div className=' shadow-xl'>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">CHEF'S WORLD</a>
                </div>
                <div className="flex-none gap-2">
                    <ul className='flex flex-grow'>
                        <li className='hover:bg-slate-200 rounded-xl transition-all delay-100 px-4 py-2'>Home</li>
                        <li className='hover:bg-slate-200 rounded-xl transition-all delay-100 px-4 py-2'>Blog</li>
                        <li className='hover:bg-slate-200 rounded-xl transition-all delay-100 px-4 py-2'>About</li>
                        <li className='hover:bg-slate-200 rounded-xl transition-all delay-100 px-4 py-2'>Log In</li>
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