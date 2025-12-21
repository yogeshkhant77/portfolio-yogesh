import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeSwitch from './ThemeSwitch'
import './Header.css'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  return (
    <>
      <header className="header">
        <Link to="/" className="header-left">
          <div className="logo-circle"></div>
          <div className="header-name">
            <span className="name">Yogesh Khant</span>
            <span className="title"></span>
          </div>
        </Link>
        <div className="header-center">
          <ThemeSwitch />
        </div>
        <nav className="header-nav">
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
          <span className="nav-separator">|</span>
          <Link 
            to="/projects" 
            className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </Link>
          <span className="nav-separator">|</span>
          <Link 
            to="/skills" 
            className={location.pathname === '/skills' ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </Link>
          <span className="nav-separator">|</span>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </nav>
        <label className="hamburger">
          <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </header>
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <nav className="mobile-menu">
            <Link to="/about" className="mobile-menu-link" onClick={closeMenu}>About</Link>
            <Link to="/projects" className="mobile-menu-link" onClick={closeMenu}>Projects</Link>
            <Link to="/skills" className="mobile-menu-link" onClick={closeMenu}>Skills</Link>
            <Link to="/contact" className="mobile-menu-link" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header

