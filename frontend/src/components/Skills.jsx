import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaFire,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import CIcon from "./icons/CIcon";
import CppIcon from "./icons/CppIcon";
import VSCodeIcon from "./icons/VSCodeIcon";
import JiraIcon from "./icons/JiraIcon";
import JupyterIcon from "./icons/JupyterIcon";
import PostmanIcon from "./icons/PostmanIcon";
import GitIcon from "./icons/GitIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import HtmlIcon from "./icons/HtmlIcon";
import CssIcon from "./icons/CssIcon";
import BootstrapIcon from "./icons/BootstrapIcon";
import TailwindCssIcon from "./icons/TailwindCssIcon";
import ReactIcon from "./icons/ReactIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import VercelIcon from "./icons/VercelIcon";
import RenderIcon from "./icons/RenderIcon";
import CommunicationIcon from "./icons/CommunicationIcon";
import ProblemSolvingIcon from "./icons/ProblemSolvingIcon";
import AgileIcon from "./icons/AgileIcon";
import TeamworkIcon from "./icons/TeamworkIcon";
import AdaptabilityIcon from "./icons/AdaptabilityIcon";
import PythonIcon from "./icons/PythonIcon";
import MongoDBIcon from "./icons/MongoDBIcon";
import MySQLIcon from "./icons/MySQLIcon";
import NodeJsIcon from "./icons/NodeJsIcon";
import RestAPIIcon from "./icons/RestAPIIcon";
import JWTIcon from "./icons/JWTIcon";
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
        { name: "React.js", icon: ReactIcon },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "Bootstrap", icon: BootstrapIcon },
        { name: "Tailwind CSS", icon: TailwindCssIcon },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: NodeJsIcon },
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: RestAPIIcon },
        { name: "JWT Authentication", icon: JWTIcon },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: MongoDBIcon },
        { name: "MySQL", icon: MySQLIcon },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "JavaScript", icon: JavaScriptIcon },
        { name: "Python", icon: PythonIcon },
        { name: "C", icon: CIcon },
        { name: "C++", icon: CppIcon },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: GitIcon },
        { name: "Postman", icon: PostmanIcon },
        { name: "VS Code", icon: VSCodeIcon },
        { name: "Firebase", icon: FirebaseIcon },
        { name: "Jupyter Notebook", icon: JupyterIcon },
        { name: "Jira", icon: JiraIcon },
      ],
    },
    {
      title: "Deployment & Hosting",
      skills: [
        { name: "Vercel", icon: VercelIcon },
        { name: "Render", icon: RenderIcon },
        { name: "Environment Variables", icon: FaCode },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", icon: CommunicationIcon },
        { name: "Problem Solving", icon: ProblemSolvingIcon },
        { name: "Teamwork & Collaboration", icon: TeamworkIcon },
        { name: "Agile Methodologies", icon: AgileIcon },
        { name: "Adaptability", icon: AdaptabilityIcon },
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
                {category.skills.map((skill, skillIndex) => {
                  const isObject = typeof skill === "object";
                  const IconComponent = isObject ? skill.icon : null;
                  const skillName = isObject ? skill.name : skill;

                  return (
                    <motion.span
                      key={skillIndex}
                      className="skill-item"
                      variants={skillItemVariants}
                      whileHover="hover"
                    >
                      {IconComponent && (
                        <IconComponent className="skill-icon" />
                      )}
                      <span>{skillName}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
