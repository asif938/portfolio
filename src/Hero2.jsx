import React, { useEffect } from 'react';
import hero from './assets/Hero-img.png';
import cv from './assets/cv(dev).pdf';
import { Typewriter } from 'react-simple-typewriter';

const Hero2 = () => {
    useEffect(() => {
        // Add custom animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(3deg); }
            }
            @keyframes floatReverse {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-15px) rotate(-3deg); }
            }
            @keyframes pulseGlow {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 0.6; transform: scale(1.1); }
            }
            @keyframes spinSlow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes shimmer {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
            }
            @keyframes borderPulse {
                0%, 100% { border-color: rgba(181, 56, 227, 0.3); box-shadow: 0 0 0 0 rgba(181, 56, 227, 0.2); }
                50% { border-color: rgba(181, 56, 227, 0.8); box-shadow: 0 0 20px 5px rgba(181, 56, 227, 0.3); }
            }
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-float { animation: float 6s ease-in-out infinite; }
            .animate-float-delay { animation: floatReverse 7s ease-in-out infinite; }
            .animate-spin-slow { animation: spinSlow 20s linear infinite; }
            .animate-pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }
            .animate-slide-in { animation: slideIn 0.8s ease-out forwards; }
            .gradient-text-shimmer {
                background: linear-gradient(135deg, #B538E3, #FF6B4A, #F59E0B, #B538E3);
                background-size: 300% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: shimmer 3s linear infinite;
            }
            .border-pulse {
                animation: borderPulse 2s ease-in-out infinite;
            }
            @media (max-width: 640px) {
                .mobile-stack { flex-direction: column-reverse; }
                .mobile-center { text-align: center; }
                .mobile-mx-auto { margin-left: auto; margin-right: auto; }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f8f9fa] via-[#ffffff] to-[#f0e6ff] dark:from-[#0a0a0f] dark:via-[#0f0c1f] dark:to-[#1a0b2e]">

            {/* Animated Background Blobs - Light Mode (with dark mode variants) */}
            <div className="absolute top-20 left-[-100px] w-[400px] h-[400px] rounded-full bg-purple-200/40 blur-[80px] animate-pulse-glow dark:bg-purple-600/20 md:block hidden"></div>
            <div className="absolute bottom-20 right-[-50px] w-[350px] h-[350px] rounded-full bg-orange-200/40 blur-[80px] animate-pulse-glow dark:bg-orange-500/20" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-200/30 blur-[70px] animate-pulse-glow dark:bg-cyan-500/10 hidden md:block" style={{ animationDelay: '4s' }}></div>

            {/* Floating Tech Icons - Light Mode (with dark mode variants) */}
            {/* React Logo */}
            <div className="absolute top-[5%] right-[3%] md:top-[10%] md:right-[8%] z-10 animate-float opacity-60 hover:opacity-100 dark:opacity-80 transition duration-500">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-10 h-10 md:w-16 md:h-16 drop-shadow-md dark:drop-shadow-2xl animate-spin-slow"
                    alt="React"
                />
            </div>

            {/* JavaScript Logo */}
            <div className="absolute bottom-[10%] left-[2%] md:bottom-[15%] md:left-[6%] z-10 animate-float-delay opacity-60 hover:opacity-100 dark:opacity-80 transition duration-500">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="w-8 h-8 md:w-14 md:h-14 drop-shadow-md dark:drop-shadow-lg"
                    alt="JavaScript"
                />
            </div>

            {/* Tailwind CSS Logo */}
            <div className="absolute top-[35%] left-[-2%] md:top-[40%] md:left-[3%] z-10 animate-float opacity-50 hover:opacity-100 dark:opacity-70 transition duration-500" style={{ animationDelay: '1.5s' }}>
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                    className="w-7 h-7 md:w-12 md:h-12"
                    alt="Tailwind"
                />
            </div>

            {/* HTML5 Logo */}
            <div className="absolute bottom-[25%] right-[1%] md:bottom-[30%] md:right-[5%] z-10 animate-float-delay opacity-60 hover:opacity-100 dark:opacity-75 transition duration-500" style={{ animationDelay: '0.8s' }}>
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    className="w-8 h-8 md:w-14 md:h-14"
                    alt="HTML5"
                />
            </div>

            {/* Node.js Logo - Desktop only */}
            <div className="absolute top-[75%] left-[85%] hidden lg:block animate-float opacity-40 hover:opacity-100 dark:opacity-60 transition duration-500" style={{ animationDelay: '2.5s' }}>
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-12 h-12"
                    alt="NodeJS"
                />
            </div>

            {/* MongoDB Logo */}
            <div className="absolute top-[20%] left-[85%] hidden md:block animate-float-delay opacity-30 hover:opacity-100 dark:opacity-50 transition duration-500" style={{ animationDelay: '1.2s' }}>
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    className="w-10 h-10"
                    alt="MongoDB"
                />
            </div>

            {/* Security Shield Icon */}
            <div className="absolute top-[12%] left-[8%] hidden sm:block animate-pulse-glow opacity-30 dark:opacity-40">
                <i className="fas fa-shield-haltered text-3xl md:text-4xl text-purple-600 dark:text-purple-400"></i>
            </div>

            {/* Figma Icon */}
            <div className="absolute bottom-[40%] right-[12%] hidden md:block animate-float opacity-40 hover:opacity-100 dark:opacity-50 transition duration-500" style={{ animationDelay: '3s' }}>
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    className="w-8 h-8 md:w-10 md:h-10"
                    alt="Figma"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 min-h-screen flex items-center py-12 md:py-20">
                <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12 lg:gap-16 w-full animate-slide-in">

                    {/* Left Content Section */}
                    <div className="flex-1 text-center md:text-left">
                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm dark:bg-white/5 rounded-full px-4 py-1.5 border border-purple-300/50 dark:border-purple-500/30 mb-5 md:mb-6 mx-auto md:mx-0 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs md:text-sm font-medium tracking-wide text-gray-700 dark:text-gray-300">
                                Available for opportunities
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-space tracking-tight">
                            <span className="text-gray-800 dark:text-white/90">
                                Hey, I am
                            </span>
                            <span className="gradient-text-shimmer block mt-2 md:mt-3">
                                Sayyed Ahmad Asif
                            </span>
                        </h1>

                        {/* Typewriter Section */}
                        <div className="mt-5 md:mt-7">
                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 flex flex-wrap justify-center md:justify-start items-center gap-2">
                                <span>A</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-orange-400 font-bold font-space relative">
                                    <Typewriter
                                        words={['MERN Stack Developer', 'Graphics Designer', 'Full Stack Developer', 'Cyber Security Enthusiast', 'UI/UX Designer']}
                                        loop={true}
                                        cursor={true}
                                        cursorStyle='_'
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1200}
                                    />
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-5 md:mt-7 max-w-2xl mx-auto md:mx-0">
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-poppins">
                                I build modern web applications with <span className="text-purple-600 dark:text-purple-400 font-medium">clean code</span> and
                                <span className="text-orange-600 dark:text-orange-400 font-medium"> scalable architecture</span> using the MERN stack.
                                Passionate about graphics design, backend systems, and <span className="text-cyan-700 dark:text-cyan-400 font-medium">cybersecurity</span>.
                                <span className="hidden sm:inline-block mt-2 md:mt-3 block text-gray-500 dark:text-gray-400 text-sm md:text-base">
                                    ✨ Always learning. Always building. 🚀
                                </span>
                            </p>
                            {/* Mobile extra text */}
                            <p className="sm:hidden text-gray-500 dark:text-gray-400 text-xs mt-2 italic">
                                💻 MERN Stack | 🎨 Design | 🔒 Security Enthusiast
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mt-6 md:mt-8">
                            <a
                                href={cv}
                                download
                                className="group relative px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <i className="fas fa-download"></i>
                                    Download Resume
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            </a>

                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl border border-purple-400 dark:border-purple-500/60 text-gray-700 dark:text-white font-semibold text-sm sm:text-base backdrop-blur-sm hover:bg-purple-50 dark:hover:bg-white/10 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fab fa-github"></i> GitHub
                            </a>

                            <a
                                href="#contact"
                                className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl border border-gray-300 dark:border-white/20 bg-black/5 dark:bg-white/5 text-gray-700 dark:text-white font-medium text-sm sm:text-base hover:bg-purple-100 dark:hover:bg-purple-600/30 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-300 flex items-center gap-2"
                            >
                                <i className="fas fa-paper-plane"></i> Contact
                            </a>
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-6 md:mt-8">
                            {['MERN Stack', 'TypeScript', 'Tailwind CSS', 'Cybersecurity', 'GraphQL'].map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs font-mono border border-purple-300/50 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:shadow-md transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Social Proof / Stats */}
                        <div className="flex gap-6 md:gap-8 justify-center md:justify-start mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 dark:border-white/10">
                            {[
                                { value: '2+', label: 'Years Experience' },
                                { value: '20+', label: 'Projects Completed' },
                                { value: '10+', label: 'Happy Clients' }
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center md:text-left">
                                    <p className="text-gray-800 dark:text-white text-xl md:text-2xl font-bold">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex-1 flex justify-center items-center relative">
                        {/* Animated Glow Effect */}
                        <div className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full blur-3xl animate-pulse-glow bg-gradient-to-r from-purple-300/40 to-orange-300/40 dark:from-purple-600/30 dark:to-orange-500/30"></div>

                        {/* Rotating Border Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow w-[90%] h-[90%] mx-auto border-purple-400/60 dark:border-purple-500/40" style={{ borderRadius: '50%' }}></div>

                        {/* Second Ring */}
                        <div className="absolute inset-0 rounded-full border animate-spin-slow w-[105%] h-[105%] mx-auto border-cyan-400/30 dark:border-cyan-500/20" style={{ borderRadius: '50%', animationDirection: 'reverse', animationDuration: '25s' }}></div>

                        {/* Hero Image */}
                        <div className="relative group">
                            <img
                                className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] object-contain drop-shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-2xl"
                                src={hero}
                                alt="Hero Illustration - Sayyed Ahmad Asif"
                            />

                            {/* <div className="relative z-[1] rounded-[26px] overflow-hidden bg-[#0f1118]">
                                <img src={hero} alt="Sayyed Ahmad Asif" className="block w-full h-auto object-cover" />
                            </div> */}

                            {/* Floating Tech Badge on Image */}
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 md:bottom-5 md:left-5 md:translate-x-0 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 flex gap-2 border border-gray-300 dark:border-white/20 hover:bg-white dark:hover:bg-black/70 hover:shadow-lg transition-all duration-300">
                                <i className="fab fa-react text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm"></i>
                                <i className="fab fa-node-js text-green-700 dark:text-green-500 text-xs sm:text-sm"></i>
                                <i className="fas fa-database text-yellow-700 dark:text-yellow-500 text-xs sm:text-sm"></i>
                                <i className="fab fa-figma text-pink-700 dark:text-pink-500 text-xs sm:text-sm"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden sm:flex flex-col items-center gap-1 opacity-70 dark:opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-gray-600 dark:text-gray-400 text-[10px] md:text-xs tracking-wider">
                    SCROLL DOWN
                </span>
                <i className="fas fa-chevron-down text-purple-600 dark:text-purple-400 text-xs md:text-sm"></i>
            </div>
        </div>
    );
};

export default Hero2;