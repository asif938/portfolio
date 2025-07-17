import React from 'react';
import project1 from './assets/4.jpg';
import project2 from './assets/5.jpg';

const Projects = () => {
    return (
        <div className='my-20 max-w-[420px] lg:max-w-7xl mx-auto'>
            <h2 className="font-bold text-center text-3xl">My Projects</h2>
            <p className="text-gray-600 text-center">Here are some of the projects I have worked on:</p>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 mt-10'>
                <div className='bg-[#F7F7F7] p-5 rounded-xl'>
                    <img className='rounded-xl' src={project1} alt="" />
                    <h2 className='mt-8 mb-4 text-2xl font-semibold'>Project Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores consectetur repellendus, corrupti iste sapiente vel ipsa reprehenderit. Nemo magni, eligendi dolorem ad aperiam facere voluptatibus est atque consequatur maxime! Voluptatibus nemo pariatur perspiciatis iste cumque, repellendus eaque officiis modi.</p>
                    <div className='mt-5 gap-6 flex'>
                        <button className='border-2 px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-orange-400  text-white text-lg font-semibold'><a href="">Visite This Site</a></button>
                        <button className='border-2 border-fuchsia-600 hover:bg-fuchsia-600 hover:text-white rounded-lg px-6 py-3 text-lg font-semibold'>Details</button>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] p-5 rounded-xl'>
                    <img className='rounded-xl' src={project2} alt="" />
                    <h2 className='mt-8 mb-4 text-2xl font-semibold'>Project Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores consectetur repellendus, corrupti iste sapiente vel ipsa reprehenderit. Nemo magni, eligendi dolorem ad aperiam facere voluptatibus est atque consequatur maxime! Voluptatibus nemo pariatur perspiciatis iste cumque, repellendus eaque officiis modi.</p>
                    <div className='mt-5 gap-6 flex'>
                        <button className='border-2 px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-orange-400  text-white text-lg font-semibold'><a href="">Visite This Site</a></button>
                        <button className='border-2 border-fuchsia-600 hover:bg-fuchsia-600 hover:text-white rounded-lg px-6 py-3 text-lg font-semibold'>Details</button>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;