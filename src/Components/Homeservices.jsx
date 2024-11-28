// import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "aos/dist/aos.css";
// import AOS from "aos";

// const Homeservices = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);
//   return (
//     <>
//       <div className="py-10 bg-gray-100">
//         <div className=" mx-5">
//           <h2 className="text-3xl font-bold text-center mb-10">
//             CHECK OUR SERVICES
//           </h2>
//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             <NavLink to="/webdesign">
//               <div
//                 className="bg-white p-6 rounded-lg shadow-md text-center"
//                 data-aos="fade-up"
//               >
//                 <div className="text-yellow-500 text-5xl mb-4">🔍</div>

//                 <h1
//                   style={{ fontFamily: "PTSerif-Bold" }}
//                   className="font-bold "
//                 >
//                   WEB DESIGN & DEVELOPMENT
//                 </h1>

//                 <p className=" mt-2">
//                   We Provide high quality, cost-efficient, trustworthy, and
//                   result-driven web and eCommerce solutions for the clientele in
//                   a global range. We deal with each client individually so that
//                   we Tend towards the "BEST WEB DESIGNING COMPANY IN INDIA"
//                 </p>
//               </div>
//             </NavLink>

//             <NavLink to="/softwaredevelopment">
//               <div
//                 className="bg-white p-6 rounded-lg shadow-md text-center"
//                 data-aos="fade-up"
//               >
//                 <div className="text-yellow-500 text-5xl mb-4">📡</div>
//                 <h1
//                   style={{ fontFamily: "PTSerif-Bold" }}
//                   className="font-bold "
//                 >
//                   SOFTWARE SOLUTIONS
//                 </h1>
//                 <p className=" mt-2">
//                   AT SystAIO we boast of having highly talented and skilled Web
//                   developers who mainly Mainly focused on customized application
//                   development to meet your requirements. This helps us to become
//                   the 1st Choice & "TOP WEB DEVELOPMENT COMPANY"
//                 </p>
//               </div>
//             </NavLink>

//             <NavLink to="/digitalmarketing">
//               <div
//                 className="bg-white p-6 rounded-lg shadow-md text-center"
//                 data-aos="fade-up"
//               >
//                 <div className="text-yellow-500 text-5xl mb-4">🏢</div>
//                 <h1
//                   style={{ fontFamily: "PTSerif-Bold" }}
//                   className="font-bold"
//                 >
//                   DIGITAL MARKETING
//                 </h1>
//                 <p className="mt-2">
//                   We specialize in SEO services and digital marketing services.
//                   We use all the necessary tools in order to take business to
//                   places and generate revenue. We always use sophisticated and
//                   latest tools to make ourselves best suited for "DIGITAL
//                   MARKETING COMPANY".
//                 </p>
//               </div>
//             </NavLink>

//             <NavLink to="/mobileapps">
//               <div
//                 className="bg-white p-6 rounded-lg shadow-md text-center"
//                 data-aos="fade-up"
//               >
//                 <div className="text-yellow-500 text-5xl mb-4">💼</div>
//                 <h1
//                   style={{ fontFamily: "PTSerif-Bold" }}
//                   className="font-bold"
//                 >
//                   MOBILE APPS
//                 </h1>
//                 <p className="mt-2">
//                   We develop Android & IOS mobile applications. We have a team
//                   of highly experienced people developing creative mobile apps
//                   to give your users a ceaseless & friendly experience. we
//                   develop all kinds of apps which leading us towards the
//                   reliable "APP DEVELOPMENT COMPANY"
//                 </p>
//               </div>
//             </NavLink>

//             <NavLink to="/influencermarketing">
//               <div
//                 className="bg-white p-6 rounded-lg shadow-md text-center"
//                 data-aos="fade-up"
//               >
//                 <div className="text-yellow-500 text-5xl mb-4">🛠️</div>
//                 <h1
//                   style={{ fontFamily: "PTSerif-Bold" }}
//                   className="font-bold"
//                 >
//                   {" "}
//                   INFLUENCER MARKETING
//                 </h1>
//                 <p className="mt-2">
//                   Good content is the backbone of your website Our focus is to
//                   earn customers through high-quality content that is
//                   informative and interesting. We write good, quality and fresh
//                   content to attract your customer's which obviously a good
//                   "CONTENT MANAGEMENT COMPANY" do.
//                 </p>
//               </div>
//             </NavLink>

