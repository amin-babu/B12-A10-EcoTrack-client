import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className='bg-base-200 min-h-[calc(100vh-298px)]'>
        <Outlet />
      </div>
      <div className='bg-base-200 pb-10'>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;