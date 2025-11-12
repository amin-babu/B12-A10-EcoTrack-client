import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='relative'>
      <nav className='fixed z-40 w-full'>
        <Navbar></Navbar>
      </nav>
      <div className='bg-base-200 pt-[65px] min-h-[calc(100vh-298px)]'>
        <Outlet />
      </div>
      <div className='bg-base-200 py-10'>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;