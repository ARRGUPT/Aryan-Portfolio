import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'IIT Jodhpur DevQuest Hackathon',
      subtitle: 'Finalist - Top 13',
      description: 'Competed against 60+ teams from across India and secured a place in the Top 13 finalists. Demonstrated exceptional machine learning skills.',
      icon: <FaTrophy />,
      color: '#FFD700',
      role: 'ML Developer',
      highlights: ['60+ Teams', 'Top 13', 'National Level']
    },
    {
      id: 2,
      title: 'IIT Kharagpur Data Science Hackathon',
      subtitle: 'Top 30 Position',
      description: 'Competed against 500+ teams nationwide and achieved a Top 30 position, representing top 6% of all participants.',
      icon: <FaMedal />,
      color: '#C0C0C0',
      role: 'ML Developer',
      highlights: ['500+ Teams', 'Top 6%', 'Data Science']
    },
    {
      id: 3,
      title: 'CodeChef Profile',
      subtitle: 'Rating: 1284+',
      description: 'Active competitive programmer with consistent problem-solving practice. Building strong algorithmic and data structure foundation.',
      icon: <FaCode />,
      color: '#CD7F32',
      role: 'Competitive Programmer',
      link: 'https://www.codechef.com/users/arrgupt',
      highlights: ['1284+ Rating', 'Problem Solving', 'DSA']
    }
  ];

  const stats = [
    { value: 'Top 13', label: 'IIT Jodhpur Finalist', icon: '🏆' },
    { value: 'Top 30', label: 'IIT Kharagpur', icon: '🥈' },
    { value: '500+', label: 'Teams Competed Against', icon: '👥' },
    { value: '8.01', label: 'Academic CGPA', icon: '📚' },
  ];

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{textAlign: 'center'}}
        >
          <span className="section-tag">RECOGNITION</span>
          <h2 className="section-title">Achievements & Highlights</h2>
          <p className="section-subtitle">
            Recognitions and milestones in my journey as an AI/ML developer
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="stats-row">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="stat-emoji">{stat.icon}</span>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-text">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="achievement-header">
                <div 
                  className="achievement-icon"
                  style={{ color: achievement.color }}
                >
                  {achievement.icon}
                </div>
                <div className="achievement-badge">{achievement.role}</div>
              </div>
              
              <h3 className="achievement-title">{achievement.title}</h3>
              <span className="achievement-subtitle">{achievement.subtitle}</span>
              
              <p className="achievement-description">{achievement.description}</p>
              
              <div className="achievement-highlights">
                {achievement.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-item">{highlight}</span>
                ))}
              </div>
              
              {achievement.link && (
                <a 
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-link"
                >
                  View Profile <FaExternalLinkAlt />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications/Languages */}
        <motion.div 
          className="extra-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-section">
            <h4 className="info-title">🏆 Key Strengths</h4>
            <div className="info-tags">
              <span className="info-tag">Problem Solving</span>
              <span className="info-tag">Hackathon Experience</span>
              <span className="info-tag">Team Leadership</span>
              <span className="info-tag">Quick Learner</span>
            </div>
          </div>
          
          <div className="info-section">
            <h4 className="info-title">🌐 Languages</h4>
            <div className="languages">
              <div className="language-item">
                <span className="lang-name">English</span>
                <span className="lang-level">Fluent</span>
              </div>
              <div className="language-item">
                <span className="lang-name">Hindi</span>
                <span className="lang-level">Native</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
