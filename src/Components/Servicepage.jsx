import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import Scrolling from "./Scrolling";
import Accordion from "./Accordion";
import { FaArrowTurnDown } from "react-icons/fa6";
import Sysatioserviceimg from "../../public/Systaioserviceimg.png";
const Servicepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
    link: "",
  });

  const openModal = (title, content, link) => {
    setModalContent({ title, content, link });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cards = [
    {
      title: "WEB DESIGN ",
      imgSrc:
        "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid",
      content:
        "We Provide high quality, cost-efficient, trustworthy, and result-driven web and eCommerce solutions for the clientele in a global range. We deal with each client individually so that we Tend towards the BEST WEB DESIGNING COMPANY IN INDIA.",
      link: "/webdesign",
    },
    {
      title: "MOBILE APPS",
      imgSrc:
        "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid",
      content:
        "We develop Android & IOS mobile applications. We have a team of highly experienced people developing creative mobile apps to give your users a ceaseless & friendly experience. we develop all kinds of apps which leading us towards the reliable APP DEVELOPMENT COMPANY.",
      link: "/mobileapps",
    },
    {
      title: " SOFTWARE SOLUTIONS",
      imgSrc:
        "https://img.freepik.com/free-photo/programming-background-collage_23-2149901775.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid",
      content:
        "SYSTAIO is a prominent company that has established a distinguished reputation in the field of Social Media Solutions. The company helps businesses enhance their digital presence and create impactful engagement on social media platforms.",
      link: "/softwaredevelopment",
    },
    {
      title: "DIGITAL MARKETING",
      imgSrc:
        "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid",
      content:
        "We specialize in SEO services and digital marketing services. We use all the necessary tools in order to take business to places and generate revenue. We always use sophisticated and latest tools to make ourselves best suited for DIGITAL MARKETING COMPANY.",
      link: "/digitalmarketing",
    },
    {
      title: "INFLUENCE MARKETING ",
      imgSrc:
        "https://img.freepik.com/free-photo/medium-shot-men-holding-smartphone_23-2150208243.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid",
      content:
        "Good content is the backbone of your website Our focus is to earn customers through high-quality content that is informative and interesting. We write good, quality and fresh content to attract your customer's which obviously a good Influence Marketing COMPANY do.",
      link: "/influencermarketing",
    },
    {
      title: "BRANDING DESIGN",
      imgSrc:
        "https://img.freepik.com/free-photo/female-logo-designer-working-her-tablet-connected-laptop_23-2149119262.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrihttps://img.freepik.com/free-vector/hand-drawn-illustration-people-with-smartphone-marketing_52683-66658.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid",

      content:
        "SYSTAIO helps businesses create a compelling and cohesive brand identity with its innovative solutions in Branding Design. Their creativity and strategic approach provide brands with a distinctive and impactful presence.",
    },
  ];

  return (
    <>
      <div
        className="flex flex-col lg:flex-row  text-white bg-black  items-center justify-between px-4
 lg:px-20 py-20"
      >
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl  font-bold  mb-4">Services </h1>
          <p className=" text-base md:text-lg ">
            At SystAIO, we combine innovation with expertise to deliver scalable
            and efficient solutions for businesses of all sizes. Whether you're
            a startup, growing enterprise, or established organization, our team
            is dedicated to turning your vision into reality. Explore our
            services to enhance your digital transformation and drive measurable
            results with cutting-edge technology.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <img
            src={Sysatioserviceimg}
            alt="Example"
            className="w-full max-w-md lg:max-w-full mx-auto"
          />
        </div>
      </div>
      <div className="max-w-screen-xl lg:mx-auto mx-5 lg:mt-10 md:mt-10 sm:mt-10 mt-10">
        <div className="animate-zoom">
          <p
            style={{ fontFamily: "PTSerif-Bold" }}
            className="text-center lg:text-3xl md:text-2xl sm:text-2xl text-xl font-medium"
          >
            We are providing innovative and
          </p>
          <p
            style={{ fontFamily: "PTSerif-Bold" }}
            className="text-center lg:text-3xl md:text-2xl sm:text-2xl text-xl font-medium"
          >
            impactful web solutions...
          </p>
          <p
            style={{ fontFamily: "PTSerif-Bold" }}
            className="mt-4 lg:text-base md:text-base sm:text-base text-xs text-center font-medium"
          >
            In this Internet era, Digital presence is must to grow your
            business. However one should go to different places for different
            kind of digital solutions. By keeping this in our mind we are here
            to provide you the best all-in-one digital solution at a single
            place.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card relative w-full h-auto cursor-pointer overflow-hidden"
              onClick={() => openModal(card.title, card.content, card.link)} 
            >
              <img
                src={card.imgSrc}
                className="w-full h-auto object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-100 h-full text-center font-semibold text-white bg-black bg-opacity-40 transition-all duration-300">
                <h1 className="text-lg lg:text-2xl md:text-xl sm:text-base">
                  {card.title}
                </h1>
                <div className="flex justify-center items-center text-5xl lg:text-9xl md:text-8xl sm:text-8xl">
                  <i className="ri-add-line"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:mt-10 md:mt-10 mt-10 text-3xl lg:text-4xl md:text-4xl font-bold cursor-pointer md:mx-16 sm:mx-10 mx-5 lg:mx-16 flex items-center">
          <h1>Discover more</h1>
          <span className="ml-5 mt-10">
            <FaArrowTurnDown />
          </span>
        </div>

        <div className="mt-10">
          <Accordion />
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          content={modalContent.content}
          link={modalContent.link} // Passing the link to modal
        />
      </div>
    </>
  );
};

export default Scrolling(Servicepage);
