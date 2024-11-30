import Scrolling from "../Scrolling";
// import Ourteam from '../Ourteam';
import img2 from "../../../public/img2.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import SystaioAboutus2 from "../../../public/SystaioAboutus2.png";
const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    window.addEventListener("resize", AOS.refresh);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);
  return (
    <>
      <div
        className="flex flex-col lg:flex-row   text-white bg-black  items-center justify-between px-4
 lg:px-20 py-20"
      >
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl  font-bold  mb-4">About Us</h1>
          <p className=" text-base md:text-lg ">
            At SystAIO, we blend expertise with creativity to craft solutions
            that empower organizations to achieve efficiency, scalability, and
            success. Whether you're a startup, a growing enterprise, or an
            established organization, our dedicated team is here to transform
            your vision into reality with technology that drives results.
            Explore our services and discover how we can redefine your digital
            journey.
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



     <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center justify-center lg:mt-16 mt-8  lg:px-20 ">
        <section className="py-10 bg-gray-100">
          <div className="max-w-screen-xl lg:mx-20 mx-auto  px-6">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-bold text-gray-900 mb-4"
                data-aos="fade-up"
              >
                Who We Are?
              </h2>
              <p
                className="text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We are a team of professionals committed to delivering top-notch
                services to help you achieve your business goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                data-aos="flip-left"
                data-aos-delay="400"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Experienced Professionals
                </h3>
                <p className="text-gray-600">
                  Our team brings years of experience to help your business grow
                  with expertise in various industries.
                </p>
              </div>
              <div
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                data-aos="flip-left"
                data-aos-delay="600"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Client-Centered Approach
                </h3>
                <p className="text-gray-600">
                  We prioritize your goals and needs, offering personalized
                  solutions that align with your business vision.
                </p>
              </div>
              <div
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                data-aos="flip-left"
                data-aos-delay="800"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Innovative Solutions
                </h3>
                <p className="text-gray-600">
                  Our team is dedicated to finding creative and innovative
                  solutions that drive success for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div>
        <p
          data-aos="fade-up"
          style={{ fontFamily: "PTSerif-Bold" }}
          className="text-sm lg:mx-40 mx-5 mt-10"
        >
          SystAIO is the hub of high-quality, cost-efficient, trustworthy, and
          result-driven web and eCommerce solutions for clientele globally. At
          SystAIO, we understand your requirements, so we research to make it
          exclusively better for your business. We build everything from a
          quirky logo to staggering design, interactive functionality, and
          highly complex software. Our digital marketing solutions add perks to
          our credibility.
        </p>

        <p
          data-aos="fade-up"
          style={{ fontFamily: "PTSerif-Bold" }}
          className="text-sm lg:mx-40 mx-5 mt-5"
        >
          We specialize in web design, web development, eCommerce development,
          web application development, software development on cloud, mobile app
          development, SEO services, digital marketing, Payment Gateway
          Integration, and much more. Our team is full of experienced &
          innovative individuals from different fields such as web consultation,
          creative design, content writing, programming, and digital marketing.
        </p>

        <p
          data-aos="fade-up"
          style={{ fontFamily: "PTSerif-Bold" }}
          className="text-sm lg:mx-40 mx-5 mt-5"
        >
          Our team knows how to bring results and that’s why we have been the
          first choice of our clients when it comes to web design company. We
          never compromise on the quality of our services, and this very feature
          has helped our company reach this height in the world of web and
          digitization.
        </p>

        <p
          data-aos="fade-up"
          style={{ fontFamily: "PTSerif-Bold" }}
          className="text-sm lg:mx-40 mx-5 mt-5"
        >
          We offer you some of the best cutting-edge technologies for eCommerce
          development and online marketing services to maximize your sales and
          brand value across multiple retail channels at a very competitive
          price.
        </p>

        <p
          data-aos="fade-up"
          style={{ fontFamily: "PTSerif-Bold" }}
          className="text-sm lg:mx-40 mx-5 mt-5"
        >
          We provide a completely free consultancy service to start a new
          business or expand your existing online business to achieve the goal.
        </p>

        <p
          data-aos="fade-up"
          style={{ fontFamily: "PTSerif-Bold" }}
          className="text-sm lg:mx-40 mx-5 mt-5"
        >
          SYASTAIO Companies in Dhanbad: We are dedicated to taking your
          business to new heights with excellence and innovation.
        </p>
      </div>

      
      <div className="bg-gray-100 py-14 mt-5 items-center justify-center">
  <div className="text-center mb-12">
    <h2
      data-aos="fade-up"
      style={{ fontFamily: "PTSerif-Bold" }}
      className="text-3xl font-semibold"
    >
      WHY CHOOSE US?
    </h2>
  </div>
  <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    <div
      data-aos="fade-up"
      className="text-center p-8 bg-white shadow-lg rounded-lg"
    >
      <div className="mb-4">
        <div className="text-4xl">🎨</div>
      </div>
      <h3
        style={{ fontFamily: "PTSerif-Bold" }}
        className="text-xl font-semibold mb-4"
      >
        WE'RE CREATIVE
      </h3>
      <p>
        We believe in creativity & innovation, and we design highly responsive
        websites with high-quality graphic design and best creative Search Engine
        Optimization (SEO) keywords.
      </p>
    </div>
    <div
      data-aos="fade-up"
      className="text-center p-8 bg-white shadow-lg rounded-lg"
    >
      <div className="mb-4">
        <div className="text-4xl">⏰</div>
      </div>
      <h3
        style={{ fontFamily: "PTSerif-Bold" }}
        className="text-xl font-semibold mb-4"
      >
        WE'RE PUNCTUAL
      </h3>
      <p>
        We value time, which is why we deliver the product exactly as you are
        looking for within the time frame. Being punctual helps us establish our
        reputation as a dependable and consistent company.
      </p>
    </div>
    <div
      data-aos="fade-up"
      className="text-center p-8 bg-white shadow-lg rounded-lg"
    >
      <div className="mb-4">
        <div className="text-4xl">💼</div>
      </div>
      <h3
        style={{ fontFamily: "PTSerif-Bold" }}
        className="text-xl font-semibold mb-4"
      >
        WE'RE COST EFFECTIVE
      </h3>
      <p>
        We understand the value of money, which is why we create the best
        responsive design under your budget. We take your budget first and then
        provide you with the best product under that budget.
      </p>
    </div>
  </div>
</div>

      {/* <Ourteam /> */}
    </>
  );
};

export default Scrolling(Aboutus);
