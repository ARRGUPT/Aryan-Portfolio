import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ARRGUPT', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/aryan-gupta-635965302/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:guptaaryan28106@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </span>
          
          <p className="hero-greeting">Hello, I'm</p>
          
          <h1 className="hero-name">
            Aryan Gupta<span className="wave">👋</span>
          </h1>
          
          <div className="hero-title">
            <span>I'm a </span>
            <TypeAnimation
              sequence={[
                'Data Scientist',
                2000,
                'ML Engineer',
                2000,
                'AI Developer',
                2000,
                'NLP Specialist',
                2000,
                'Deep Learning Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="typing-text"
              repeat={Infinity}
            />
          </div>
          
          <p className="hero-description">
            I build intelligent AI systems and machine learning solutions that solve real-world problems. 
            Passionate about transforming data into actionable insights and creating 
            innovative AI-powered applications.
          </p>

          <div className="hero-buttons">
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500}
              className="btn btn-primary"
            >
              View My Work
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500}
              className="btn btn-secondary"
            >
              Let's Talk
            </Link>
          </div>

          <div className="hero-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Profile */}
        <motion.div 
          className="hero-profile"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-card">
            <div className="profile-image-container">
              <div className="profile-image">
                <span className="profile-initials">AG</span>
              </div>
              <div className="profile-ring"></div>
              <div className="profile-ring ring-2"></div>
            </div>
            
            <div className="floating-badges">
              <div className="float-badge badge-1">
                <span className="badge-icon">🤖</span>
                <span>AI/ML</span>
              </div>
              <div className="float-badge badge-2">
                <span className="badge-icon">🧠</span>
                <span>Deep Learning</span>
              </div>
              <div className="float-badge badge-3">
                <span className="badge-icon">📊</span>
                <span>Data Science</span>
              </div>
              <div className="float-badge badge-4">
                <span className="badge-icon">💬</span>
                <span>NLP</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-value">8.01</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">Top 13</span>
              <span className="stat-label">IIT Hackathon</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">79.1%</span>
              <span className="stat-label">Model Accuracy</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <Link 
        to="about" 
        spy={true} 
        smooth={true} 
        offset={-80} 
        duration={500}
        className="scroll-indicator"
      >
        <span>Scroll Down</span>
        <FaChevronDown className="scroll-icon" />
      </Link>

      {/* Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
