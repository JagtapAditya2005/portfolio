
import React from "react";
import { motion } from "framer-motion";

const Section = ({ children }) => {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.05,
          margin: "0px 0px -80px 0px",
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;

