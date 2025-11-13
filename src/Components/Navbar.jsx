import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-ecoTract.png';
import { IoMdLogIn } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { AuthContext } from '../Contexts/AuthContext';
import { CgProfile } from 'react-icons/cg';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Log out successfull.",
          icon: "success",
          draggable: true
        });
      })
      .catch(error => console.log(error))
  };

  const links = <>
    <li className='text-[15px] font-semibold'><NavLink to='/'>Home</NavLink></li>
    <li className='text-[15px] font-semibold'><NavLink to='/challenges' end>Challenges</NavLink></li>
    <li className='text-[15px] font-semibold'><NavLink to='/challenges/add'>Add New Challenge</NavLink></li>
    <div className="block md:hidden space-y-1">
      {
        user ?
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost avatar flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <span className="font-medium text-gray-800">{user?.displayName}</span>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <img
                  alt="User avatar"
                  src={user?.photoURL || <CgProfile />}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-md dropdown-content bg-base-100 rounded-xl z-1 mt-3 w-50 p-3 shadow-lg -translate-x-5 -right-18"
            >
              <li>
                <button className="text-xs font-semibold w-full py-2 rounded-md hover:bg-[#7E59D3] hover:text-white transition">
                  Profile
                </button>
              </li>
              <li>
                <Link to='/my-activities' className="text-xs font-semibold w-full py-2 rounded-md hover:bg-[#7E59D3] hover:text-white transition">
                  My Activities
                </Link>
              </li>
              <li onClick={handleSignOut}>
                <button className="text-xs font-semibold w-full py-2 rounded-md hover:bg-[#5EC57E] hover:text-white transition">
                  Logout
                </button>
              </li>
            </ul>
          </div> :
          <>
            <li><Link to={'/sign-up'} className='w-full sign-up'><LuPlus size={20} /> Sign up</Link></li>
            <li><Link to={'/login'} className='w-full btn-main'><IoMdLogIn size={20} /> Login</Link></li>
          </>
      }
    </div>
  </>;

  return (
    <div className="navbar bg-white/30 backdrop-blur-lg shadow-sm">
      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 items-center'>
        <div className="flex items-center md:col-span-3">
          <div className="md:hidden dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
        <div className="hidden md:justify-center md:flex md:col-span-6">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="space-x-3.5 hidden md:flex justify-end md:col-span-3">
          {
            user ?
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost border border-base-300 avatar flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-800">{user?.displayName}</span>
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                    <img
                      alt="User avatar"
                      src={user?.photoURL || <CgProfile />}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <ul
                  tabIndex={-1}
                  className="menu menu-md dropdown-content bg-base-100 rounded-xl z-1 mt-3 w-50 p-3 shadow-lg -translate-x-5 right-2"
                >
                  <li>
                    <button className="text-[16px] font-semibold w-full py-2 rounded-md hover:bg-[#7E59D3] hover:text-white transition">
                      Profile
                    </button>
                  </li>
                  <li>
                    <Link to='/my-activities' className="text-[16px] font-semibold w-full py-2 rounded-md hover:bg-[#7E59D3] hover:text-white transition">
                      My Activities
                    </Link>
                  </li>
                  <li onClick={handleSignOut}>
                    <button className="text-[16px] font-semibold w-full py-2 rounded-md hover:bg-[#5EC57E] hover:text-white transition">
                      Logout
                    </button>
                  </li>
                </ul>

              </div>
              :
              <>
                <Link to={'/sign-up'} className='w-full sign-up'><LuPlus size={20} /> Sign up</Link>
                <Link to={'/login'} className='w-full btn-main'><IoMdLogIn size={20} /> Login</Link>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;