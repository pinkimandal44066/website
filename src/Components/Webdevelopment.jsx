import React from 'react';

const WebDevelopmentPage = () => {
  return (
    <div className="  p-6">
      <header className=" text-black p-4 text-center rounded">
        <h1 style={{ fontFamily: 'PTSerif-Bold' }}  className="text-3xl font-bold">Web Development Services</h1>
      </header>
      
      <main className="mt-">
        <section className=" mt-3 rounded ">
          <h2  className="  ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, eligendi sapiente reiciendis vitae, cum ad quasi nulla ab magnam voluptas delectus ipsum id sit iusto, eveniet deserunt alias facere doloremque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dolorem et perferendis eius ad debitis error eveniet architecto, ab omnis amet maxime repellendus explicabo consequuntur? Blanditiis sapiente repellendus maxime veniam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum pariatur ratione minima, quaerat rerum debitis quo impedit perspiciatis sit in deserunt earum similique placeat nihil natus eos adipisci molestias doloribus!
          </h2>
          
        </section>
        
        <section className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Custom Web Development</li>
            <li>eCommerce Solutions</li>
            <li>Content Management Systems</li>
            <li>Responsive Design</li>
            <li>Maintenance & Support</li>
          </ul>
        </section>
        
        <section className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-700">
            Contact us today to discuss your web development needs and how we can help bring your vision to life.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </section>
      </main>
    </div>
  );
};

export default WebDevelopmentPage;