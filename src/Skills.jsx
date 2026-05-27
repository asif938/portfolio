// import React, { useState } from 'react';
// import './App.css'
// import reactLogo from './assets/react.svg';
// import javascript from './assets/JavaScript.svg'
// import html from './assets/HTML5.svg'
// import css from './assets/CSS3.svg'
// import tailwind from './assets/Tailwind CSS.svg'
// import node from './assets/Node.js.svg'
// import express from './assets/Express.svg'
// import mongodb from './assets/MongoDB.svg'



// const Skills = () => {
//     const [activeTab, setActiveTab] = useState('all');

//     const tabClasses = (tab) =>
//         `px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === tab
//             ? 'bg-blue-600 text-white shadow-md'
//             : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
//         }`;

//     const renderContent = () => {
//         switch (activeTab) {
//             case 'frontend':
//                 return (
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto items-center justify-center'>

//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={reactLogo} alt="" />
//                                 <h3 className="text-3xl font-semibold">React</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Modern JavaScript library for building responsive and scalable user interfaces using component-based architecture.</p>
//                             </div>
//                         </div>
//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={javascript} alt="" />
//                                 <h3 className="text-3xl font-semibold">JavaScript</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Core programming language of the web, enabling dynamic functionality, logic, and interactivity in web apps.</p>
//                             </div>
//                         </div>
//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={html} alt="" />
//                                 <h3 className="text-3xl font-semibold">HTML5</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Markup language for structuring content on the web, essential for page layouts and SEO.</p>
//                             </div>
//                         </div>
//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={css} alt="" />
//                                 <h3 className="text-3xl font-semibold">CSS3</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Style sheet language used for designing beautiful, responsive, and animated websites.</p>
//                             </div>
//                         </div>
//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={tailwind} alt="" />
//                                 <h3 className="text-3xl font-semibold">Tailwind CSS</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Utility-first CSS framework for rapidly building custom designs directly in your HTML/JSX.</p>
//                             </div>
//                         </div>


//                     </div>
//                 );
//             case 'backend':
//                 return (
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto items-center justify-center'>

//                         <div className='bg-white p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={node} alt="" />
//                                 <h3 className="text-3xl font-semibold">Node.js</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Server-side runtime environment for building scalable backend services using JavaScript.</p>
//                             </div>
//                         </div>

//                         <div className='bg-white p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={express} alt="" />
//                                 <h3 className="text-3xl font-semibold">Express.js</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Minimal and flexible Node.js web framework used for building RESTful APIs and web applications.</p>
//                             </div>
//                         </div>

//                         <div className='bg-white p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={mongodb} alt="" />
//                                 <h3 className="text-3xl font-semibold">MongoDB</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>NoSQL database for storing JSON-like documents with dynamic schemas and high scalability.</p>
//                             </div>
//                         </div>

//                     </div>
//                 );
//             case 'tools':
//                 return (
//                     <ul className="list-disc pl-5 space-y-2">
//                         <li>Git, GitHub</li>
//                         <li>VS Code, Postman</li>
//                     </ul>
//                 );
//             default:
//                 return (
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto items-center justify-center'>

//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={reactLogo} alt="" />
//                                 <h3 className="text-3xl font-semibold">React</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Modern JavaScript library for building responsive and scalable user interfaces using component-based architecture.</p>
//                             </div>
//                         </div>
//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={javascript} alt="" />
//                                 <h3 className="text-3xl font-semibold">JavaScript</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Core programming language of the web, enabling dynamic functionality, logic, and interactivity in web apps.</p>
//                             </div>
//                         </div>
//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={html} alt="" />
//                                 <h3 className="text-3xl font-semibold">HTML5</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Markup language for structuring content on the web, essential for page layouts and SEO.</p>
//                             </div>
//                         </div>
//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={css} alt="" />
//                                 <h3 className="text-3xl font-semibold">CSS3</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Style sheet language used for designing beautiful, responsive, and animated websites.</p>
//                             </div>
//                         </div>
//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={tailwind} alt="" />
//                                 <h3 className="text-3xl font-semibold">Tailwind CSS</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Utility-first CSS framework for rapidly building custom designs directly in your HTML/JSX.</p>
//                             </div>
//                         </div>

//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={node} alt="" />
//                                 <h3 className="text-3xl font-semibold">Node.js</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Server-side runtime environment for building scalable backend services using JavaScript.</p>
//                             </div>
//                         </div>

//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={express} alt="" />
//                                 <h3 className="text-3xl font-semibold">Express.js</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>Minimal and flexible Node.js web framework used for building RESTful APIs and web applications.</p>
//                             </div>
//                         </div>

//                         <div className='bg-[#f6fcff] p-6 rounded-lg shadow h-[180px]'>
//                             <div className='flex items-center gap-5'>
//                                 <img className='w-14' src={mongodb} alt="" />
//                                 <h3 className="text-3xl font-semibold">MongoDB</h3>
//                             </div>
//                             <div className='mt-2'>
//                                 <p>NoSQL database for storing JSON-like documents with dynamic schemas and high scalability.</p>
//                             </div>
//                         </div>



//                     </div>
//                 );
//         }
//     };

//     return (
//         <div className='bg-[#f0f2f5] my-20 min-h-[100vh]'>
//             <div className="max-w-7xl mx-auto px-4 py-12">
//                 <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//                     My <span className="text-blue-600">Skills</span>
//                 </h2>

//                 {/* Tab buttons */}
//                 <div className="flex flex-wrap justify-center gap-4 mb-10">
//                     <button onClick={() => setActiveTab('all')} className={tabClasses('all')}>
//                         All
//                     </button>
//                     <button onClick={() => setActiveTab('frontend')} className={tabClasses('frontend')}>
//                         FrontEnd
//                     </button>
//                     <button onClick={() => setActiveTab('backend')} className={tabClasses('backend')}>
//                         BackEnd
//                     </button>
//                     <button onClick={() => setActiveTab('tools')} className={tabClasses('tools')}>
//                         Tools
//                     </button>
//                 </div>

//                 {/* Skill content */}
//                 <div className="rounded-lg p-6 max-w-7xl mx-auto text-gray-800">
//                     {/* <p className="text-lg mb-4">Here are some of my skills:</p> */}
//                     {renderContent()}

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;

