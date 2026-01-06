import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillItemVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#ffa500",
      color: "#fff",
      transition: { duration: 0.3 },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Programming",
      skills: ["JavaScript", "Python", "C", "C++"],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "Postman",
        "VS Code",
        "Firebase",
        "Jupyter Notebook",
        "Jira",
      ],
    },
    {
      title: "Deployment & Hosting",
      skills: ["Vercel", "Render", "Environment Variables"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Teamwork & Collaboration",
        "Agile Methodologies",
        "Adaptability",
      ],
    },
  ];

  return (
    <motion.div
      className="skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-container">
        <motion.h1
          className="skills-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          TECHNICAL SKILLS
        </motion.h1>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px rgba(255,165,0,0.3)",
              }}
            >
              <h2 className="skill-card-title">{category.title}</h2>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-item"
                    variants={skillItemVariants}
                    whileHover="hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
