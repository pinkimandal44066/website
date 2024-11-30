import React from "react";
import SystaioInfluencerMarketing3 from "../../../public/Systaio Influencer Marketing 3.png";
const Influencermarketing = () => {
  const steps = [
    { title: "Understand Requirements", icon: "🔍" },
    { title: "Create Strategy", icon: "📊" },
    { title: "Identify Influencers", icon: "🔗" },
    { title: "Campaign Execution", icon: "🚀" },
    { title: "Analyze Results", icon: "📈" },
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
                Influencer Marketing
              </h1>
              <p className="mt-4 text-lg">
                Empower your brand with impactful influencer marketing
                strategies.
              </p>
            </div>
            <div className="md:w-1/2 " data-aos="fade-left">
              <img
                src={SystaioInfluencerMarketing3}
                alt="Influencer Marketing"
                className="rounded-lg  w-full "
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
              Influencer Marketing with Systaio
            </h2>
            <p
              className="text-gray-700 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At <span className="font-semibold">Systaio</span>, we create
              customized influencer marketing strategies to help businesses
              connect with the right influencers and drive brand growth.
            </p>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our team focuses on identifying key influencers who align with
              your brand values to create authentic campaigns that resonate with
              your audience.
            </p>
            <p
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Whether you're looking to build brand awareness, promote a
              product, or increase engagement, Systaio offers end-to-end
              influencer marketing services tailored to your specific needs.
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
                  title: "Targeted Campaigns",
                  desc: "Reach the right audience with effective targeting.",
                  icon: "🎯",
                },
                {
                  title: "Authentic Partnerships",
                  desc: "Collaborate with influencers who align with your brand.",
                  icon: "🤝",
                },
                {
                  title: "Data-Driven Strategy",
                  desc: "Make decisions based on insights and analytics.",
                  icon: "📊",
                },
                {
                  title: "High Engagement",
                  desc: "Boost engagement with impactful influencer content.",
                  icon: "🔥",
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

export default Influencermarketing;
