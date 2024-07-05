import React from 'react'
import home from '../../public/coffee2.png';
const HomeSecond = () => {
  return (
    <div>
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-black bg-gray-600">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                We serve the richest{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive
                   text-yellow-800"
                >
                  Coffee
                </span>{" "}
                in the city
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105
                 duration-200 text-white py-2 px-4 rounded-full text-yellow-800">
                  Coffee And Code
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={home} 
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-black">Hey Coder</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
              >
                {/* <h1 
                style={{font: 'PTSerif-Bold'}}  className="text-black text-4xl">Best Coffee</h1> */}
                <h1 style={{ fontFamily: 'PTSerif-Bold' }} className="text-black text-4xl">
  Best Coffee
</h1>

{/* 
                style={{font: 'PTSerif-Bold'}}  */}
              </div>

              {/* <h1>hello hello</h1> */}
            </div>
          </div>
        </div>
      </div>
<h1 className='mb-80'>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhnnnnnnnnnnnnnnnnnnnnnnn</h1>
    </div>
  )
}

export default HomeSecond
