import React from "react";
import Scrolling from "./Scrolling";

import Schoolderpsystem from "../../public/Schoolerpsystem.avif";
import Stockbillingsystem from "../../public/Stockbillingsystem.avif";
import Payrollmanagement from "../../public/Payrollmanagement.avif";
import SystaioAboutus2 from "../../public/SystaioAboutus2.png";
import Customerrelationshipmanagement from "../../public/Customerrelationshipmanagement.avif";
import Progressbartwo from "./Progressbartwo";
const Products = () => {
  return (
    <>
      {/* first part */}

      
      {/* <div className="relative bg-gradient-to-r from-black via-purple-500 to-white w-full h-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center px-6 py-12 sm:py-20">
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Our Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mt-4">
              We offer innovative software, web solutions, and mobile apps
              designed to enhance efficiency, drive growth, and empower
              businesses.
            </p>
          </div>

          <div className="sm:w-1/2 mt-8 sm:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                Custom Software Development
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                Web Application Development
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                Mobile App Development
              </p>
            </div>
          </div>
        </div>
      </div> */}
 <div
        className="flex flex-col lg:flex-row  text-white bg-black  items-center justify-between px-4
 lg:px-20 py-20"
      >
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl  font-bold  mb-4">Products</h1>
          <p className=" text-base md:text-lg ">
          Discover SystAIO's innovative products designed to drive efficiency and scalability. Our range of solutions is tailored to meet the needs of startups, growing enterprises, and established organizations. Leverage our technology to streamline operations, boost productivity, and achieve sustainable growth.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <img
            src={SystaioAboutus2}
            alt="Example"
            className="w-full max-w-md lg:max-w-full mx-auto"
          />
        </div>
      </div>
      {/* second part */}

      <div className="mt-10">
        <p
          style={{ fontFamily: "PTSerif-Bold" }}
          className="text-center lg:text-3xl
         md:text-2xl sm:text-xl text-xl "
        >
          We provide you with cutting-edge and effective web solutions that
          enhance
        </p>

        <p
          style={{ fontFamily: "PTSerif-Bold" }}
          className="text-center lg:text-3xl md:text-2xl
         sm:text-xl text-xl "
        >
          your digital experience and strengthen your online presence.
        </p>
        <p className="mt-4 lg:text-base md:text-base sm:text-base text-xs text-center  lg:mx-40 md:mx-20 sm:mx-12 mx-5">
          {/* At SYSTAIO, we deliver state-of-the-art web solutions designed to elevate your digital experience and fortify your online presence. Our innovative tools and strategies ensure that your website stands out in the crowded digital landscape. By leveraging the latest technologies, we enhance functionality and user engagement. Our commitment to excellence guarantees that your online platforms are not only visually appealing but also highly effective. Partner with us to achieve the ultimate in web performance and digital success. Discover how our cutting-edge solutions can transform your online presence. */}
          At SYSTAIO, we offer cutting-edge web solutions that take your digital
          experience to new heights. Our team utilizes the latest technologies
          to enhance your website, strengthening your online presence. We
          improve both functionality and design to ensure your site stands out
          in the crowd. Our strategies boost user engagement and build a strong
          connection with your audience. We not only understand your business
          needs but also deliver highly effective solutions to meet them. Our
          services help propel your business forward in the digital arena. With
          each project, we emphasize quality and innovation. Our cutting-edge
          solutions will provide a new direction for your online experience.
          Partner with SYSTAIO to empower your digital future.
        </p>
      </div>

      {/* third part */}

      {/* <div className="flex justify-center lg:gap-6 md:gap-6 sm:gap-6 gap-2 mt-10 lg:mt-10 md:mt-12 items-start">
        <div className="flex flex-col">
          <div className="card relative w-auto h-auto  cursor-pointer rounded-[10px]">
            <div className="">
              <div className="">
                <img
                  src={ Schoolderpsystem} 
                //   src='https://img.freepik.com/premium-vector/education-concept-idea-learning-knowledge_277904-2967.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_user'
            
                  className=" opacity-100 hover:opacity-40"
                />
              </div>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
          
                <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
                SCHOOL ERP SYSTEM 
                </h1>
                <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
              
                </div>
  

            </div>
          </div>
          <div className="card relative w-auto h-auto  cursor-pointer rounded-[10px] lg:mt-6 md:mt-6 sm:mt-6 mt-3">
            <div className="">
              <div className="">
                <img
                  src={ Payrollmanagement}
      
                //   src='https://img.freepik.com/premium-photo/financial-statements-preparation-reports-financial-reporting-concept-digital-accounting-audit-financial-research-accounting-report_27634-1167.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_user'

                  className=" opacity-100 hover:opacity-40"
                />
              </div>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
         
                <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
              
PAYROLL MANAGEMENT
                </h1>
                <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
              
                </div>
              

            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="card relative w-auto h-auto cursor-pointer rounded-[10px]">
            <div className="">
              <div className="">
                <img
                  src={Stockbillingsystem}
                //   src='https://img.freepik.com/free-vector/digital-indian-rupee-rise-up-arrow-background-trading-concept_1017-42460.jpg?ga=GA1.1.2000051094.1716005427&semt=sph'

                  className=" opacity-100 hover:opacity-40"
                />
              </div>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
            
                <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
            
STOCK & BILLING SYSTEM 
                </h1>
                <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
          
                </div>
          

            </div>
          </div>
          <div className="card relative w-auto h-auto cursor-pointer rounded-[10px] lg:mt-6 md:mt-6 sm:mt-6 mt-2">
            <div className="">
              <div className="">
                <img
                  src={Customerrelationshipmanagement}
// src='https://img.freepik.com/premium-photo/partnership-business-people-shaking-hand-after-business-job-interview-meeting-room-office-congratulation-investor-success-interview-partner-teamwork-financial-connection-concept_33829-547.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_user'
            
                  className=" opacity-100 hover:opacity-40"
                />
              </div>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center opacity-0 h-full transition-all duration-400 text-0 hover:opacity-100 hover:h-full hover:text-lg hover:font-semibold hover:text-white hover:bg-[#000] hover:bg-opacity-40">
          
                <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
               
CUSTOMER RELATIONSHIP MANAGEMENT
                </h1>
                <div className="flex justify-center items-center lg:text-9xl md:text-8xl sm:text-8xl text-5xl">
             
                </div>
      

            </div>
          </div>
        
        </div>

        
      </div> */}

      <div className="flex justify-center mx-5  lg:mx-28 lg:gap-6 md:gap-6 sm:gap-6 gap-2 mt-10 lg:mt-10 md:mt-12 items-start">
        <div className="flex flex-col">
          <div className="card relative w-auto h-auto cursor-pointer rounded-[10px]">
            <div className="">
              <div className="">
                <img src={Schoolderpsystem} className="opacity-100" />
              </div>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center h-full text-lg font-semibold text-white bg-[#000] bg-opacity-40">
              <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
                SCHOOL ERP SYSTEM
              </h1>
            </div>
          </div>

          <div className="card relative w-auto h-auto cursor-pointer rounded-[10px] lg:mt-6 md:mt-6 sm:mt-6 mt-3">
            <div className="">
              <div className="">
                <img src={Payrollmanagement} className="opacity-100" />
              </div>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center h-full text-lg font-semibold text-white bg-[#000] bg-opacity-40">
              <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
                PAYROLL MANAGEMENT
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="card relative w-auto h-auto cursor-pointer rounded-[10px]">
            <div className="">
              <div className="">
                <img src={Stockbillingsystem} className="opacity-100" />
              </div>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center h-full text-lg font-semibold text-white bg-[#000] bg-opacity-40">
              <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
                STOCK & BILLING SYSTEM
              </h1>
            </div>
          </div>

          <div className="card relative w-auto h-auto cursor-pointer rounded-[10px] lg:mt-6 md:mt-6 sm:mt-6 mt-2">
            <div className="">
              <div className="">
                <img
                  src={Customerrelationshipmanagement}
                  className="opacity-100"
                />
              </div>
            </div>
            <div className="second-content absolute inset-0 flex justify-center items-center h-full text-lg font-semibold text-white bg-[#000] bg-opacity-40">
              <h1 className="lg:text-2xl md:text-xl sm:text-base text-[8px]">
                CUSTOMER RELATIONSHIP MANAGEMENT
              </h1>
            </div>
          </div>
        </div>
      </div>





      <Progressbartwo />
    </>
  );
};

export default Scrolling(Products);
