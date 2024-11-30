import React from "react";
import SystaioMobileApp3 from "../../../public/Systaio Mobile App 3.png";
const Mobileapps = () => {
  const steps = [
    { title: "Understand Requirements", icon: "🔍" },
    { title: "Create Wireframes", icon: "🖊️" },
    { title: "Develop App", icon: "📱" },
    { title: "Testing & QA", icon: "✅" },
    { title: "Launch App", icon: "🚀" },
  ];
  return (
    <>
      <div className="overflow-x-hidden">
        <section className="bg-gradient-to-r from-white to-black text-black py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
            <div
              className="md:w-1/2 text-center md:text-left"
              data-aos="fade-right"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Mobile Apps Development
              </h1>
              <p className="mt-4 text-lg">
                Enhance your business with innovative mobile app solutions that
                deliver seamless user experiences.
              </p>
            </div>
            <div className="md:w-1/2 mt-8  lg:mt-5 " data-aos="fade-left">
              <img
                src={SystaioMobileApp3}
                alt="Mobile App Development"
                className="rounded-lg  w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2
              className="text-3xl font-bold text-black mb-4"
              data-aos="fade-up"
            >
              Mobile App Solutions at Systaio
            </h2>
            <p
              className="text-gray-700 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At <span className="font-semibold">Systaio</span>, we specialize
              in delivering high-performance mobile applications designed for
              both iOS and Android platforms.
            </p>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our team of expert developers and designers craft apps that are
              not only user-friendly but also optimized for performance,
              scalability, and security.
            </p>
            <p
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Whether you're looking to develop a mobile app from scratch or
              revamp an existing one, we offer customized solutions to suit your
              business needs and goals.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-8"
              data-aos="fade-up"
            >
              Why Choose Us for Mobile App Development?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Cross-Platform Development",
                  desc: "Develop apps for both Android and iOS with a single codebase.",
                  icon: "📱",
                },
                {
                  title: "Scalable Architecture",
                  desc: "Build apps that can grow as your business expands.",
                  icon: "📈",
                },
                {
                  title: "User-Centric Designs",
                  desc: "Designs focused on delivering a seamless user experience.",
                  icon: "🎨",
                },
                {
                  title: "Security Focused",
                  desc: "Ensuring data security and app reliability.",
                  icon: "🔐",
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
              Our Mobile App Development Process
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

export default Mobileapps;
