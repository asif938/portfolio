import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className='relative'>
            <div className="absolute top-0 left-0 right-0 z-10 font-space">
                <Navbar></Navbar>
            </div>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;