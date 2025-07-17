import React from 'react';
import about from './assets/about-img.jpg';

const About = () => {
    return (
        <div className=' max-w-96 lg:max-w-7xl mx-auto mt-20 md:mt-32'>
            <h1 className='text-4xl font-bold mb-10 md:hidden text-center'>About Me</h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-20'>
                <div>
                    <img className='w-[350px] md:w-[400px] rounded-3xl' src={about} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-bold mb-10 hidden md:block'>About Me</h1>
                    <p className='mt-4 text-lg max-w-xl mx-auto'>
                        I am a passionate developer with a love for creating amazing web experiences.
                        My journey in web development has been fueled by curiosity and a desire to learn new technologies.
                        I enjoy working on projects that challenge me and allow me to grow as a developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;