import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Hero from "components/Sections/Hero.js";
import Services from "components/Sections/Services.js";
import About from "components/Sections/About.js";
import Portfolio from "components/Sections/Portfolio.js";
import Contact from "components/Sections/Contact.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


// components


// export default function Landing() {
//   return (
//     <>
//       <Navbar transparent />
//       <main>
//         <Hero />
//         <Services />
        
//         {/* About Section */}
//         <section className="relative py-20" id="about">
//           <div className="container mx-auto px-4">
//             <div className="items-center flex flex-wrap">
//               <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
//                 <div className="md:pr-12">
//                   <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{backgroundColor: '#896bf7'}}>
//                     <i className="fas fa-info-circle text-xl"></i>
//                   </div>
//                   <h3 className="text-3xl font-semibold">About Us</h3>
//                   <p className="mt-4 text-lg leading-relaxed text-gray-600">
//                     We are a creative digital agency passionate about helping businesses grow through innovative design solutions.
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
//                 <img
//                   alt="..."
//                   className="max-w-full rounded-lg shadow-lg"
//                   src="your-about-image.jpg"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Portfolio Section */}
//         <section className="pt-20 pb-48" id="portfolio">
//           {/* Add your portfolio content here */}
//         </section>

//         {/* Contact Section */}
//         <section className="relative block py-24 lg:pt-0" id="contact">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
//                   <div className="flex-auto p-5 lg:p-10">
//                     <h4 className="text-2xl font-semibold">Contact Us</h4>
//                     <p className="leading-relaxed mt-1 mb-4 text-gray-600">
//                       Complete this form and we will get back to you in 24 hours.
//                     </p>
//                     {/* Contact form */}
//                     <div className="relative w-full mb-3 mt-8">
//                       <label
//                         className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                         htmlFor="full-name"
//                       >
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                         placeholder="Full Name"
//                       />
//                     </div>

//                     <div className="relative w-full mb-3">
//                       <label
//                         className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                         htmlFor="email"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                         placeholder="Email"
//                       />
//                     </div>

//                     <div className="relative w-full mb-3">
//                       <label
//                         className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                         htmlFor="message"
//                       >
//                         Message
//                       </label>
//                       <textarea
//                         rows="4"
//                         cols="80"
//                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
//                         placeholder="Type a message..."
//                       />
//                     </div>
//                     <div className="text-center mt-6">
//                       <button
//                         className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                         type="button"
//                       >
//                         Send Message
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }
