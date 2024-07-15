import { motion } from "framer-motion";
import img1 from "../../public/img1.png";
import img2 from '../../public/img2.png';
import img3 from '../../public/img3.png';
import img4 from '../../public/img4.png';
import img5 from '../../public/img5.png';
import img6 from '../../public/img6.png';

const HomeThird = () => {
  return (
    <div className="w-full ">
     
      <div className="flex lg:gap-28 md:gap-20 gap-10  font-bold items-center overflow-hidden whitespace-nowrap bg-white">
        <motion.img
          src={img1}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5"
        />
        <motion.img
          src={img2}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5"
        />
        <motion.img
          src={img3}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5"
        />
        <motion.img
          src={img4}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5"
        />
        <motion.img
          src={img5}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5"
        />
        <motion.img
          src={img6}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 3 }}
          className="mt-10 ml-5"
        />
        <motion.img
          src={img1}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="mt-10 ml-5"
        />
        <motion.img
          src={img2}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="mt-10 ml-5"
        />
      </div>

      

    
    </div>
  );
};

export default HomeThird;










































































































