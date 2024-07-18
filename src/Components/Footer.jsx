// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
      
//       <div className="min-h-screen flex justify-end items-end">
//       <footer className="w-full     bg-blue-300  min-h-100px px-10 py-20 flex flex-col items-center relative">
//         <div className="waves absolute w-full  ">
//           <div className="wave" id="wave1"></div>
//           <div className="wave" id="wave2"></div>
//           <div className="wave" id="wave3"></div>
//           <div className="wave" id="wave4"></div>
//         </div>

//       <ul className="flex flex-wrap justify-center items-center text-black">
//           <li className="list-none">
//             <a href="#" className=" text-lg mx-4 hover:opacity-100 transition duration-500">Home</a>
//           </li>
//           <li className="list-none">
//             <a href="#" className="text-lg mx-4 hover:opacity-100 transition duration-500">About</a>
//           </li>
//           <li className="list-none">
//             <a href="#" className=" text-lg mx-4 hover:opacity-100 transition duration-500">Services</a>
//           </li>
//           <li className="list-none">
//             <a href="#" className=" text-lg mx-4 hover:opacity-100 transition duration-500">Team</a>
//           </li>
//           <li className="list-none">
//             <a href="#" className=" text-lg mx-4 hover:opacity-100 transition duration-500">Contact</a>
//           </li>
//         </ul>
//         <p className=" text-sm mt-15 mb-10">©2024 Systaio | All Rights Reserved</p>
//       </footer>
//       <style jsx>{`
//         .wave {
//           position: absolute;
//           top: -100px;
//           left: 0;
//           width: 100%;
//           height: 100px;
//           background-image: url("https://i.ibb.co/wQZVxxk/wave.png");
//           background-size: 1000px 100px;
//         }

//         #wave1 {
//           z-index: 1000;
//           opacity: 1;
//           bottom: 0;
//           animation: animateWaves 4s linear infinite;
//         }

//         #wave2 {
//           z-index: 999;
//           opacity: 0.5;
//           bottom: 10px;
//           animation: animateWaves 4s linear infinite;
//         }

//         #wave3 {
//           z-index: 1000;
//           opacity: 0.2;
//           bottom: 15px;
//           animation: animateWaves 3s linear infinite;
//         }

//         #wave4 {
//           z-index: 999;
//           opacity: 0.7;
//           bottom: 20px;
//           animation: animateWaves 3s linear infinite;
//         }

//         @keyframes animateWaves {
//           0% {
//             background-position-x: 1000px;
//           }
//           100% {
//             background-position-x: 0;
//           }
//         }
//       `}</style>
//     </div>
//     </div>
//   )
// }

// export default Footer


























// import React from 'react'
// import logo from '../../public/Systaiologo.png';
// import './Footer.css';
// const Footer = () => {
//   return (

//       <body >
//     <footer className=''>

//     <div className="waves absolute w-full">
//         <div className="wave" id="wave1"></div>
//         <div className="wave" id="wave2"></div>
//         <div className="wave" id="wave3"></div>
//         <div className="wave" id="wave4"></div>
//       </div>
//    <div className='main'>
//    <div className="row">
            
//             <div className="col">
           
//             <img src={logo} alt='' />
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias architecto tempore, veritatis nihil ullam tempora possimus nobis rem porro, at perspiciatis nesciunt maiores!</p>
//             </div>

           
//             <div className="col">
//                 <h3>Office <div className="underline"><span></span></div></h3>
//                 <p>Second floor, City Centre, </p>
//                 <p> 0413, Luby Circular Rd,</p>
//                 <p>Bartand, Kasturba Nagar,</p>
//                 <p>   Dhanbad, Jharkhand 826001</p>
//                 <p className="email-id">abcdefgh@.com</p>
              
//                 <h4><a href="tel:+09109308788991">+091-093087 88991</a></h4>


//             </div>

          
//             <div className="col">
//                 <h3>Links <div className="underline"><span></span></div></h3>
//                 <ul>
//                     <li><a href="#">Home</a></li>
                 
//                     <li><a href="#">About Us</a></li>
//                     <li><a href="#">Services</a></li>
//                     <li><a href="#">  Products</a></li>
//                     <li><a href="#">Contact us</a></li>
//                 </ul>
//             </div>

//             <div className="col">
//                 <h3>Email <div className="underline"><span></span></div></h3>
//                 <form>
//                     <i className="far fa-envelope"></i>
//                     <input type='email' placeholder='Enter your email id' required />
                   
//                     <button type="submit"><i className="fas fa-arrow-right"></i></button>
//                 </form>

//                 <div  className=' text-4xl space-x-6 mx-6 cursor-pointer'>
                 
//                     <i className="ri-facebook-circle-line"></i>
              
//                     <i className="ri-twitter-fill"></i>
                    
