import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendar, FaMapMarkerAlt, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'ML/DL Developer',
      company: 'Big Data Center of Excellence',
      location: 'AKGEC, Ghaziabad',
      duration: '2023 - Present',
      type: 'experience',
      description: [
        'Collaborated with a 15-member team to build and optimize Machine Learning and Deep Learning models',
        'Developed models that personalized user interactions based on behavioral patterns',
        'Focused on enhancing user experience through data-driven personalization'
      ],
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'Team Collaboration']
    },
    {
      id: 2,
      role: 'Workshop Lead - Render 3.0',
      company: 'Big Data Center of Excellence',
      location: 'AKGEC, Ghaziabad',
      duration: '2024',
      type: 'experience',
      description: [
        'Led the Render 3.0 Workshop, a comprehensive training program',
        'Taught 50+ students the foundations of web development and AI/ML',
        'Conducted hands-on sessions to provide practical experience',
        'Mentored participants in implementing real-world AI/ML solutions'
      ],
      skills: ['Leadership', 'Teaching', 'Web Development', 'AI/ML']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Ajay Kumar Garg Engineering College',
      location: 'Ghaziabad, Uttar Pradesh',
      duration: '2023 - 2027 (Expected)',
      grade: 'CGPA: 8.01',
      type: 'education'
    },
    {
      id: 2,
      degree: 'Senior Secondary Education (12th)',
      field: 'Science Stream',
      institution: 'Brij Kunwar Devi Aldrich Public School',
      location: 'Orai, Uttar Pradesh',
      duration: '2022 - 2023',
      grade: 'Percentage: 91%',
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{textAlign: 'center'}}
        >
          <span className="section-tag">CAREER JOURNEY</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="experience-grid">
          {/* Experience Section */}
          <div className="experience-column">
            <div className="column-header">
              <FaBriefcase className="column-icon" />
              <h3>Work Experience</h3>
            </div>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker">
                    <span className="marker-dot"></span>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.role}</h4>
                      <span className="timeline-company">{exp.company}</span>
                    </div>
                    
                    <div className="timeline-meta">
                      <span className="meta-item">
                        <FaCalendar /> {exp.duration}
                      </span>
                      <span className="meta-item">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                    
                    <ul className="timeline-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>▹ {item}</li>
                      ))}
                    </ul>
                    
                    <div className="timeline-skills">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="education-column">
            <div className="column-header">
              <FaGraduationCap className="column-icon" />
              <h3>Education</h3>
            </div>
            
            <div className="education-cards">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="education-card"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="edu-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="edu-content">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-field">{edu.field}</p>
                    <p className="edu-institution">{edu.institution}</p>
                    
                    <div className="edu-meta">
                      <span className="edu-duration">{edu.duration}</span>
                      <span className="edu-grade">{edu.grade}</span>
                    </div>
                    
                    <span className="edu-location">
                      <FaMapMarkerAlt /> {edu.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra Info Cards */}
            <div className="info-cards">
              <motion.div 
                className="info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FaUsers className="info-icon" />
                <span className="info-value">15+</span>
                <span className="info-label">Team Members Collaborated</span>
              </motion.div>
              
              <motion.div 
                className="info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaChalkboardTeacher className="info-icon" />
                <span className="info-value">50+</span>
                <span className="info-label">Students Trained</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
