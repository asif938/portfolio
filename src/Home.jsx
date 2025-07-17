import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Offer from './Offer';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='font-space'>
            <Hero></Hero>
            <Offer></Offer>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;