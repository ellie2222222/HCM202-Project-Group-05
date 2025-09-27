"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed bottom-0 left-0 right-0 h-[20px] bg-red-200 origin-left z-50"
    ></motion.div>
  );
};

export default ProgressBar;
