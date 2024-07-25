import React from 'react'
import HomeTop from '../../Components/HomeTop';
import HomeSecond from '../HomeSecond';
import Services from '../Service';
import Homefive from '../../Components/Homefive';
import Swiperslider from '../Swiperslider';
import Ourteam from '../../Components/Ourteam';
import Star from '../../Components/Star';
import Custome from '../../Components/Custome';
import Numberanimationimplement from '../Numberanimationimplement';
const Home = () => {
  return (
    <div>
    <HomeTop />
    <HomeSecond />
    <Services />
 
    <Homefive />
    <Swiperslider />
    {/* <Ourteam /> */}
    <Star />
    {/* <Custome /> */}
    <Numberanimationimplement />
   
    </div>
  )
}

export default Home
