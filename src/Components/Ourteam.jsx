import { useEffect, useRef } from "react";

import logo from "../../public/Systaiologo.png";
import nature from '../../public/nature-2.jpg';
import "./Ourteam.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectCreative } from "swiper/modules";

const Aboutus = () => {
  const firstSwiperRef = useRef(null);
  const secondSwiperRef = useRef(null);

  useEffect(() => {
    if (firstSwiperRef.current && secondSwiperRef.current) {
      firstSwiperRef.current.swiper.on("slideChange", () => {
        const activeIndex = firstSwiperRef.current.swiper.activeIndex;
        secondSwiperRef.current.swiper.slideTo(activeIndex);
      });
    }
  }, []);

  return (
    <>
      <div
        className=" bg-gradient-to-b from-white via-black
       to-white mt-10 rounded-tl-[90px] text-2xl rounded-tr-[90px]"
      >
        <div className="max-w-screen-xl lg:mx-auto mx-5">
          {/* our team */}

          <div className="flex justify-start items-start lg:mt-16 md:mt-16 sm:mt-16 mt-7 ">
            <div>
              <p
                className="font-unison text-white lg:text-[11vw] md:text-[12vw] 
              sm:text-[12vw] text-5xl opacity-45"
              >
                OUR
              </p>
            </div>
            <div>
              <p
                className="font-monda text-white font-light lg:text-base md:text-sm sm:text-xs text-[6px] 
              lg:w-[38vw] w-[45vw] md:w-[45vw] opacity-90 leading-relaxed tracking-wider lg:mt-5 md:mt-4 sm:mt-3"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita officiis placeat nesciunt, ea velit doloribus
                molestiae, maiores soluta id ullam fugiat commodi! Nostrum quasi
                quo earum? Aut expedita minus tempora.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:items-start items-center lg:ml-44 justify-start  mt-1 ">
            <p className="font-unison text-white lg:text-9xl md:text-8xl sm:text-7xl text-5xl opacity-90
            ">
              TEAM
            </p>
            {/* <img className="lg:w-[35vw] md:w-[40vw] sm:w-[40vw] w-[60vw]" /> */}
          </div>
        </div>

        <div className="lg:mt-32">
          <div id="first" className="mt-24 lg:block md:block hidden ">
            <Swiper
              ref={firstSwiperRef}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              //   modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className=" bg-black">
           
                {/* <img src={logo}  className=""/> */}
                <img src={nature } alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            id="second"
            className="lg:ml-[40%] md:ml-[30%] md:-mt-[43%] -mt-9 ml-6 lg:-mt-[34%]"
          >
            <Swiper
              ref={secondSwiperRef}
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative]}
              className="custom-swiper"
            >
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nature } />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutus;