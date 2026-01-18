import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./About.css";
import mobileSvg from "../../mobile.svg";

function About() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let mouse = { x: null, y: null };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      const numStars = 150;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          originalX: 0,
          originalY: 0,
        });
        stars[i].originalX = stars[i].x;
        stars[i].originalY = stars[i].y;
      }
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Animation loop
    const animate = () => {
      // Check theme
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            star.x -= (dx / distance) * force * 3;
            star.y -= (dy / distance) * force * 3;
          }
        }

        // Slow drift back to original position
        star.x += (star.originalX - star.x) * 0.05;
        star.y += (star.originalY - star.y) * 0.05;

        // Slow movement
        star.x += star.vx;
        star.y += star.vy;

        // Update original position for drift
        star.originalX += star.vx;
        star.originalY += star.vy;

        // Wrap around edges
        if (star.originalX < 0) star.originalX = canvas.width;
        if (star.originalX > canvas.width) star.originalX = 0;
        if (star.originalY < 0) star.originalY = canvas.height;
        if (star.originalY > canvas.height) star.originalY = 0;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="starfield-canvas"></canvas>
      <div className="about-container">
        <motion.section
          className="about-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="about-heading" variants={fadeInUp}>
            About Me
          </motion.h1>
          <div className="about-section-content">
            <motion.div className="about-content" variants={fadeInLeft}>
              <motion.p className="about-text" variants={fadeInUp}>
                I'm an intermediate full-stack developer with a B.Tech in
                Computer Engineering, focused on building modern web
                applications using React, Node.js, and MongoDB. I'm passionate
                about creating seamless user experiences and scalable backend
                solutions.
              </motion.p>
              <motion.p className="about-text" variants={fadeInUp}>
                Alongside web development, I have a strong interest in machine
                learning, data analysis, data structures, and exploring emerging
                technologies in the AI space.
              </motion.p>
            </motion.div>
            <motion.div
              className="about-photo-container"
              variants={fadeInRight}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/yk_007.JPG"
                alt="Yogesh Khant"
                className="about-photo"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="contact-info-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Location & Contact
          </motion.h2>
          <div className="contact-info-content">
            <p className="location">Malpur, Arvalli, Gujarat, India</p>
            <p className="contact-item">
              <span className="contact-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <a
                href="mailto:khantyogesh021@gmail.com"
                className="contact-link"
              >
                khantyogesh021@gmail.com
              </a>
            </p>
            <p className="contact-item">
              <span className="contact-icon">
                <img src={mobileSvg} alt="Mobile" width="20" height="20" />
              </span>
              <a href="tel:+919023831416" className="contact-link">
                +91 9023831416
              </a>
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/yogeshkhant19/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fill="currentColor"
                  />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/yogeshkhant77"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    fill="currentColor"
                  />
                </svg>
                GitHub
              </a>
            </div>
            <p className="name-signature">Yogesh Khant</p>
          </div>
        </motion.section>

        <motion.section
          className="education-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Education
          </motion.h2>

          <div className="education-item">
            <div className="education-header">
              <h3 className="education-degree">B.Tech</h3>
              <span className="education-year">Year: March 2022</span>
            </div>
            <p className="education-field">Computer Engineering</p>
            <p className="education-institution">
              G H Patel College of Engineering and Technology
            </p>
            <p className="education-location">Anand, Gujarat</p>
            <p className="education-grade">GPA: 8.38 / 10</p>
          </div>

          <div className="education-item">
            <div className="education-header">
              <h3 className="education-degree">12th</h3>
              <span className="education-year">Year: April 2020</span>
            </div>
            <p className="education-field">Science Stream</p>
            <p className="education-institution">
              BAPS Swaminarayan Vidhyamandir Gurukul
            </p>
            <p className="education-location">Gondal, Rajkot</p>
            <p className="education-grade">Percentage: 85.67%</p>
          </div>

          <div className="education-item">
            <div className="education-header">
              <h3 className="education-degree">10th</h3>
              <span className="education-year">Year: June 2019</span>
            </div>
            <p className="education-field">Secondary School</p>
            <p className="education-institution">P.M Sarvodaya High School</p>
            <p className="education-location">Umrala, Bhavnagar</p>
            <p className="education-grade">Percentage: 89.17%</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default About;
