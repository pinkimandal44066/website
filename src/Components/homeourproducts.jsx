



import { motion } from "framer-motion";
import Systaioschoolsoftware from "../../public/Systaio school software.avif";
import Systaiobillingsoftware from "../../public/Systaio billing software.avif";
import Systaioerpsoftware from "../../public/Systaio erp software.avif";
import Systaiohospitalmanagementsystem from "../../public/Systaio hospital management system.avif";
import './Homefive.css';
import SystaioAboutus2 from "../../public/SystaioAboutus2.png";
const HomeFour = () => {
  return (
    <div className="mt-5">
     
      <div>
        <p className="text-black lg:text-5xl md:text-4xl sm:text-3xl text-2xl
         text-center lg:text-start mx-20 font-semibold">
          Our <span className="text-gray-400 font-bold ">PRODUCTS</span>
        </p>
      </div>

      <div className="flex -mt-5 gap-10 font-bold items-center overflow-hidden whitespace-nowrap ">
        <motion.div
          className="flex gap-5"
          initial={{ x: "0%" }}
          animate={{ x: "-200%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
        >
       
          <motion.img
            src={Systaioschoolsoftware}
            className="mt-10 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[12px] "
            alt="School Software"
          />
          <motion.img
            src={Systaiobillingsoftware}
            className="mt-10 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[12px]"
            alt="Billing Software"
          />
          <motion.img
            src={Systaioerpsoftware}
            className="mt-10 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[12px]"
            alt="ERP Software"
          />
          <motion.img
            src={Systaiohospitalmanagementsystem}
            className="mt-10 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[12px]"
            alt="Hospital Management System"
          />
        
          <motion.img
            src={Systaioschoolsoftware}
            className="mt-10 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[12px]"
            alt="School Software"
          />
          <motion.img
            src={Systaiobillingsoftware}
            className="mt-10 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[12px]"
            alt="Billing Software"
          />
          <motion.img
            src={Systaioerpsoftware}
            className="mt-10 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[12px]"
            alt="ERP Software"
          />
          <motion.img
            src={Systaiohospitalmanagementsystem}
            className="mt-10 w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] rounded-[12px]"
            alt="Hospital Management System"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeFour;