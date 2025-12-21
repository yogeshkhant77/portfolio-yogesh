import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./MainContent.css";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.main
      className="main-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="image-container" variants={imageVariants}>
        <div className="circular-image">
          <img src="/yogeshkhant_.jpg" alt="Yogesh Khant" />
        </div>
      </motion.div>
      <motion.div className="content-section" variants={containerVariants}>
        <motion.h1 className="main-heading" variants={itemVariants}>
          Hello
        </motion.h1>
        <motion.h2 className="sub-heading" variants={itemVariants}>
          A Bit About Me
        </motion.h2>
        <motion.p className="description" variants={itemVariants}>
          I’m Yogesh Khant, a Full Stack Developer specializing in the MERN
          Stack (MongoDB, Express.js, React.js, Node.js). I build secure,
          scalable, and responsive web applications with a strong focus on REST
          APIs, authentication, database design, and frontend state management.
          I enjoy writing clean code and turning real-world ideas into practical
          digital solutions.
        </motion.p>
        <motion.div className="action-buttons" variants={itemVariants}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/about" className="btn btn-resume">
              About me
            </Link>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/projects" className="btn btn-projects">
              Projects
            </Link>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/contact" className="btn btn-contact">
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

export default Home;
