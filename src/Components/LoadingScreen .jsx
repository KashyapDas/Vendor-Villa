import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const spinnerVariants = {
    rotate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br bg-white text-black">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-t-transparent border-black rounded-full"
          variants={spinnerVariants}
          animate="rotate"
        ></motion.div>
        <motion.p
          className="mt-4 text-lg font-semibold lg:text-4xl"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Loading, please wait...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
