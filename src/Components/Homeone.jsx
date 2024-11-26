import React from "react";
import HomeTop from "../Components/HomeTop";
import HomeSecond from "./HomeSecond";
import Services from "./Service";
import Homefive from "./Homefive";
import Swiperslider from "../Components/Swiperslider";
import Star from "../Components/Star";
import Numberanimationimplement from "./Numberanimationimplement";
const Homeone = () => {
  return (
    <div>
      <HomeTop />
      <HomeSecond />
      <Services />
      <Homefive />
      <Swiperslider />
      <Star />
      <Numberanimationimplement />
    </div>
  );
};

export default Homeone;
