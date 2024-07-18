// import React from 'react'
// import { useSpring, animated } from 'react-spring';

// const AnimatedNumber = ({ number }) => {
//   const { num } = useSpring({
//     from: { num: 0 },
//     num: number,
//     delay: 200,
//     config: { mass: 1, tension: 20, friction: 10 },
//   });

//   return <animated.div>{num.to(n => n.toFixed(0))}</animated.div>;
// };
// const Numberanimationimplement = () => {
//   return (
//     <>


















// <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 
//             sm:order-1 ">
//               <h1
//                style={{ fontFamily: 'PTSerif-Bold' }}
//                 className="text-5xl sm:text-6xl lg:text-7xl font-bold  lg:-mt-0 md:-mt-0 -mt-8 sm:-mt-10"
//               >

//           ABOUT US {" "}
          
              
//                <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo, magni enim nostrum quos non et numquam ullam facilis debitis soluta quasi ducimus voluptates. Accusamus quasi officiis consequatur in temporibus?
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti reprehenderit ex, eos ea dolorem velit eveniet autem laboriosam asperiores fugit tenetur unde ducimus. Iste sed laudantium quo praesentium commodi.</p>
//               </h1>
             
//             </div>


//  <div   className="w-full  sm:w-[450px] mx-auto lg:mt-10 md:mt-10 sm:mt-0 mt-6 rounded-full">
    

//         <div>
//       <div>
//         <h3>Happy Clients</h3>
//         <AnimatedNumber number={232} />
//       </div>
//       <div>
//         <h3>Projects</h3>
//         <AnimatedNumber number={521} />
//       </div>
//       <div>
//         <h3>Hours Of Support</h3>
//         <AnimatedNumber number={1453} />
//       </div>
//       <div>
//         <h3>Hard Workers</h3>
//         <AnimatedNumber number={32} />
//       </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Numberanimationimplement





















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
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold" style={{ fontFamily: 'PTSerif-Bold' }}>
          ABCDE AB
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo, magni enim nostrum quos non et numquam
          ullam facilis debitis soluta quasi ducimus voluptates. Accusamus quasi officiis consequatur in temporibus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti reprehenderit ex, eos ea dolorem
          velit eveniet autem laboriosam asperiores fugit tenetur unde ducimus. Iste sed laudantium quo praesentium
          commodi.
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
