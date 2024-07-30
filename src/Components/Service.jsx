

// import React, { useEffect } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";


// const services = [
//   { 
//     title: " WEB DESIGN & DEVELOPMENT", 
//     description: "We Provide high quality, cost-efficient, trustworthy, and result-driven web and eCommerce solutions for the clientele in a global range. We deal with each client individually so that we tend towards the BEST WEB DESIGNING COMPANY IN INDIA.", 
//     icon: "🔍" 
//   },
//   { 
//     title: "DEVELOPMENT", 
//     description: "AT SystAIO we boast of having highly talented and skilled Web developers who mainly Mainly focused on customized application development to meet your requirements. This helps us to become the 1st Choice & TOP WEB DEVELOPMENT COMPANY.", 
//     icon: "📡" 
//   },
//   { 
//     title: "DIGITAL MARKETING", 
//     description: "We specialize in SEO services and digital marketing services. We use all the necessary tools in order to take business to places and generate revenue. We always use sophisticated and latest tools to make ourselves best suited for DIGITAL MARKETING COMPANY.",
//     icon: "🏢" 
//   },
//   { 
//     title: "MOBILE APPS", 
//     description: "We develop Android & IOS mobile applications. We have a team of highly experienced people developing creative mobile apps to give your users a ceaseless & friendly experience. we develop all kinds of apps which leading us towards the reliable APP DEVELOPMENT COMPANY.", 
//     icon: "💼" 
//   },
//   { 
//     title: "CONTENT MANAGEMENT", 
//     description: "Good content is the backbone of your website Our focus is to earn customers through high-quality content that is informative and interesting. We write good, quality and fresh content to attract your customer's which obviously a good CONTENT MANAGEMENT COMPANY do.",
//     icon: "🛠️" 
//   },
//   { 
//     title: "24*7 SUPPORT", 
//     description: "We know that our customers are important for us and hence we do not leave any stone unturned in helping, guiding and providing the best possible solutions & after sales services and support to our clients. This makes us most trustworthy IT Company in India.", 
//     icon: "📜" 
//   }
// ];

// const Services = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); 
//   }, []);

//   return (
//     <div className="py-10 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-10">CHECK OUR SERVICES</h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {services.map((service, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
//             <div className="text-yellow-500 text-5xl mb-4">{service.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;







import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">CHECK OUR SERVICES</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Service 1 */}
        <NavLink to='/Servicepage'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
          
          <div className="text-yellow-500 text-5xl mb-4">🔍</div>
          <h1  style={{ fontFamily: 'PTSerif-Bold' }}className="font-bold ">WEB DESIGN & DEVELOPMENT</h1>
          <p className=" mt-2">
          We Provide high quality, cost-efficient, trustworthy, and result-driven web and eCommerce solutions for the clientele in a global range. We deal with each client individually so that we Tend towards the "BEST WEB DESIGNING COMPANY IN INDIA"
          </p>
        </div>
        </NavLink>
        {/* Service 2 */}
        <NavLink to='/Servicepage'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
          <div className="text-yellow-500 text-5xl mb-4">📡</div>
          <h1 style={{ fontFamily: 'PTSerif-Bold' }} className="font-bold ">SOFTWARE DEVELOPMENT</h1>
          <p className=" mt-2">
          AT SystAIO we boast of having highly talented and skilled Web developers who mainly Mainly focused on customized application development to meet your requirements. This helps us to become the 1st Choice & "TOP WEB DEVELOPMENT COMPANY"
          </p>
        </div>
        </NavLink>
        {/* Service 3 */}
        <NavLink to='/Servicepage'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
          <div className="text-yellow-500 text-5xl mb-4">🏢</div>
          <h1 style={{ fontFamily: 'PTSerif-Bold' }} className="font-bold">DIGITAL MARKETING</h1>
          <p className="mt-2">
          We specialize in SEO services and digital marketing services. We use all the necessary tools in order to take business to places and generate revenue. We always use sophisticated and latest tools to make ourselves best suited for "DIGITAL MARKETING COMPANY".
          </p>
        </div>
        </NavLink>
        
        {/* Service 4 */}
        <NavLink to='/Servicepage'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
          <div className="text-yellow-500 text-5xl mb-4">💼</div>
          <h1 style={{ fontFamily: 'PTSerif-Bold' }} className="font-bold">MOBILE APPS</h1>
          <p className="mt-2">
          We develop Android & IOS mobile applications. We have a team of highly experienced people developing creative mobile apps to give your users a ceaseless & friendly experience. we develop all kinds of apps which leading us towards the reliable "APP DEVELOPMENT COMPANY"
          </p>
        </div>
        </NavLink>
        {/* Service 5 */}
        <NavLink to='/Servicepage'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
          <div className="text-yellow-500 text-5xl mb-4">🛠️</div>
          <h1 style={{ fontFamily: 'PTSerif-Bold' }} className="font-bold">CONTENT MANAGEMENT</h1>
          <p className="mt-2">
          Good content is the backbone of your website Our focus is to earn customers through high-quality content that is informative and interesting. We write good, quality and fresh content to attract your customer's which obviously a good "CONTENT MANAGEMENT COMPANY" do.
          </p>
        </div>
        </NavLink>
        
        {/* Service 6 */}
        <NavLink to='/Servicepage'>
        <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-up">
          <div className="text-yellow-500 text-5xl mb-4">📜</div>
          <h1 style={{ fontFamily: 'PTSerif-Bold' }} className="font-bold">24*7 SUPPORT</h1>
          <p className="mt-2">
          We know that our customers are important for us and hence we do not leave any stone unturned in helping, guiding and providing the best possible solutions & after sales services and support to our clients. This makes us most trustworthy "IT Company in India".
          </p>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Services;
