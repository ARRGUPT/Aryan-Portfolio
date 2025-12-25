import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaCode, FaDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    { icon: <FaMapMarkerAlt />, label: 'LOCATION', value: 'Ghaziabad, UP, India' },
    { icon: <FaGraduationCap />, label: 'EDUCATION', value: 'B.Tech CSE' },
    { icon: <FaCode />, label: 'SPECIALIZATION', value: 'AI/ML & Data Science' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <span className="section-tag">ABOUT ME</span>
          <h2 className="section-title">Crafting Solutions Through AI</h2>
        </motion.div>

        <div className="about-grid">
          {/* About Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-text">
              I'm a passionate <span className="highlight">Data Scientist</span> and <span className="highlight">AI Developer</span> currently 
              pursuing my Bachelor of Technology in Computer Science and Engineering at 
              <span className="highlight"> Ajay Kumar Garg Engineering College</span>, Ghaziabad. With a strong foundation 
              in modern AI technologies and a keen eye for solving complex problems, I love creating 
              applications that make a real impact.
            </p>
            
            <p className="about-text">
              My journey in tech has been driven by curiosity and a constant desire to learn. 
              I've worked on various projects ranging from <span className="highlight">RAG-based AI systems</span>, 
              <span className="highlight"> NLP pipelines</span>, to <span className="highlight">intelligent chatbots with agentic workflows</span>. 
              I've competed in national-level hackathons at IIT Jodhpur and IIT Kharagpur, 
              securing top positions among hundreds of teams.
            </p>

            <p className="about-text">
              Currently, I'm focused on building production-ready AI systems, exploring 
              cutting-edge research in <span className="highlight">Generative AI</span>, 
              <span className="highlight"> LLMs</span>, and <span className="highlight">AI Agents</span>. 
              I believe in the power of AI to transform industries and am committed to 
              creating innovative solutions that bridge the gap between complex algorithms 
              and practical applications.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div className="highlight-card" key={index}>
                  <span className="highlight-icon">{item.icon}</span>
                  <div className="highlight-info">
                    <span className="highlight-label">{item.label}</span>
                    <span className="highlight-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-buttons">
              <a 
                href="/resume/Aryan_Gupta_Resume.pdf" 
                className="btn btn-primary"
                download
              >
                <FaDownload /> Download Resume
              </a>
              <a 
                href="/resume/Aryan_Gupta_Resume.pdf" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          {/* About Image/Card */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="visual-card">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="window-title">aryan_profile.py</span>
                </div>
                <div className="code-content">
                  <pre>
{`class AryanGupta:
    def __init__(self):
        self.name = "Aryan Gupta"
        self.role = "AI/ML Developer"
        self.location = "Ghaziabad, India"
        
    def skills(self):
        return {
            "languages": ["Python", "Java", "C"],
            "ml_dl": ["TensorFlow", "Keras", 
                      "Scikit-learn"],
            "frameworks": ["LangChain", 
                          "LangGraph", "Streamlit"],
            "specialization": ["NLP", "RAG", 
                              "AI Agents"]
        }
    
    def achievements(self):
        return [
            "IIT Jodhpur - Top 13",
            "IIT Kharagpur - Top 30",
            "CGPA: 8.01"
        ]`}
                  </pre>
                </div>
              </div>

              <div className="experience-badge">
                <span className="exp-number">3+</span>
                <span className="exp-text">Major Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
