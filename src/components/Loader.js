import { motion } from "framer-motion";

// variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.25,
      // delayChildren: 2
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    scale:15,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.0,
    },
  },
  exit: {
    opacity: 0,
    scale:3,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
}


const Loader = ({ setLoading }) => {

  return (
    <>
      <div className='pageloader-container hide-cursor'>

        <motion.div
          variants= {container}
          initial= "hidden"
          animate= "show"
          exit= "exit"
          onAnimationComplete= {() => {setLoading(false)}}
          
        >
          <motion.div className="circle1" variants={item}></motion.div>
          <motion.div className="circle2" variants={item}></motion.div>
          <motion.div className="circle3" variants={item}></motion.div>
          <motion.div className="circle4" variants={item}></motion.div>
          <motion.img className="image1" variants={item} 
            src={process.env.PUBLIC_URL + `/images/black-flower.svg`}
          />
          <motion.img className="image2" variants={item} 
            src={process.env.PUBLIC_URL + `/images/black-flower.svg`}
          />
          <motion.img className="image3" variants={item} 
            src={process.env.PUBLIC_URL + `/images/black-flower.svg`}
          />
          <motion.img className="image4" variants={item} 
            src={process.env.PUBLIC_URL + `/images/black-flower.svg`}
          />
          <motion.img className="image-middle" variants={item}
            src={process.env.PUBLIC_URL + `/images/black-flower.svg`}
          />
          
        </motion.div>
      </div>
    </>
  );
};

export default Loader;
