import React from 'react'
import HomeTop from '../../Components/HomeTop';
import HomeSecond from '../HomeSecond';
import Services from '../Service';
import Homefive from '../../Components/Homefive';
import Swiperslider from '../Swiperslider';
const Home = () => {
  return (
    <div>
    <HomeTop />
    <HomeSecond />
    <Services />
    {/* <Homefive /> */}
  
    <Swiperslider />
    </div>
  )
}

export default Home
