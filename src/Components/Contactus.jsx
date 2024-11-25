import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
// import { IoCalendarNumberOutline } from "react-icons/io5";

// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import "./Contactus.css";
import Scrolling from "./Scrolling";
// import SideFrom from "../Homefolder/SideFrom";
const Contactus = () => {
  // const [date, setDate] = useState(null);

  // const [position, setPosition] = useState("");
  // const handlePosition = (e) => {
  //   setPosition(e.target.value);
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_drmk27n";
    const templateId = "template_sgch3n8";
    const publicKey = "QJ3LYg2phyi7VCyJY";

    const templateParams = {
      from_firstName: firstName,
      from_lastName: lastName,
      from_email: email,
      from_phone: phone,
      message: message,
      to_name: "SystAIO Team",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        toast.success("Message sent successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message");
      });
  };

  return (
    <>
      <img
        className="w-full h-80"
        src="https://img.freepik.com/free-photo/contact-us-communication-support-service-assistance-concept_53876-128103.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_user"
        alt=""
      />
      <form onSubmit={handleSubmit} className="emailForm mt-20 bg-white">
        <div className="form-container">
          <div className="input-group">
            <input
              className="form-input"
              type="text"
              required
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className="form-input"
              type="text"
              required
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group mt-5">
            <input
              className="form-input"
              type="email"
              required
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-input"
              type="number"
              required
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="message-group mt-6">
            <textarea
              cols="30"
              rows="2"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="message-input"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="consent-group">
            <input
              className="consent-checkbox"
              type="checkbox"
              checked={isChecked}
              onClick={handleRadioClick}
              readOnly
            />
            <span className="consent-text">
              I agree to SystAIO securely handling my data as per their privacy
              policy.
            </span>
          </div>
          <div className="button-group">
            <div className="flex lg:items-end lg:justify-end justify-center items-center mt-8">
              <button
                type="submit"
                style={{ fontFamily: "PTSerif-Bold" }}
                className="bg-gradient-to-b from-white via-black to-white 
            cursor-pointer text-white rounded-full text-xs w-32 h-10 flex justify-center 
            items-center lg:text-lg md:text-sm sm:text-sm md:w-60 md:h-12 lg:w-40 lg:mt-6 lg:h-10
             sm:w-40 sm:h-10 mb-24 md:mt-4 font-unison"
              >
                Submit <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="font-Poppins mt-10">
        <div className="max-w-screen-xl lg:mx-auto mx-5">
          <h1
            style={{ fontFamily: "PTSerif-Bold" }}
            className="lg:text-5xl text-3xl font-semibold text-black lg:mt-0 md:mt-10 mt-8 items-center text-center"
          >
            Reach out to us
          </h1>

          <div className="mt-10 ">
            <div className="border-2 border-black  overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4378796926185!2d86.4313797740286!3d23.803023386756603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd41386c516d%3A0xbcd7d938eaed2bdd!2sSystAIO%20Technologies%20%2C%20Website%20Development%20Company%20in%20Dhanbad!5e0!3m2!1sen!2sin!4v1715950634051!5m2!1sen!2sin"
                className="lg:w-full lg:h-[477px] md:w-full md:h-[277px] w-full h-full rounded-lg  "
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly items-center lg:mx-20  mx-5 ">
            <div className="">
              <p
                style={{ fontFamily: "PTSerif-Bold" }}
                className="lg:text-2xl text-xl font-semibold  text-black lg:mt-8 md:mt-10 mt-8 items-center text-center"
              >
                0413, 2ND floor,City Centre, Luby Circular Rd,Busstand,
              </p>
              <p
                style={{ fontFamily: "PTSerif-Bold" }}
                className="lg:text-2xl text-xl font-semibold
               text-black lg:mt-0 md:mt-4 sm:mt-4 mt-2 items-center text-center"
              >
                Dhanbad, Jharkhand 826001
              </p>

              <div
                style={{ fontFamily: "PTSerif-Bold" }}
                className="flex mt-5  lg:mx-36 md:mx-32 sm:mx-32 mx-6"
              >
                <BiPhoneCall className="lg:text-3xl mt-1 text-2xl  text-gray-700" />
                <Link
                  to="tel:+918918304906"
                  className="lg:text-2xl text-xl font-light ml-5"
                >
                  +091-093087 88991
                </Link>
              </div>

              <div
                style={{ fontFamily: "PTSerif-Bold" }}
                className="flex mt-5  lg:mx-36 md:mx-32 sm:mx-32 mx-6"
              >
                <CiMail className="lg:text-3xl text-2xl mt-1" />
                <Link
                  to="mailto:abccdefpvtltd@gmail.com"
                  className="lg:text-2xl text-xl font-light ml-5"
                >
                  systaiotech@gmail.com
                </Link>
              </div>
              <div className="text-3xl lg:text-5xl mt-4 text-black flex gap-10 lg:mx-40 md:mx-32 sm:mx-36 mx-12">
                {/* <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </Link>

                <Link
                  to="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare />
                </Link>

                <Link
                  to="https://www.youtube.com/channel/YourChannelID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube />
                </Link> */}

                <i className=" ri-facebook-fill hover:text-blue-600 transition duration-300 cursor-pointer"></i>
                <i className="ri-instagram-line hover:text-pink-600 transition duration-300 cursor-pointer"></i>
                <i className=" ri-youtube-fill hover:text-red-600 transition duration-300 cursor-pointer"></i>
              </div>

              <div className="text-3xl lg:text-5xl mt-4 text-black flex  gap-10">
                <link
                  href="https://www.facebook.com/"
                  rel="noopener noreferrer"
                />

                <link
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  rel="noopener noreferrer"
                />

                <link
                  href="https://www.youtube.com/channel/YourChannelID"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scrolling(Contactus);
