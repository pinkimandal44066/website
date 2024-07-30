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
            content="Today, the World is turning into eWorld and almost everything in business is going to be digital. So in order to keep your business alive and to stay ahead against your competitors you must be present in this eWorld with your unique identity. Establishing a website for your company is the first step in increasing its popularity, millions of people across the country use the internet on a daily basis and there is no better way for word of mouth to spread about your business. An impressive site equates to a well-respected reputation. It depends on you and your business. The goal of your website is to turn your website’s traffic/visits into clients and/or sales.'"
          />
          <AccordionItem
            title=" 'HOW LONG IT WILL TAKE TO DEVELOP MY SITE?'"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />
       

       <AccordionItem
            title="WHAT DOMAIN NAME SHOULD I CHOOSE?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />



<AccordionItem
            title="DO YOU RE-DESIGN EXISTING WEBSITE?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />



<AccordionItem
            title="DO YOU PROVIDE HOSTING SERVICES?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />


<AccordionItem
            title="WHAT IF I CHANGE MY MIND ABOUT THE LOOK AND FEEL OF THE WEBSITE?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />


<AccordionItem
            title="WHAT IS YOUR PAYMENT STRUCTURE?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />

<AccordionItem
            title="WHO OWNS THE WEBSITE AFTER COMPLETION?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />

<AccordionItem
            title="HOW DO YOU MAINTAIN WEBSITES AND WHAT ARE ITS CHARGES?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
          />


<AccordionItem
            title="DO YOU INTEGRATE PAYMENT GATEWAY ON ECOMMERCE WEBSITES?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
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
