import React from 'react';
import hero from './assets/Hero-img.png';
import { Typewriter } from 'react-simple-typewriter'
// import reactLogo from './assets/react.svg'

const Hero = () => {

    // const handleType = (count: number) => {
    //     // access word count number
    //     console.log(count);
    // }

    // const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    // }

    return (
        <div className="hero-bg">
            <div className='flex flex-col md:flex-row md:items-center md:justify-between max-w-96 lg:max-w-7xl mx-auto gap-3 md:gap-0 pt-20'>
                <div className=''>
                    <h1 className='text-3xl md:text-4xl font-bold font-space'>Hey, I am </h1>
                    <h2 className='text-4xl md:text-5xl font-bold mt-3 font-space'>Sayyed Ahmad Asif</h2>
                    <h1 className='text-3xl font-semibold mt-5'>
                        A{' '}
                        <span className='text-[#B538E3] font-semibold font-space'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN Stack Developer', 'Graphics Designer', 'Full Stack Developer', 'Cyber Security Enthusiast', 'MERN Stack Developer']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </h1>
                    <p className='hidden md:block mt-4 text-lg md:w-[650px] font-space'>I build modern web applications with clean code and scalable architecture using the MERN stack.
                        I'm also passionate about graphics design and continuously expanding my skills.
                        Currently diving deeper into backend systems, and Cyber security.
                        Always learning. Always building.</p>
                    <p className='md:hidden mt-4 text-lg md:w-[650px]'>I build scalable MERN apps, design graphics, and explore backend systems and cybersecurity passionately.
</p>
                    <button className='border-2 mt-5 px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-orange-400  text-white text-lg font-semibold font-space'><a href="">My Resume</a></button>
                </div>
                <div>
                    <img className='w-[630px]' src={hero} alt="Hero Image" />
                </div>
                {/* <div className="absolute top-36 right-36">
                    <img src={reactLogo} className="logo react w-[100px]" alt="React logo" />
                </div> */}
                <div className="absolute top-[100px] left-[700px]">
                    <img src="https://www.programming-hero.com/banner/react.svg" className="logo react w-[300px]" alt="React logo" />
                </div>
                <div className="absolute top-[500px] right-[50px]">
                    <img src="https://www.programming-hero.com/banner/html.svg" className="logo html w-[150px]" alt="React logo" />
                </div>
                <div className="absolute top-[650px] right-[300px] md:top-[100px] md:right-[150px]">
                    <img src="https://www.programming-hero.com/banner/js.svg" className="js w-[200px]" alt="React logo" />
                </div>
                <div className="absolute top-[450px] left-[650px]">
                    <img src="https://www.programming-hero.com/banner/tailwind.svg" className="tailwind w-[200px]" alt="React logo" />
                </div>

            </div>
        </div>
    );
};

export default Hero;