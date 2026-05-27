import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Offer from './Offer';
import Contact from './Contact';
import Education from './Education';
import Hero2 from './Hero2';
import HeroDark from './HeroDark';
import { useTheme } from './providers/ThemeContext';
import OfferDark from './components/OfferDark';
import AboutDark from './components/AboutDark';
import SkillsDark from './components/SkillsDark';
import ProjectsDark from './components/ProjectsDark';
import ContactDark from './components/Contactdark';

const Home = () => {
    // const [theme, setTheme] = useState("light");

    const { theme } = useTheme();

    // useEffect(() => {
    //     const storedTheme = localStorage.getItem("theme") || "light";
    //     setTheme(storedTheme);
    // }, []);

    return (
        <div className='font-space'>
            {/* {theme === "dark" ? <HeroDark /> : <Hero />}
            {theme === "dark" ? <OfferDark /> : <Offer />}
            {theme === "dark" ? <AboutDark /> : <About />}
            {theme === "dark" ? <SkillsDark /> : <Skills />}
            {theme === "dark" ? <ProjectsDark /> : <Projects />}
            {theme === "dark" ? <Education></Education> : <></>}
            {theme === "dark" ? <ContactDark /> : <Contact />} */}
            <HeroDark></HeroDark>
            <OfferDark></OfferDark>
            <AboutDark></AboutDark>
            <SkillsDark></SkillsDark>
            <ProjectsDark></ProjectsDark>
            <Education></Education>
            <ContactDark></ContactDark>
        </div>
    );
};

export default Home;