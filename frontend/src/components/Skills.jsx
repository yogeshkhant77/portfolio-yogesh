import React from 'react'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Programming',
      skills: ['JavaScript', 'Python', 'C', 'C++']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Postman', 'VS Code', 'Firebase', 'Jupyter Notebook']
    }
  ]

  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1 className="skills-heading">TECHNICAL SKILLS</h1>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h2 className="skill-card-title">{category.title}</h2>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

