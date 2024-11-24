// import React from "react";

// const Webdesign = () => {
//   const steps = [
//     { title: "Understand Requirements", icon: "🔍" },
//     { title: "Create Wireframes", icon: "🖊️" },
//     { title: "Develop Website", icon: "💻" },
//     { title: "Testing & QA", icon: "✅" },
//     { title: "Launch Project", icon: "🚀" },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-white to-black text-black py-16">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//           <div
//             className="md:w-1/2 text-center md:text-left"
//             data-aos="fade-right"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold">
//               Web Design & Development
//             </h1>
//             <p className="mt-4 text-lg">
//               Elevate your business with cutting-edge designs and robust
//               development solutions.
//             </p>
//           </div>
//           <div className="md:w-1/2" data-aos="fade-left">
//             <img
//               src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?semt=ais_hybrid"
//               alt="Web Design"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-black mb-4" data-aos="fade-up">
//             Web Design & Development
//           </h2>
//           <p
//             className="text-gray-700 mb-4"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             At <span className="font-semibold">Systaio</span>, we create
//             innovative and user-friendly websites optimized for performance and
//             scalability.
//           </p>
//           <p
//             className="text-gray-600 mb-4"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Our team blends design aesthetics with cutting-edge technology to
//             deliver exceptional digital experiences.
//           </p>
//           <p className="text-gray-600" data-aos="fade-up" data-aos-delay="300">
//             Whether you're looking to build a brand-new website or revamp an
//             existing one, we provide tailored solutions to meet your business
//             needs.
//           </p>
//         </div>
//       </section>

//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2
//             className="text-3xl font-bold text-center mb-8"
//             data-aos="fade-up"
//           >
//             Why Choose Us?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Responsive Designs",
//                 desc: "Works seamlessly on all devices.",
//                 icon: "📱",
//               },
//               {
//                 title: "Custom Solutions",
//                 desc: "Tailored to your unique needs.",
//                 icon: "⚙️",
//               },
//               {
//                 title: "SEO Optimized",
//                 desc: "Rank higher on search engines.",
//                 icon: "🚀",
//               },
//               {
//                 title: "Fast Delivery",
//                 desc: "Timely project completion.",
//                 icon: "⏱️",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="p-6 bg-gray-100 rounded-lg shadow-sm text-center"
//                 data-aos="zoom-in"
//                 data-aos-delay={idx * 100}
//               >
//                 <div className="text-4xl">{item.icon}</div>
//                 <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
//                 <p className="mt-2 text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="container lg:mx-auto mx-5 px-4">
//           <h2
//             className="text-4xl font-bold text-center mb-12"
//             data-aos="fade-up"
//           >
//             Our Process
//           </h2>
//           <div className="relative border-l-4 border-gray-400 ">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="flex items-center mb-8"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="bg-black  rounded-full h-10 w-10 flex items-center justify-center -ml-6">
//                   {step.icon}
//                 </div>
//                 <div className="ml-4 p-4 bg-white rounded-lg shadow">
//                   <h3 className="text-xl font-semibold">{step.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Webdesign;













import React from "react";

const Webdesign = () => {
  const steps = [
    { title: "Understand Requirements", icon: "🔍" },
    { title: "Create Wireframes", icon: "🖊️" },
    { title: "Develop Website", icon: "💻" },
    { title: "Testing & QA", icon: "✅" },
    { title: "Launch Project", icon: "🚀" },
  ];

  return (
  <>

<div className="overflow-x-hidden"> {/* Prevent horizontal scrolling */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-black text-black py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div
            className="md:w-1/2 text-center md:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
            Web Design & Development
            </h1>
            <p className="mt-4 text-lg">
              Elevate your business with cutting-edge designs and robust
              development solutions.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
            <img
              src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?semt=ais_hybrid"
              alt="Web Design"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4" data-aos="fade-up">
          Web Design & Development
          </h2>
          <p
            className="text-gray-700 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At <span className="font-semibold">Systaio</span>, we create
            innovative and user-friendly websites optimized for performance and
            scalability.
          </p>
          <p
            className="text-gray-600 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our team blends design aesthetics with cutting-edge technology to
            deliver exceptional digital experiences.
          </p>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="300">
            Whether you're looking to build a brand-new website or revamp an
            existing one, we provide tailored solutions to meet your business
            needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Responsive Designs",
                desc: "Works seamlessly on all devices.",
                icon: "📱",
              },
              {
                title: "Custom Solutions",
                desc: "Tailored to your unique needs.",
                icon: "⚙️",
              },
              {
                title: "SEO Optimized",
                desc: "Rank higher on search engines.",
                icon: "🚀",
              },
              {
                title: "Fast Delivery",
                desc: "Timely project completion.",
                icon: "⏱️",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-100 rounded-lg shadow-sm text-center"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl lg:mx-auto mx-5 px-4">
          <h2
            className="text-4xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Our Process
          </h2>
          <div className="relative border-l-4 border-gray-400">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center mb-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-black rounded-full h-10 w-10 flex items-center justify-center -ml-6">
                  {step.icon}
                </div>
                <div className="ml-4 p-4 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default Webdesign;
