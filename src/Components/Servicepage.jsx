import React, { useState } from "react";
import Modal from "./Modal";
import Scrolling from "./Scrolling";
import Accordion from "./Accordion";
import { FaArrowTurnDown } from "react-icons/fa6";

const Servicepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cards = [
    {
      title: "WEB DESIGN ",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661759337211-39bf166e66fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a ad et cum aliquam non, asperiores amet minus tempore neque suscipit labore? Cupiditate deleniti rem sunt tenetur? Ut, fugiat porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta architecto molestias ex magni nam dolor numquam dignissimos officia! Aspernatur, saepe animi? Similique cupiditate repellendus totam tempora dolore mollitia odit.",
    },
    {
      title: "MOBILE APPS",
      imgSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a ad et cum aliquam non, asperiores amet minus tempore neque suscipit labore? Cupiditate deleniti rem sunt tenetur? Ut, fugiat porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta architecto molestias ex magni nam dolor numquam dignissimos officia! Aspernatur, saepe animi? Similique cupiditate repellendus totam tempora dolore mollitia odit.",
    },
    {
      title: "SOCIAL MEDIA SOLUTIONS",
      imgSrc:
        "https://images.unsplash.com/photo-1642480485642-63b9018eadc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGl0JTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a ad et cum aliquam non, asperiores amet minus tempore neque suscipit labore? Cupiditate deleniti rem sunt tenetur? Ut, fugiat porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta architecto molestias ex magni nam dolor numquam dignissimos officia! Aspernatur, saepe animi? Similique cupiditate repellendus totam tempora dolore mollitia odit.",
    },
    {
      title: "DIGITAL MARKETING",
      imgSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a ad et cum aliquam non, asperiores amet minus tempore neque suscipit labore? Cupiditate deleniti rem sunt tenetur? Ut, fugiat porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta architecto molestias ex magni nam dolor numquam dignissimos officia! Aspernatur, saepe animi? Similique cupiditate repellendus totam tempora dolore mollitia odit.",
    },
    {
      title: "CONTENT MANAGEMENT",
      imgSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a ad et cum aliquam non, asperiores amet minus tempore neque suscipit labore? Cupiditate deleniti rem sunt tenetur? Ut, fugiat porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta architecto molestias ex magni nam dolor numquam dignissimos officia! Aspernatur, saepe animi? Similique cupiditate repellendus totam tempora dolore mollitia odit.",
    },
    {
      title: "BRANDING DESIGN",
      imgSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",

      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a ad et cum aliquam non, asperiores amet minus tempore neque suscipit labore? Cupiditate deleniti rem sunt tenetur? Ut, fugiat porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta architecto molestias ex magni nam dolor numquam dignissimos officia! Aspernatur, saepe animi? Similique cupiditate repellendus totam tempora dolore mollitia odit.",
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl lg:mx-auto mx-5 lg:mt-10 md:mt-14 sm:mt-24 mt-20">
        <div className="">
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
            In this Internet era, Digital presence is a must to grow your
            business. However, one should go to different places for different
            kinds of digital solutions. By keeping this in mind, we are here to
            provide you the best all-in-one digital solution at a single place.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card relative w-full h-auto cursor-pointer overflow-hidden"
              onClick={() => openModal(card.title, card.content)}
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
        />
      </div>
    </>
  );
};

export default Scrolling(Servicepage);
