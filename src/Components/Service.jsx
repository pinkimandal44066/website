import React from "react";
// import Img2 from "../../assets/coffee2.png";
import Img2 from '../../public/img2.jpg';
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Lorem",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Lorem",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  
  {
    id: 3,
    img: Img2,
    name: "Lorem",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
   
      <div className="py-10  ">
        <div className="container ">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-black">
            SERVICE 
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-black relative shadow-xl  
                duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full mt-2"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}

<div>
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 bg-black
                 duration-200  py-2 px-4 rounded-full text-white hover:text-red-600 hover:bg-white justify-center items-center">
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