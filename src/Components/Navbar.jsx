import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-ecoTract.png';
import { IoMdLogIn } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

const Navbar = () => {

  const links = <>
    <li className='text-[15px] font-semibold'><NavLink>Home</NavLink></li>
    <li className='text-[15px] font-semibold'><NavLink>Challenges</NavLink></li>
    <li className='text-[15px] font-semibold'><NavLink>My Activities</NavLink></li>
    <div className="block lg:hidden space-y-1">
      <li><Link className='w-full sign-up'>Sign up</Link></li>
      <li><Link className='w-full log-in'>Login</Link></li>
    </div>
  </>;

  return (
    <div className="navbar bg-white/97 shadow-sm">
      <div className='w-11/12 mx-auto grid grid-cols-3 items-center'>
        <div className="flex items-center">
          <div className="lg:hidden dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to={'/'}><img className='w-38 md:w-36' src={logo} alt="EcoTrack Logo" /></Link>
        </div>
        <div className="hidden lg:justify-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="space-x-3.5 hidden lg:flex justify-end">
          <Link className='sign-up'><LuPlus size={20} />Sign up</Link>
          <a className="log-in"><IoMdLogIn size={20} /> Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;