//             <div
//               className="bg-white p-6 rounded-lg shadow-md text-center"
//               data-aos="fade-up"
//             >
//               <div className="text-yellow-500 text-5xl mb-4">📜</div>
//               <h1 style={{ fontFamily: "PTSerif-Bold" }} className="font-bold">
//                 24*7 SUPPORT
//               </h1>
//               <p className="mt-2">
//                 We know that our customers are important for us and hence we do
//                 not leave any stone unturned in helping, guiding and providing
//                 the best possible solutions & after sales services and support
//                 to our clients. This makes us most trustworthy "IT Company in
//                 India".
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homeservices;





















































import React, { useEffect, useState } from "react";

import './Homecss.css';

const Activity = () => {
 

  const [isLibraryCollapsed, setIsLibraryCollapsed] = useState(true);

  const toggleLibraryCollapse = () => {
    setIsLibraryCollapsed(!isLibraryCollapsed);
  };

  return (
    <>
  <h2 className="text-3xl font-bold text-center mb-7 mt-7">
            CHECK OUR SERVICES
          </h2>
  <div className="mb-7">

  <div className="activities-main">
     <div className="box">
      <img src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"/>
      {/* <img src="https://images.unsplash.com/photo-1626265774643-f1943311a86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}
      <div className="content">
        <h3>   WEB DESIGN & DEVELOPMENT</h3>
        <p>
        We Provide high quality, cost-efficient, trustworthy, and
                  result-driven web and eCommerce solutions for the clientele in
                  a global range. We deal with each client individually so that
                  we Tend towards the "BEST WEB DESIGNING COMPANY IN INDIA"
        </p>
      </div>
    </div>





     <div className="box">
      <img src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038840.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"/>
      {/* <img src="https://plus.unsplash.com/premium_photo-1661634073903-2ecdccdfc8a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVzfGVufDB8fDB8fHww" alt="" /> */}
      <div className="content">
        <h3>  SOFTWARE SOLUTIONS</h3>
        <p>
        AT SystAIO we boast of having highly talented and skilled Web
                  developers who mainly Mainly focused on customized application
                  development to meet your requirements. This helps us to become
                  the 1st Choice & "TOP WEB DEVELOPMENT COMPANY"
        </p>
      </div>
    </div>

     <div className="box">
      <img src="https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"/>
      {/* <img src="https://plus.unsplash.com/premium_photo-1661905921900-a8b49e65feeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}
      <div className="content">
        <h3>DIGITAL MARKETING</h3>
        <p>
        We specialize in SEO services and digital marketing services.
                  We use all the necessary tools in order to take business to
                  places and generate revenue. We always use sophisticated and
                  latest tools to make ourselves best suited for "DIGITAL
                  MARKETING COMPANY".
        </p>
      </div>
    </div>
    </div>
    



        <div className="second-box-main">
    <div className="second_box">
      <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"/>
        {/* <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" alt="" /> */}
        <div className="content">
          <h3 style={{ textAlign: "center" }}>MOBILE APPS </h3>
          <p>
          We develop Android & IOS mobile applications. We have a team
                  of highly experienced people developing creative mobile apps
                  to give your users a ceaseless & friendly experience. we
                  develop all kinds of apps which leading us towards the
                  reliable "APP DEVELOPMENT COMPANY"
          </p>
        </div>
      </div>
    <div className="second_box">
      <img src="https://img.freepik.com/free-photo/female-make-up-blogger-with-streaming-with-camera-laptop-home_23-2148771522.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"/>
        {/* <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" alt="" /> */}
        <div className="content">
          <h3 style={{ textAlign: "center" }}>INFLUENCER MARKETING</h3>
          <p>
          Good content is the backbone of your website Our focus is to
                  earn customers through high-quality content that is
                  informative and interesting. We write good, quality and fresh
                  content to attract your customer's which obviously a good
                  "CONTENT MANAGEMENT COMPANY" do.
          </p>
        </div>
      </div>
    <div className="second_box">
    <img src="https://img.freepik.com/free-photo/female-make-up-blogger-with-streaming-with-camera-laptop-home_23-2148771522.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"/>

      {/* <img src="https://img.freepik.com/premium-photo/3d-people-man-person-24-7-concept-support_441797-7920.jpg?ga=GA1.1.1829243654.1732361159&semt=ais_hybrid"/> */}
        {/* <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D" alt="" /> */}
        <div className="content">
          <h3 style={{ textAlign: "center" }}>24*7 SUPPORT</h3>
          <p>
          We know that our customers are important for us and hence we do
                not leave any stone unturned in helping, guiding and providing
                the best possible solutions & after sales services and support
                to our clients. This makes us most trustworthy "IT Company in
                India".
          </p>
        </div>
      </div>

      </div>
  </div>

    </>
  );
};

export default Activity;
