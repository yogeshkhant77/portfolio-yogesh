import React from 'react'
import './MainContent.css'

function MainContent() {
  return (
    <main className="main-content">
      <div className="image-container">
        <div className="circular-image">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" 
            alt="Nicol Rider"
          />
        </div>
      </div>
      <div className="content-section">
        <h1 className="main-heading">Hello</h1>
        <h2 className="sub-heading">A Bit About Me</h2>
        <p className="description">
          I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.
        </p>
        <div className="action-buttons">
          <button className="btn btn-resume">Resume</button>
          <button className="btn btn-projects">Projects</button>
          <button className="btn btn-contact">Contact</button>
        </div>
      </div>
    </main>
  )
}

export default MainContent

