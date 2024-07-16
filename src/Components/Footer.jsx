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


























import React from 'react'
import logo from '../../public/Systaiologo.png';
import './Footer.css';
const Footer = () => {
  return (

      <body>
    <footer>
   <div className='main'>
   <div className="row">
            
            <div className="col">
           
            <img src={logo} alt='' />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias architecto tempore, veritatis nihil ullam tempora possimus nobis rem porro, at perspiciatis nesciunt maiores!</p>
            </div>

           
            <div className="col">
                <h3>Office <div className="underline"><span></span></div></h3>
                <p>Second floor, City Centre, </p>
                <p> 0413, Luby Circular Rd,</p>
                <p>Bartand, Kasturba Nagar,</p>
                <p>   Dhanbad, Jharkhand 826001</p>
                <p className="email-id">abcdefgh@.com</p>
              
                <h4><a href="tel:+09109308788991">+091-093087 88991</a></h4>


            </div>

          
            <div className="col">
                <h3>Links <div className="underline"><span></span></div></h3>
                <ul>
                    <li><a href="#">Home</a></li>
                 
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">  Products</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>

            <div className="col">
                <h3>Email <div className="underline"><span></span></div></h3>
                <form>
                    <i className="far fa-envelope"></i>
                    <input type='email' placeholder='Enter your email id' required />
                   
                    <button type="submit"><i className="fas fa-arrow-right"></i></button>
                </form>

                <div  className=' text-4xl space-x-6 mx-6'>
                 
                    <i className="ri-facebook-circle-line"></i>
              
                    <i className="ri-twitter-fill"></i>
                    
                    <i className="ri-whatsapp-line"></i>
                
                    <i className="ri-linkedin-box-fill"></i>
                </div>
            </div>
            
        </div>
        <hr />
        <p className="text-sm mt-15 mb-10 flex items-center justify-center">©2024 Systaio | All Rights Reserved</p>

   
   </div>
    </footer>

</body>
   
  )
}

export default Footer















