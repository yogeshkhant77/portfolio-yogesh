import React from "react";
import { motion } from "framer-motion";
import "./Domains.css";

function Domains() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 50px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const domains = [
    {
      icon: (
        <img
          src="/frontend.gif"
          alt="Frontend Development"
          style={{ width: "2em", height: "2em", objectFit: "contain" }}
        />
      ),
      title: "Frontend Development",
      description:
        "I specialize in building responsive and user-friendly interfaces with a strong focus on clean design, usability, and performance. I enjoy converting ideas and designs into interactive web experiences.",
      skills: [
        "HTML5, CSS3, JavaScript",
        "React.js",
        "Responsive Design",
        "API Integration (Frontend side)",
      ],
    },
    {
      icon: (
        <img
          src="/backend.gif"
          alt="Backend Development"
          style={{ width: "2em", height: "2em", objectFit: "contain" }}
        />
      ),
      title: "Backend Development",
      description:
        "I develop secure and scalable backend systems that handle application logic, authentication, and data management while ensuring smooth communication with the frontend.",
      skills: [
        "Node.js, Express.js",
        "RESTful APIs",
        "Authentication (JWT – basic)",
        "MongoDB (CRUD operations)",
      ],
    },
    {
      icon: (
        <img
          src="/fullstack.gif"
          alt="Full Stack Development"
          style={{ width: "2em", height: "2em", objectFit: "contain" }}
        />
      ),
      title: "Full Stack Development (MERN)",
      description:
        "As a MERN Stack developer, I build complete end-to-end web applications by integrating frontend, backend, and database layers into a single scalable solution.",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Deployment (Vercel, Render – basic)",
      ],
    },
    {
      icon: (
        <img
          src="/aiml.gif"
          alt="AI & ML"
          style={{ width: "2em", height: "2em", objectFit: "contain" }}
        />
      ),
      title: "AI & Machine Learning",
      description:
        "I work on AI and Machine Learning projects focused on solving real-world problems using data-driven approaches. My experience includes data preprocessing, model training, and evaluation.",
      skills: [
        "Python",
        "NumPy, Pandas",
        "Scikit-learn",
        "Machine Learning Models (Classification, Regression)",
        "Data Analysis & Feature Engineering",
      ],
    },
    {
      icon: (
        <img
          src="/qa-engineer.gif"
          alt="QA Engineer"
          style={{ width: "2em", height: "2em", objectFit: "contain" }}
        />
      ),
      title: "QA Engineer (Manual + Basic Automation)",
      description:
        "I have a foundational understanding of software testing with hands-on experience in manual testing. I focus on identifying defects, writing test cases, and ensuring software quality across applications.",
      skills: [
        "Manual Testing",
        "SDLC & STLC",
        "Test Case Writing",
        "Bug Tracking (Jira – basics)",
        "Automation Testing (Basic understanding)",
      ],
    },
  ];

  return (
    <motion.section
      className="domains-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Page Intro */}
      <motion.div
        className="domains-intro"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="domains-title">My Technical Domains</h1>
        <p className="domains-description">
          I work across multiple technology domains with a strong focus on
          building user-friendly web applications, scalable backend systems, and
          intelligent AI-driven solutions. I also have a foundational
          understanding of software testing to ensure quality and reliability.
        </p>
      </motion.div>

      {/* Domain Cards */}
      <motion.div
        className="domains-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            className="domain-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="card-icon">{domain.icon}</div>
            <h2 className="card-title">{domain.title}</h2>
            <p className="card-description">{domain.description}</p>
            <div className="card-skills">
              <h3 className="skills-label">What I Work With</h3>
              <ul className="skills-list">
                {domain.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Domains;
