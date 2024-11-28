import React from "react";
import HomeTop from "../Components/HomeTop";
import HomeSecond from "./HomeSecond";
import Homeservices from "./Homeservices";
import Homefive from "./Homefive";
import Homeproducts from "../Components/homeourproducts";
import Star from "../Components/Star";
import Numberanimationimplement from "./Numberanimationimplement";
const Homeone = () => {
  return (
    <div>
      <HomeTop />
      <HomeSecond />
      <Homeservices />
      <Homefive />
      <Homeproducts />
      <Star />
      <Numberanimationimplement />
    </div>
  );
};

export default Homeone;
