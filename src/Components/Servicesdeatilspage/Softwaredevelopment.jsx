import React from "react";
import SystaioSoftwareSolutions from "../../../public/Systaio Software Solutions.png";
const Softwaredevelopment = () => {
  const steps = [
    { title: "Understand Requirements", icon: "🔍" },
    { title: "Design Architecture", icon: "📐" },
    { title: "Develop Software", icon: "💻" },
    { title: "Testing & QA", icon: "✅" },
    { title: "Launch Project", icon: "🚀" },
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
                Software Solutions & Development
              </h1>
              <p className="mt-4 text-lg">
                Empowering businesses with innovative software solutions
                tailored to your needs.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 lg:mt-5" data-aos="fade-left">
              <img
                src={SystaioSoftwareSolutions}
                alt="Software Development"
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
              Software Development at Systaio
            </h2>
            <p
              className="text-gray-700 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At <span className="font-semibold">Systaio</span>, we offer
              cutting-edge software development services that help businesses
              enhance their operations, improve efficiency, and drive growth.
            </p>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our expert developers work closely with you to understand your
              business needs and deliver scalable, high-performance software
              solutions.
            </p>
            <p
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              From custom enterprise software to mobile applications, we ensure
              that our solutions align with your objectives and provide a
              seamless user experience.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-8"
              data-aos="fade-up"
            >
              Why Choose Systaio for Software Development?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Tailored Solutions",
                  desc: "We create custom software that fits your unique business needs.",
                  icon: "⚙️",
                },
                {
                  title: "Scalable Development",
                  desc: "Our solutions grow with your business, providing long-term scalability.",
                  icon: "📈",
                },
                {
                  title: "Expert Developers",
                  desc: "Our team consists of skilled developers committed to excellence.",
                  icon: "👨‍💻",
                },
                {
                  title: "Cutting-Edge Technology",
                  desc: "We use the latest technologies to build modern, efficient systems.",
                  icon: "💡",
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
              Our Software Development Process
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

export default Softwaredevelopment;
