import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-black text-center py-7">
            <p className="text-3xl font-semibold font-space">
                Sayyed Ahmad Asif
            </p>
            <div className="mt-5 space-x-4">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#contact" className="hover:underline">Contact</a>
                <a href="/resume.pdf" className="hover:underline" target="_blank">Resume</a>
            </div>
            <div className='flex items-center justify-center my-5 gap-10 text-white'>
                <a href="#"><FaFacebookF className='bg-gray-500 p-3 text-5xl rounded-full hover:bg-white hover:text-black' /></a>
                <a href="#"><LuGithub className='bg-gray-500 p-3 text-5xl rounded-full hover:bg-white hover:text-black' /></a>
                <a href="#"><FaLinkedinIn className='bg-gray-500 p-3 text-5xl rounded-full hover:bg-white hover:text-black' /></a>
            </div>
            <p className="text- mt-4">
                © All Rights Reserved By <span className='font-bold
                '>Sayyed Ahmad Asif</span> 
            </p>
        </footer>

    );
};

export default Footer;


