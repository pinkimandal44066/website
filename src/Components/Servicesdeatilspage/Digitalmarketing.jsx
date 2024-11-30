
import React from "react";
import Systaiodigitalmarketing from "../../../public/Systaio digital marketing3.png";
const Digitalmarketing = () => {
  const steps = [
    { title: "Understand Requirements", icon: "🔍" },
    { title: "Create Wireframes", icon: "🖊️" },
    { title: "Develop Website", icon: "💻" },
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
                Digital Marketing Services
              </h1>
              <p className="mt-4 text-lg">
                Boost your online presence with Systaio's cutting-edge digital marketing strategies.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 lg:mt-4 md:mt-0" data-aos="fade-left">
              <img
              src={Systaiodigitalmarketing}
                
                alt="Digital Marketing"
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
              Transform Your Brand with Digital Marketing
            </h2>
            <p
              className="text-gray-700 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At <span className="font-semibold">Systaio</span>, we specialize in building robust digital marketing strategies to help businesses thrive online.
            </p>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We combine innovative techniques, data-driven insights, and creativity to deliver marketing campaigns that resonate with your target audience.
            </p>
            <p className="text-gray-600" data-aos="fade-up" data-aos-delay="300">
              Whether you're looking for SEO, social media marketing, or paid advertising solutions, we offer customized services to suit your business goals.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-8"
              data-aos="fade-up"
            >
              Why Choose Us for Digital Marketing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "SEO Expertise",
                  desc: "Enhance your search engine rankings with tailored strategies.",
                  icon: "🔍",
                },
                {
                  title: "Targeted Advertising",
                  desc: "Reach the right audience with our advanced ad targeting techniques.",
                  icon: "📣",
                },
                {
                  title: "Social Media Strategy",
                  desc: "Engage with your customers through impactful social media campaigns.",
                  icon: "📱",
                },
                {
                  title: "Content Creation",
                  desc: "Deliver engaging and valuable content to your audience.",
                  icon: "📝",
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
              Our Digital Marketing Process
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

export default Digitalmarketing;
