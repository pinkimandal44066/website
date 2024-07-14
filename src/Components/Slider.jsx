import React, { useEffect } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// Initiate Swiper core modules
SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const swiper = new SwiperCore('.swiper', {
      direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Enable clickable pagination bullets
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* Add more slides as needed */}
      </div>
      
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default Slider;
