import React from "react";
import BannerImg from "../../public/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../../public/coffee-texture.jpg";
import Img2 from "../../public/img2.jpg";
import { IoSchool } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
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

export default Banner;
