import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thanks for subscribing!');
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ARRGUPT', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/aryan-gupta-635965302/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:guptaaryan28106@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">AG</span>
                <span className="logo-dot">.</span>
              </div>
              <p className="footer-tagline">
                Building intelligent AI systems and machine learning solutions that solve real-world problems.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <nav className="links-nav">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="footer-link"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4 className="footer-title">Contact</h4>
              <div className="contact-info">
                <a href="mailto:guptaaryan28106@gmail.com" className="contact-link">
                  guptaaryan28106@gmail.com
                </a>
                <a href="tel:+918081128481" className="contact-link">
                  +91 80811 28481
                </a>
                <span className="contact-location">
                  Ghaziabad, Uttar Pradesh, India
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4 className="footer-title">Stay Updated</h4>
              <p className="newsletter-text">
                Subscribe to get updates on my latest projects and blog posts.
              </p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Aryan Gupta. Made with <FaHeart className="heart" /> in India
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="back-to-top"
      >
        <FaArrowUp />
      </Link>
    </footer>
  );
};

export default Footer;
