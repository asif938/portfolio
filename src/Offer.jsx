import React from 'react';
import graphics from './assets/graphics.json';
import web from './assets/web.json';
import application from './assets/Coding.json'
import Lottie from 'lottie-react';

const Offer = () => {
    return (
        <div className='my-24 max-w-[420px] md:max-w-7xl mx-auto '>
            <h2 className="text-4xl mb-16 text-center font-bold">I Can Do For You ..</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 mx-auto'>
                <div className='bg-[#F4F9FF] px-14 pb-8 rounded-2xl max-h-[365px]'>
                    <Lottie className='w-[280px] mx-auto' animationData={application}></Lottie>
                    <h3 className="text-2xl text-center font-semibold">Web Aplication Development</h3>
                </div>
                <div className='bg-[#F7FAF5] px-14 pb-8 rounded-2xl max-h-[365px]'>
                    <Lottie className='w-[280px] mx-auto' animationData={graphics}></Lottie>
                    <h3 className="text-2xl text-center font-semibold">Graphics Design & Branding</h3>
                </div>
                <div className='bg-[#F7F5FA] px-14 pb-8 rounded-2xl max-h-[365px]'>
                    <Lottie className='w-[280px] mx-auto' animationData={web}></Lottie>
                    <h3 className="text-2xl text-center font-semibold">Full Stack Web Development</h3>
                </div>
                {/* #F7F5FA */}
            </div>
        </div>
    );
};

export default Offer;