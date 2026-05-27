import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useTheme } from './providers/ThemeContext';
import NavbarDark from './components/NavbarDark';
import FooterDark from './components/FooterDark';

const MainLayout = () => {
    const { theme } = useTheme();
    return (
        <div className='relative'>
            <div className="absolute top-0 left-0 right-0 z-10 font-space">
                {theme === "dark"? <NavbarDark></NavbarDark> : <Navbar></Navbar>}
            </div>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            {theme === "dark"? <FooterDark></FooterDark> : <Footer></Footer>}
        </div>
    );
};

export default MainLayout;