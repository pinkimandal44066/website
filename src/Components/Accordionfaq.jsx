import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown,  } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";

const AccordionItem = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border shadow-2xl rounded-md border-black">
      <button
        className="w-full p-2 text-black text-left rounded-md focus:outline-none 
        focus:shadow-outline-blue transition duration-300 ease-in-out flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <FaCirclePlus  size={24} style={{ color: "black" }} />
        </span>
        <span className="ml-2 font-semibold flex-grow">{title}</span>
        <span
          className={`ml-auto transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition duration-300 ease-in-out`}
        >
          <MdOutlineKeyboardArrowDown size={32} style={{ color: "black" }} />
        </span>
      </button>
      <div
        className={`mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex justify-center"></div>
        <p className="text-black text-left mx-4">{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <>
      <div className="lg:mt-24 lg:-mx-20 mt-8 mb-40">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-36 2xl:mx-48 lg:-mt-16">
          <AccordionItem
            title="WHY SHOULD I HAVE A WEBSITE? "
            content="Today, the World is turning in to eWorld and almost everything in business is going to be digital. So in order to keep your business alive and to stay ahead against your competitors you must be present in this eWorld with your unique identity. Establishing a website for your company is the first step in increasing its popularity; millions of people across the country use the internet on a daily basis and there is no better way for word of mouth to spread about your business. An impressive site equates to a well-respected reputation. It depends on you and your business. The goal of your website is to turn your website's traffic/visits into clients and/or sales."
          />


<AccordionItem
            title=" 'HOW MUCH DOES A WEBSITE COST?'"
            content="There are many factors to consider when building your web site. The final cost of your site will depend on the size of your site i.e. number of pages you are going to have, the type of graphics involved, how interactive your site will be. You will also need to think about web hosting and domain name registration. Because price is so variable from client to client. But after all it won't be more that what it would cost you if you don not have it."
          />
          <AccordionItem
            title=" 'HOW LONG IT WILL TAKE TO DEVELOP MY SITE?'"
            content="Again, this is based on a number of factors. The complexity of your site, its size, and our current schedule all play a role in the duration of designing. Our expert designers are the best in the industry and we assure you to deliver the final site in as less as possible time."
          />
       

       <AccordionItem
            title="WHAT DOMAIN NAME SHOULD I CHOOSE?"
            content="This thing depends on how you are going to use it. If you are going to be telling people over the phone, choose one that is easy to say and spell out loud. Above all, I would choose one that is memorable and not confusing. We commend that you choose it related to your product / business line."
          />



<AccordionItem
            title="DO YOU RE-DESIGN EXISTING WEBSITE?"
            content="Yes we do. We can redesign, retaining your company corporate style or we can redesign to give you a complete new image. We can redesign your website to give you advantages of the latest web technologies."
          />



<AccordionItem
            title="DO YOU PROVIDE HOSTING SERVICES?"
            content="Yes, we provide managed hosting. This means that we will host your website through our web-hosting server partner. Our team will setup and configure the website, E-mail addresses, and domain registration and take care of website installation too. You can choose to go with monthly or annual packages, suiting your needs."
          />


<AccordionItem
            title="WHAT IF I CHANGE MY MIND ABOUT THE LOOK AND FEEL OF THE WEBSITE?"
            content="Once you have finalized the general layout of the approved design we start the development of the website. If in case you change your mind regarding the layout or any other major alteration, then we will complete upto 2 revisions free of cost. But more than that will be chargeable. However all small revisions will be free of cost during development phase. But if you change your mind after the website gets live then it will be treated as a fresh project and you will be billed as per standard hourly rates."
          />


<AccordionItem
            title="WHAT IS YOUR PAYMENT STRUCTURE?"
            content="For small website design and development projects we accept 50% of the total cost as an advance and the remaining amount on completion. For large websites, 1/3rd of the total fee is charged as advance payment. The second installment of the fee on reaching halfway point in the project and the final payment on completion of the project."
          />

<AccordionItem
            title="WHO OWNS THE WEBSITE AFTER COMPLETION?"
            content="Just as we receive the final payment, we will transfer 100% ownership to you. This will include the source code (if you want) of your website and assured confidentiality."
          />

<AccordionItem
            title="HOW DO YOU MAINTAIN WEBSITES AND WHAT ARE ITS CHARGES?"
            content="We maintain websites by taking regular back-ups, scanning them against any virus, adding new content provided by the owner, and editing or adding new images provided by the website owner. We have monthly and yarly maintenance packages for you which are cost effective and very useful to ensure your website is updated regularly and is up and running fine."
          />


<AccordionItem
            title="DO YOU INTEGRATE PAYMENT GATEWAY ON ECOMMERCE WEBSITES?"
            content="Yes, We can integrate almost all the common payment gateways like PayPal, Google Checkout , CCAvenue on the ecommerce websites."
          />
        </div>
      </div>

{/* <div className="mb-40"></div> */}
      {/* <NavLink to="/enquiry">
        <button className="text-[#E79F30] flex border-2 border-gray-100 shadow-2xl bg-white font-semibold py-2.5 px-9 rounded-lg mx-auto mt-9">
          View All
        </button>
      </NavLink> */}
    </>
  );
};

export default Accordion;
