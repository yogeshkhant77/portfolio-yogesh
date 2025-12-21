import React from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";

function Home() {
  return (
    <main className="main-content">
      <div className="image-container">
        <div className="circular-image">
          <img src="yogesh_Khant.png" alt="Yogesh Khant" />
        </div>
      </div>
      <div className="content-section">
        <h1 className="main-heading">Hello</h1>
        <h2 className="sub-heading">A Bit About Me</h2>
        <p className="description">
          I’m Yogesh Khant, a Full Stack Developer specializing in the MERN
          Stack (MongoDB, Express.js, React.js, Node.js). I build secure,
          scalable, and responsive web applications with a strong focus on REST
          APIs, authentication, database design, and frontend state management.
          I enjoy writing clean code and turning real-world ideas into practical
          digital solutions.
        </p>
        <div className="action-buttons">
          <Link to="/about" className="btn btn-resume">
            About me
          </Link>
          <Link to="/projects" className="btn btn-projects">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-contact">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
