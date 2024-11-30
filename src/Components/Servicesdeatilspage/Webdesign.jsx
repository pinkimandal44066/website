import React from "react";
import SystaioWebdesign3 from "../../../public/Systaio Webdesign 3.png";
const Webdesign = () => {
  const steps = [
    { title: "Understand Client Needs", icon: "🔍" },
    { title: "Create Custom Solutions", icon: "🖊️" },
    { title: "Develop & Implement", icon: "💻" },
    { title: "Testing & Optimization", icon: "✅" },
    { title: "Launch & Support", icon: "🚀" },
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
                Systaio Web Design & Development
              </h1>
              <p className="mt-4 text-lg">
                Empower your business with custom IT solutions and sleek web
                designs.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 lg:mt-5 " data-aos="fade-left">
              <img
                src={SystaioWebdesign3}
                alt="Web Design"
                className="rounded-lg w-full"
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
              Web Design & Development at Systaio
            </h2>
            <p
              className="text-gray-700 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At <span className="font-semibold">Systaio</span>, we specialize
              in delivering cutting-edge web designs with strong backend
              solutions that drive growth and performance.
            </p>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our team focuses on seamless, intuitive design and advanced
              technology integration to provide businesses with digital
              solutions that truly stand out.
            </p>
            <p
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Whether it's building a new platform or optimizing an existing
              website, Systaio ensures that your digital presence thrives.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-8"
              data-aos="fade-up"
            >
              Why Choose Systaio?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Tailored Designs",
                  desc: "We create designs that reflect your brand's unique identity.",
                  icon: "🎨",
                },
                {
                  title: "Scalable Solutions",
                  desc: "We ensure your website grows with your business.",
                  icon: "📈",
                },
                {
                  title: "User-Centric Approach",
                  desc: "We prioritize user experience for maximum engagement.",
                  icon: "👥",
                },
                {
                  title: "Robust Security",
                  desc: "Our websites are built with the latest security standards.",
                  icon: "🔒",
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
