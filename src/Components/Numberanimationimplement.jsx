
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaRegSmile } from "react-icons/fa";
const AnimatedNumber = ({ number }) => {
    const { num } = useSpring({
        from: { num: 0 },
        num: number,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10, duration: 20000 }, 
      });
      

  return <animated.div>{num.to(n => n.toFixed(0))}</animated.div>;
};

const Numberanimationimplement = () => {
  return (
    <div className="flex flex-wrap max-w-screen-xl lg:mx-20 mx-5">
  
      <div className="w-full sm:w-1/2 p-6">
        <h1 className="text-xl  mb-5 sm:text-xl lg:text-3xl font-bold" style={{ fontFamily: 'PTSerif-Bold' }}>
        SYSTAIO: Leading IT Solutions and Innovation in Dhanbad 
        </h1>
        <p className="text-sm">
        SystAIO Technologies, a premier IT solutions provider based in Dhanbad, specializes in cutting-edge software development, artificial intelligence, cloud computing, and IT consulting services. Renowned for delivering tailored, scalable, and cost-effective solutions, we empower businesses of all sizes to maximize the benefits of technology, streamline operations, and achieve sustainable growth. With a commitment to innovation and excellence, SystAIO Technologies is the trusted choice for IT services in Dhanbad and beyond.
        </p>
      </div>

  
      <div className="w-full sm:w-1/2 p-6 flex flex-col gap-6 items-center">
        <div>
       
    
        <div className='flex text-3xl mt-4 font-bold'>
        <FaRegSmile className='text-yellow-500 mt-1 mr-2' />
        <AnimatedNumber number={432}  />
      
        </div>
        <h3 className='text-base    '>Happy Clients <span className='text-sm'>consequatur que</span></h3>
        </div>

        
        <div>

        <div className='flex text-3xl mt-4 font-bold'>
        <FaRegSmile className='text-yellow-500 mt-1 mr-2' />
        
          <AnimatedNumber number={521} />
          
        </div>
        <h3 className='text-base    '>Happy  Projects <span className='text-sm'>consequatur que</span></h3>
        </div>

        <div>
        <div className='flex text-3xl mt-4 font-bold'>
        <FaRegSmile className='text-yellow-500 mt-1 mr-2' />
          <AnimatedNumber number={1453} />
        </div>
        <h3 className='text-base    '>Hard Workers <span className='text-sm'>consequatur que</span></h3>
        </div>


      
      </div>
    </div>
  );
};

export default Numberanimationimplement;
