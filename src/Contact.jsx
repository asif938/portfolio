// import React from 'react';
// import Lottie from 'lottie-react';
// import contact from './assets/contact2.json';
// import Swal from 'sweetalert2';
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa";

// const Contact = () => {
//     const onSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);

//         formData.append("access_key", "ed31fac3-70cf-4736-a6db-4c26478d0144");

//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);

//         const res = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: json
//         }).then((res) => res.json());

//         if (res.success) {
//             console.log("Success", res);
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message Sent Successfully !",
//                 icon: "success"
//             });
//         }else{
//             console.log("Error", res);
//             Swal.fire({
//                 title: "Error!",
//                 text: "Something went wrong, please try again later.",
//                 icon: "error"
//             });
//         }
//     };

//     return (
//         <div className='max-w-[420px] lg:max-w-7xl mx-auto mt-20 mb-32'>
//             <h2 className="text-4xl font-bold text-center">Let's Work Together</h2>
//             <div className='mt- flex flex-col md:flex-row items-center justify-center md:justify-evenly'>
//                 <div className='flex flex-col items-center'>
//                     <Lottie className='w-[400px] mx-auto' animationData={contact}></Lottie>
//                     <div className='space-y-4'>
//                         <div className='border-2 py-2 px-16 rounded-md'>
//                             <div className='flex items-center gap-4'>
//                                 <FaPhoneAlt className='text-orange-400 text-2xl'/>
//                                 <p className='text-lg'>Call Me</p>
//                             </div>
//                             <p className='font-semibold text-lg'>+8801518984730</p>
//                         </div>
//                         <div className='border-2 py-2 px-16 rounded-md'>
//                             <div className='flex items-center gap-4'>
//                                 <MdEmail className='text-purple-500 text-2xl' />
//                                 <p className='text-lg'>Email Me</p>
//                             </div>
//                             <p className='text-lg font-semibold'>asifcse5581@gmail.com</p>
//                         </div>
//                         <div className='border-2 py-2 px-16 rounded-md'>
//                             <div className='flex items-center gap-4'>
//                                 <FaLocationDot className='text-red-500 text-2xl' />
//                                 <p className='text-lg'>Address</p>
//                             </div>
//                             <p className='font-semibold text-lg'>Ashulia, Savar, Dhaka</p>
//                         </div>
//                     </div>

//                 </div>
//                 <div className='p-5 mt-6 md:p-10 rounded-xl'>
//                     <form className='space-y-8 w-[380px] lg:w-[430px]' action="" onSubmit={onSubmit}>
//                         {/* <h1 className='text-4xl font-bold mb-10 text-center'>Contact Me</h1> */}
//                         <div>
//                             <label className='text-xl' htmlFor="name">Name</label>
//                             <input type="text" placeholder="Enter Your Name" name='name' className="border-2 px-4 py-3 w-full mt-2 outline-none border-orange-300 rounded" />
//                         </div>
//                         <div>
//                             <label className='text-xl' htmlFor="email">Email</label>
//                             <input type="email" placeholder="Enter Your Email" name='email' className="border-2 px-4 py-3 w-full mt-2 outline-none border-orange-300 rounded" />
//                         </div>
//                         <div className='mt-5'>
//                             <label htmlFor="message">Massage</label>
//                             <textarea className="textarea textarea-bordered border-2 px-4 py-3 w-full mt-2 h-36 outline-none border-orange-300 rounded" placeholder="Write Your Message" name='message'></textarea>
//                         </div>
//                         <button type='submit' className='border-2 px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-orange-400  text-white text-lg font-semibold'>Send Message</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;


