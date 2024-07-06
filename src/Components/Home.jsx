import React from "react";
import Img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";
import { IoSchool } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
// import BannerImg from "../../public/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../../public/coffee-texture.jpg";

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
  const bgImage = {
    backgroundImage: `url(${BgImg})`, // Define BgImg correctly or remove this line
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      {/* PART1 */}
      <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center bg-black text-white">
        <div className="container pb-8 sm:pb-0 max-w-screen-xl lg:mx-32 mx-5">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                style={{ fontFamily: "PTSerif-Bold" }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                ABOUT US{" "}
                <span
                  data-aos-delay="300"
                  style={{ fontFamily: "PTSerif-Bold" }}
                >
                  Lorem
                </span>{" "}
                i ipsum dolor
              </h1>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 py-2 px-4 rounded-full text-white hover:text-red-600 hover:bg-white">
                  View All
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="-mt-6 flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={img3}
                alt="biryani img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PART2 */}
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1
              style={{ fontFamily: "PT Serif, serif", fontWeight: "bold" }}
              className="text-4xl font-bold font-cursive text-black"
            >
              SERVICES
            </h1>
          </div>

          {/* Services Card section  */}
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
          </div>

          {/* View All button */}
          <div className="flex justify-center py-8">
            <button
              className="bg-gradient-to-r from-primary to-secondary border-2 
            border-primary hover:scale-105 duration-200 py-2 px-4 rounded-full text-black
             hover:text-WH hover:bg-black hover:text-white"
            >
              View All
            </button>
          </div>
        </div>
      </div>

      {/* PART3 */}
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={Img2}
                  alt="biryani img"
                  className="max-w-[350px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin rounded-full"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  style={{ fontFamily: "PT Serif, serif", fontWeight: "bold" }}
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  PRODUCTS
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <IoSchool className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-white" />
                      <span>SCHOOL MANAGEMENT SYSTEM</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <MdOutlineInventory className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-white " />
                      <span>INVENTORY MANAGEMENT SYSTEM</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <MdOutlinePayment className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-white" />
                      <span>PAYROLL MANAGEMENT SYSTEM</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive">
                      CUSTOMER RELATIONSHIP MANAGEMENT
                    </h1>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cupiditate ducimus, culpa, omnis aliquam illo, rem labore
                      possimus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
