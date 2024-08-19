
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
        SYSTAIO Company in Dhanbad is an IT and software development firm. The company provides IT services and solutions. It focuses on technology and innovation. SYSTAIO develops software solutions for both local and global clients. The company offers customized software development and IT consulting services. Its mission is to deliver high-quality solutions and ensure customer satisfaction. The team consists of skilled and experienced professionals. SYSTAIO adopts new technologies to support business growth. Its ultimate goal is to maximize the benefit of technology for clients. The company is well-known in Dhanbad for its services.
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
