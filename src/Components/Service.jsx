// import React from "react";
// // import Img2 from "../../assets/coffee2.png";
// import Img2 from '../../public/img2.jpg';
// const ServicesData = [
//   {
//     id: 1,
//     img: Img2,
//     name: "WEB DESIGN",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
//     aosDelay: "100",
//   },
//   {
//     id: 2,
//     img: Img2,
//     name: "DEVELOPMENT",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
//     aosDelay: "300",
//   },
  
//   {
//     id: 3,
//     img: Img2,
//     name: "DIGITAL MARKETING",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
//     aosDelay: "500",
//   },
// ];
// const Services = () => {
//   return (
//     <>
   
//       <div className="py-10  ">
//         <div className="container ">
//           {/* Heading section  */}
//           <div className="text-center mb-20">
//             <h1 className="text-4xl font-bold font-cursive text-black">
//             SERVICE 
//             </h1>
//           </div>

//           {/* Services Card section  */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
//             {ServicesData.map((service) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={service.aosDelay}
//                 className="rounded-2xl bg-white hover:bg-primary hover:text-black relative shadow-xl  
//                 duration-high group max-w-[300px]"
//               >
//                 <div className="h-[122px]">
//                   <img
//                     src={service.img}
//                     alt=""
//                     className="max-w-[200px] block mx-auto transform -translate-y-14
//                   group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full mt-2"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <div className="w-full "></div>
//                   <h1 className="text-xl font-bold">{service.name}</h1>
//                   <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             ))}

// <div>
//                 <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 bg-black
//                  duration-200  py-2 px-4 rounded-full text-white hover:text-black hover:bg-white justify-center items-center">
//                   View All
//                 </button>
//               </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;




// import React from 'react';

// const Service = () => {
//   return (
//     <div className="container mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="col-span-1 md:col-span-1 lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
//           <div className="service-item relative bg-white rounded-lg shadow-md p-6">
//             <div className="icon text-4xl text-blue-500">
//               <i className="bi bi-activity"></i>
//             </div>
//             <a href="service-details.html" className="stretched-link block mt-2">
//               <h3 className="text-xl font-semibold">Nesciunt Mete</h3>
//             </a>
//             <p className="mt-2 text-gray-600">Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
//           </div>
//         </div>
//         <div className="col-span-1 md:col-span-1 lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
//           <div className="service-item relative bg-white rounded-lg shadow-md p-6">
//             <div className="icon text-4xl text-blue-500">
//               <i className="bi bi-broadcast"></i>
//             </div>
//             <a href="service-details.html" className="stretched-link block mt-2">
//               <h3 className="text-xl font-semibold">Eosle Commodi</h3>
//             </a>
//             <p className="mt-2 text-gray-600">Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
//           </div>
//         </div>
//         <div className="col-span-1 md:col-span-1 lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
//           <div className="service-item relative bg-white rounded-lg shadow-md p-6">
//             <div className="icon text-4xl text-blue-500">
//               <i className="bi bi-easel"></i>
//             </div>
//             <a href="service-details.html" className="stretched-link block mt-2">
//               <h3 className="text-xl font-semibold">Ledo Markt</h3>
//             </a>
//             <p className="mt-2 text-gray-600">Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
//           </div>
//         </div>
//         <div className="col-span-1 md:col-span-1 lg:col-span-1" data-aos="fade-up" data-aos-delay="400">
//           <div className="service-item relative bg-white rounded-lg shadow-md p-6">
//             <div className="icon text-4xl text-blue-500">
//               <i className="bi bi-bounding-box-circles"></i>
//             </div>
//             <a href="service-details.html" className="stretched-link block mt-2">
//               <h3 className="text-xl font-semibold">Asperiores Commodit</h3>
//             </a>
//             <p className="mt-2 text-gray-600">Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
//           </div>
//         </div>
//         <div className="col-span-1 md:col-span-1 lg:col-span-1" data-aos="fade-up" data-aos-delay="500">
//           <div className="service-item relative bg-white rounded-lg shadow-md p-6">
//             <div className="icon text-4xl text-blue-500">
//               <i className="bi bi-calendar4-week"></i>
//             </div>
//             <a href="service-details.html" className="stretched-link block mt-2">
//               <h3 className="text-xl font-semibold">Velit Doloremque</h3>
//             </a>
//             <p className="mt-2 text-gray-600">Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
//           </div>
//         </div>
//         <div className="col-span-1 md:col-span-1 lg:col-span-1" data-aos="fade-up" data-aos-delay="600">
//           <div className="service-item relative bg-white rounded-lg shadow-md p-6">
//             <div className="icon text-4xl text-blue-500">
//               <i className="bi bi-chat-square-text"></i>
//             </div>
//             <a href="service-details.html" className="stretched-link block mt-2">
//               <h3 className="text-xl font-semibold">Dolori Architecto</h3>
//             </a>
//             <p className="mt-2 text-gray-600">Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Service;




import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Img2 from "../../public/img2.jpg"; // Make sure the path to your image is correct

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "WEB DESIGN",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "DEVELOPMENT",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "DIGITAL MARKETING",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-black">
              SERVICE
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-black relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full mt-2"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

            <div>
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 bg-black duration-200 py-2 px-4 rounded-full text-white hover:text-black hover:bg-white justify-center items-center">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;


