//                     <i className="ri-whatsapp-line"></i>
                
//                     <i className="ri-linkedin-box-fill"></i>
//                 </div>
//             </div>
            
//         </div>
//         <hr />
//         <p className="text-sm mt-15 mb-10 flex items-center justify-center">©2024 Systaio | All Rights Reserved</p>

   
//    </div>


//    <style jsx>{`
//         .wave {
//           position: absolute;
//           top: -100px; /* Adjust this value based on your design */
//           left: 0;
//           width: 100%;
//           height: 100px;
//           background-image: url("https://img.freepik.com/premium-vector/curved-calligraphy-background-wallpaper-sea-calligraphy-curved-line-dividing-horizon_165079-4104.jpg?uid=R143418407&ga=GA1.1.2000051094.1716005427&semt=ais_user-customized");
//           background-size: 1000px 100px;
//         }

//         #wave1 {
//           z-index: 1000;
//           opacity: 1;
//           bottom: 0;
//           animation: animateWaves 4s linear infinite;
//         }

//         #wave2 {
//           z-index: 999;
//           opacity: 0.5;
//           bottom: 10px;
//           animation: animateWaves 4s linear infinite;
//         }

//         #wave3 {
//           z-index: 1000;
//           opacity: 0.2;
//           bottom: 15px;
//           animation: animateWaves 3s linear infinite;
//         }

//         #wave4 {
//           z-index: 999;
//           opacity: 0.7;
//           bottom: 20px;
//           animation: animateWaves 3s linear infinite;
//         }

//         @keyframes animateWaves {
//           0% {
//             background-position-x: 1000px;
//           }
//           100% {
//             background-position-x: 0;
//           }
//         }
//       `}</style>
//     </footer>

// </body>
   
//   )
// }

// export default Footer












import React from 'react';

import logo from '../../public/Systaiologo.png';
const Footer = () => {
  return (
    // <footer className=" from-black via-black
    //    to-white relative">
    <footer className=" bg-gradient-to-b from-black via-white
       to-black mt-20
     relative">

      {/* Waves */}
      <div className="waves absolute w-full">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>





      {/* Content */}
      <div className="container mx-auto py-10 px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1">
            <img src={logo} alt="Logo" className="mb-4" />
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias architecto tempore, veritatis nihil ullam tempora possimus nobis rem porro, at perspiciatis nesciunt maiores!
            </p>
          </div>

          {/* Office Address and Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3">Office</h3>
            <address className="text-sm text-gray-700">
              Second floor, City Centre,<br />
              0413, Luby Circular Rd,<br />
              Bartand, Kasturba Nagar,<br />
              Dhanbad, Jharkhand 826001<br />
              <span className="email-id">abcdefgh@.com</span><br />
              <a href="tel:+09109308788991">+091-093087 88991</a>
            </address>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="text-sm text-gray-700">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          {/* Email Subscription and Social Icons */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-3">Email</h3>
            <form className="flex mb-4">
              <input type="email" placeholder="Enter your email id"
               required className="px-4 py-2 rounded-l border-gray-300
               " />
              <button type="submit" className="px-4 py-2 bg-black text-white rounded-r
              ">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="text-4xl space-x-6">
              <i className="ri-facebook-circle-line"></i>
              <i className="ri-twitter-fill"></i>
              <i className="ri-whatsapp-line"></i>
              <i className="ri-linkedin-box-fill"></i>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="my-6 border-gray-400" />
        <p className="text-sm text-black font-bold text-center">©2024 Systaio | All Rights Reserved</p>
      </div>

      {/* Wave Animation CSS */}
      <style jsx >{`
        .wave {
          position: absolute;
          top: -100px; /* Adjust this value based on your design */
          left: 0;
          width: 100%;
          height: 100px;
          background-image: url("https://img.freepik.com/premium-vector/curved-calligraphy-background-wallpaper-sea-calligraphy-curved-line-dividing-horizon_165079-4104.jpg?uid=R143418407&ga=GA1.1.2000051094.1716005427&semt=ais_user-customized");
          background-size: 1000px 100px;
        }

        #wave1 {
          z-index: 1000;
          opacity: 1;
          bottom: 0;
          animation: animateWaves 4s linear infinite;
        }

        #wave2 {
          z-index: 999;
          opacity: 0.5;
          bottom: 10px;
          animation: animateWaves 4s linear infinite;
        }

        #wave3 {
          z-index: 1000;
          opacity: 0.2;
          bottom: 15px;
          animation: animateWaves 3s linear infinite;
        }

        #wave4 {
          z-index: 999;
          opacity: 0.7;
          bottom: 20px;
          animation: animateWaves 3s linear infinite;
        }

        @keyframes animateWaves {
          0% {
            background-position-x: 1000px;
          }
          100% {
            background-position-x: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;








