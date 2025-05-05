import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
        <ToastContainer />
           <Navbar></Navbar> 
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default Root;