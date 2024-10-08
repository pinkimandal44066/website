import React from 'react'
// import home from '../../public/coffee2.png';
// import img1 from '../../public/img1.jpg';
// import img2 from '../../public/img2.jpg';
import img3 from '../../public/img3.jpg';

import { NavLink } from 'react-router-dom';
const HomeSecond = () => {
  return (
    <div >
    <div className="bg-brandDark flex justify-center items-center 
     bg-black md:-mt-0 lg:-mt-0 sm:-mt-60 -mt-0
     text-white ">
        <div className="container pb-8 sm:pb-0 max-w-screen-xl lg:mx-32 mx-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
          
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 
            sm:order-1 ">
              <h1
                data-aos="fade-up"
                data-aos-once="true" style={{ fontFamily: 'PTSerif-Bold' }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold  lg:-mt-0 md:-mt-0 -mt-8 sm:-mt-10"
              >

          ABOUT US {" "}
          {/* <img src={aboutus} alt=''/>  {" "} */}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"style={{ fontFamily: 'PTSerif-Bold' }}
                  // class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive
                  //  text-red-600"
                  className='text-sm'
                >
                  {/* lorem */}
                </span>{" "} 
              
               <p className='text-sm '>SystAIO is one of the leading IT services provider in India. We specializes in information technology consulting so your business’ IT systems and strategies are up-to-date and fit your needs. SystAIO supports your business with the IT consultant services to take your business efficiency to the next level.</p>
              </h1>
              <div>
              <NavLink to="/aboutus">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105
                 duration-200  py-2 px-4 rounded-full text-white  hover:text-black hover:bg-white">
                  View All
                </button>
                </NavLink>
              </div>
            </div>
           
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="-mt-6 flex justify-center items-center relative order-1 sm:order-2     "
            >
              {/* <img
                data-aos-once="true"
                src={img3}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin rounded-full "
              />
               */}


<img
  data-aos-once="true"
  src={img3}
  alt="biryani img"
  className="w-full  sm:w-[450px] mx-auto lg:mt-10 md:mt-10 sm:mt-0 mt-6 rounded-full"
/>

            </div>
          </div>
        </div>
      </div>






    </div>
  )
}

export default HomeSecond
