import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, 
  FaDocker, FaAws, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiKeras,
  SiStreamlit, SiJupyter, SiMysql, SiFlask, SiFastapi,
  SiPostman, SiVercel
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const skillCategories = {
    languages: {
      title: '🎨 Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95 },
        { name: 'Java', icon: <FaJava />, level: 75 },
        { name: 'C', icon: <span className="text-icon">C</span>, level: 70 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
      ]
    },
    mlLibraries: {
      title: '⚙️ ML/DL Libraries',
      skills: [
        { name: 'NumPy', icon: <SiNumpy />, level: 92 },
        { name: 'Pandas', icon: <SiPandas />, level: 90 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 88 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 82 },
        { name: 'Keras', icon: <SiKeras />, level: 80 },
      ]
    },
    frameworks: {
      title: '🛠️ Frameworks',
      skills: [
        { name: 'Streamlit', icon: <SiStreamlit />, level: 92 },
        { name: 'LangChain', icon: <span className="text-icon">🔗</span>, level: 90 },
        { name: 'LangGraph', icon: <span className="text-icon">📊</span>, level: 85 },
        { name: 'Flask', icon: <SiFlask />, level: 78 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 75 },
      ]
    },
    tools: {
      title: '🔧 Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 88 },
        { name: 'GitHub', icon: <FaGithub />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 70 },
        { name: 'AWS', icon: <FaAws />, level: 65 },
        { name: 'MySQL', icon: <SiMysql />, level: 78 },
      ]
    }
  };

  const techStack = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'LangChain', icon: <span>🔗</span> },
    { name: 'Streamlit', icon: <SiStreamlit /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'Jupyter', icon: <SiJupyter /> },
  ];

  const coreSkills = [
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Deep Learning', icon: '🧠' },
    { name: 'Natural Language Processing', icon: '💬' },
    { name: 'Computer Vision', icon: '👁️' },
    { name: 'Generative AI', icon: '✨' },
    { name: 'AI Agents', icon: '🤝' },
    { name: 'Data Analysis', icon: '📊' },
    { name: 'Data Science', icon: '🔬' },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{textAlign:'center'}}
        >
          <span className="section-tag">MY EXPERTISE</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring AI ideas to life
          </p>
        </motion.div>

        {/* Skill Tabs */}
        <div className="skills-tabs">
          {Object.keys(skillCategories).map((key) => (
            <button
              key={key}
              className={`tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {skillCategories[key].title}
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <motion.div 
          className="skills-content"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <div className="skill-name">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="tech-stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="tech-title">Technologies I Work With</h3>
          <div className="tech-icons">
            {techStack.map((tech, index) => (
              <motion.div 
                className="tech-icon" 
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tech.icon}
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          className="core-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="tech-title">Core Competencies</h3>
          <div className="core-grid">
            {coreSkills.map((skill, index) => (
              <motion.div 
                className="core-item" 
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="core-icon">{skill.icon}</span>
                <span className="core-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
