import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Online Book Store Application',
      description: 'Developed a full-stack application with role-based access (Admin/User). Integrated Google Books API to manage 1M+ book records. Implemented JWT authentication & bcrypt password hashing. Designed optimized MongoDB schemas for scalable CRUD operations. Built a responsive UI for smooth browsing and book management. Deployed frontend on Vercel and backend on Render.',
      image: '/book.jpg',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'bcrypt', 'Google Books API', 'Vercel', 'Render'],
      githubLink: 'https://github.com/yogeshkhant77/Booksy',
      visitLink: 'https://booksy-beryl-six.vercel.app/login'
    },
    {
      id: 2,
      name: 'Real-Time Chat Application',
      description: 'Built a real-time messaging platform using React, Node.js, Express, MongoDB, and Pusher. Implemented Firebase Authentication and secure backend APIs. Designed modular React components with efficient state management. Developed RESTful APIs for user and message handling.',
      image: '/realtimechat.jpg',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Pusher', 'Firebase', 'REST APIs'],
      githubLink: 'https://github.com/yogeshkhant77/realtime-chat'
    },
    {
      id: 3,
      name: 'Movie Dialogue Emotion Analyzer',
      description: 'Built an NLP-based emotion classification system using DistilRoBERTa. Developed an interactive Streamlit dashboard with Plotly visualizations. Performed text preprocessing and emotion analytics at character level.',
      image: '/movie.jpg',
      technologies: ['Python', 'DistilRoBERTa', 'Streamlit', 'Plotly', 'NLP', 'Machine Learning'],
      githubLink: 'https://github.com/yogeshkhant77/Movie-Dialogue-Emotion-Analyzer-and-Character-Dashboard'
    },
    {
      id: 4,
      name: 'Car Price Predictor',
      description: 'A machine learning model that predicts car prices based on various features using advanced regression techniques. Includes feature analysis, data preprocessing, and model training for accurate price predictions.',
      image: '/car.jpg',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Analysis', 'Price Prediction', 'Feature Analysis', 'Model Training', 'Data Preprocessing', 'Regression Models'],
      githubLink: 'https://github.com/yogeshkhant77/Car-Price-Predictor'
    },
    {
      id: 5,
      name: 'Diabetes Prediction',
      description: 'A machine learning classification model for predicting diabetes risk based on health metrics and patient data. Features data visualization, accuracy optimization, and comprehensive health metrics analysis.',
      image: '/diabetes.jpg',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'Scikit-learn', 'Pandas', 'Risk Prediction', 'Health Metrics Analysis', 'Classification Model', 'Data Visualization', 'Accuracy Optimization'],
      githubLink: 'https://github.com/yogeshkhant77/Diabetes-prediction'
    },
    {
      id: 6,
      name: 'Kilangi',
      description: 'A clean single-page personal website (Kilangi Homepage) showcasing content and visuals with responsive layout. Built with HTML, CSS, and JavaScript, it includes interactive elements and image/icon assets for styling and UX.',
      image: '/Jewelry.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
      githubLink: 'https://github.com/yogeshkhant77/Kilangi',
      visitLink: 'https://kilangi-yk.vercel.app/'
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="projects-heading">Projects</h1>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="project-image"
                />
              </div>
              <div className="project-card-content">
                <h2 className="project-title">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  <span className="technologies-label">Technologies:</span>
                  <div className="technologies-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="technology-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  {project.visitLink && (
                    <a 
                      href={project.visitLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="visit-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Visit Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h2 className="cta-heading">Have a Project in Mind?</h2>
          <p className="cta-text">I'm always interested in new opportunities and exciting projects.</p>
          <Link to="/contact" className="cta-button">
            Let's Work Together
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects

