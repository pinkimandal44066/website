import React, { useState, useEffect } from "react";
import "./WorkTechnology.css";
// import python from '../Assets/bike.jpg'

const WorkTechnology = () => {
  const images = [
    "https://www.flaticon.com/free-icon/html-file-extension-interface-symbol_29104",
    "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
    "https://www.flaticon.com/free-icon/wordpress_174881",
    "https://www.flaticon.com/free-icon/developer_16511135",
    "https://cdn-icons-png.flaticon.com/128/15466/15466261.png",
    "https://www.flaticon.com/free-icon/php_919830",
    "https://www.flaticon.com/free-icon/shopping_1162456",
    "https://www.flaticon.com/free-icon/python_3098090",

    "https://www.flaticon.com/free-icon/java-script_1199124",

    "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
    "https://cdn-icons-png.flaticon.com/128/919/919832.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="background-worktechno">
      <div className="techno-text-group">
        <h1 style={{ textAlign: "center", color: "#fff" }}>
          We Work On Technologies
        </h1>
        <p style={{ textAlign: "center" }}>
          Cultivating excellence in every aspect of our service, we are
          dedicated to delivering unparalleled satisfaction to our valued
          customers.
        </p>
      </div>

      <div className="slider">
        <div className="slider-track">
          {images.map((imageUrl, index) => (
            <div className="slid" key={index}>
              <img
                className="imag"
                src={images[(index + currentImageIndex) % images.length]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTechnology;
