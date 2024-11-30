import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
// import './Homeourproducts.css';
import Systaioschoolsoftware from "../../public/Systaio school software.avif";
import Systaiobillingsoftware from "../../public/Systaio billing software.png";
import Systaioerpsoftware from "../../public/Systaio erp software.avif";
import Systaiohospitalmanagementsystem from "../../public/Systaio hospital management system.png";
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <img src={Systaioschoolsoftware} alt="" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Systaiobillingsoftware} alt="" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Systaioerpsoftware} alt="" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Systaiohospitalmanagementsystem}
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Systaioschoolsoftware} alt="" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Systaiobillingsoftware} alt="" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Systaioerpsoftware} alt="" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Systaiohospitalmanagementsystem}
            alt=""
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
