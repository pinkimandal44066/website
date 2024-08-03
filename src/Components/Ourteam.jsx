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
              <p style={{ fontFamily: 'PTSerif-Bold' }} 
                className="font-unison text-black lg:text-[11vw] md:text-[12vw] 
              sm:text-[12vw] text-5xl opacity-45"
              >
                OUR
              </p>
            </div>
            <div>
              <p
                className="font-monda text-black lg:font-light lg:text-base md:text-sm sm:text-xs text-[10px] 
                font-bold mt-10
              lg:w-[38vw] w-[60vw] md:w-[45vw]  leading-relaxed tracking-wider lg:mt-5 md:mt-4 sm:mt-3"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita officiis placeat nesciunt, ea velit doloribus
                molestiae, maiores soluta id ullam fugiat commodi! Nostrum quasi
                quo earum? Aut expedita minus tempora.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:items-start items-center lg:ml-44 justify-start  mt-1 ">
            <p style={{ fontFamily: 'PTSerif-Bold' }} className="font-unison text-white lg:text-9xl md:text-8xl sm:text-7xl text-5xl opacity-90
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
              <img src="https://e1.pxfuel.com/desktop-wallpaper/789/283/desktop-wallpaper-jash-khan-kartik-aaryan-iphone-thumbnail.jpg" alt="" />
                {/* <img src={logo}  className=""/> */}
                {/* <img src={nature } alt=""/> */}
                {/* <img src="https://e1.pxfuel.com/desktop-wallpaper/34/305/desktop-wallpaper-kartik-aaryan.jpg" alt="" /> */}
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://e0.pxfuel.com/wallpapers/728/174/desktop-wallpaper-kartik-aaryan-expressions-emotional-thumbnail.jpg" alt="" />
                {/* <img src={nature } /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/311/933/desktop-wallpaper-kartik-aaryan-bollywood-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/616/1020/desktop-wallpaper-kartik-aaryan-kartik-aaryan-hero-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/614/873/desktop-wallpaper-kartik-aaryan-actor-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/862/532/desktop-wallpaper-kartik-aaryan-white-jacket-smart-attitude-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
              <img src="https://e0.pxfuel.com/wallpapers/179/642/desktop-wallpaper-kartik-aaryan-yellow-background-fashion-hoot-thumbnail.jpg" alt="" />
                {/* <img src={nature } /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e1.pxfuel.com/desktop-wallpaper/789/283/desktop-wallpaper-jash-khan-kartik-aaryan-iphone-thumbnail.jpg" alt="" />
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
              <img src="https://e1.pxfuel.com/desktop-wallpaper/789/283/desktop-wallpaper-jash-khan-kartik-aaryan-iphone-thumbnail.jpg" alt="" />
              {/* <img src="https://e1.pxfuel.com/desktop-wallpaper/34/305/desktop-wallpaper-kartik-aaryan.jpg" alt="" /> */}
                {/* <img src={nature } /> */}
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/728/174/desktop-wallpaper-kartik-aaryan-expressions-emotional-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/311/933/desktop-wallpaper-kartik-aaryan-bollywood-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/616/1020/desktop-wallpaper-kartik-aaryan-kartik-aaryan-hero-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/614/873/desktop-wallpaper-kartik-aaryan-actor-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {/* <img src={nature } /> */}
                <img src="https://e0.pxfuel.com/wallpapers/862/532/desktop-wallpaper-kartik-aaryan-white-jacket-smart-attitude-thumbnail.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://e0.pxfuel.com/wallpapers/179/642/desktop-wallpaper-kartik-aaryan-yellow-background-fashion-hoot-thumbnail.jpg" alt="" />
                {/* <img src={nature } /> */}
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
