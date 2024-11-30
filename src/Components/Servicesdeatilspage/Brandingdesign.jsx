import React from "react";
import SYSTAIOBRANDING3 from "../../../public/SYSTAIO BRANDING3.png";
const Brandingdesign = () => {
  const steps = [
    { title: "Understand Requirements", icon: "🔍" },
    { title: "Create Branding Strategy", icon: "📊" },
    { title: "Design Brand Identity", icon: "🎨" },
    { title: "Brand Messaging", icon: "🗣️" },
    { title: "Launch & Monitor", icon: "🚀" },
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
                Branding Design
              </h1>
              <p className="mt-4 text-lg">
                Build a strong, unique brand that resonates with your audience.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
              <img
                src={SYSTAIOBRANDING3}
                alt="Branding Design"
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
              Our Branding Services
            </h2>
            <p
              className="text-gray-700 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At <span className="font-semibold">Systaio</span>, we specialize
              in creating unique and powerful branding strategies tailored to
              your business needs.
            </p>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We work closely with you to craft a brand identity that aligns
              with your business vision, values, and goals.
            </p>
            <p
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              From logo design to brand messaging, our team ensures that your
              brand stands out and communicates effectively with your audience.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-8"
              data-aos="fade-up"
            >
              Why Choose Us for Your Branding Needs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Unique Brand Identity",
                  desc: "Stand out with a customized and memorable brand.",
                  icon: "💡",
                },
                {
                  title: "Strategic Branding",
                  desc: "Build a strategy that resonates with your target audience.",
                  icon: "📈",
                },
                {
                  title: "Creative Design Solutions",
                  desc: "Designs that reflect your values and vision.",
                  icon: "🎨",
                },
                {
                  title: "Brand Consistency",
                  desc: "Maintain consistency across all platforms and touchpoints.",
                  icon: "🔄",
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
              Our Branding Process
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

export default Brandingdesign;
