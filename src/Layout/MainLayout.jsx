import React from 'react';
import Navbar from '../compoenets/Navbar';
import { Outlet } from 'react-router';
import Footer from '../compoenets/Footer';

const MainLayout = () => {
  return (
    <div className='bg-base-300'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
