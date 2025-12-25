import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Doctor at Home',
      description: 'Engineered a RAG system in Python using LangChain, LangChain-Groq, and Hugging Face sentence transformers, enabling semantic search in 3-4 seconds response times.',
      fullDescription: `A comprehensive AI-powered medical consultation system that provides free home-based medical guidance.
        Key Features:
        • RAG System Implementation using LangChain and LangChain-Groq
        • Ingested and embedded 120MB of PDF medical textbooks
        • Stored vectors in FAISS for efficient semantic search
        • 3-4 seconds response times for medical queries
        • PromptTemplate workflow with LLaMA 3.1 (8B)
        • Interactive Streamlit interface for real-time interaction`,
      image: '/projects/ai-doctor.png',
      tech: ['Python', 'LangChain', 'Hugging Face', 'FAISS', 'Groq LLaMA', 'Streamlit'],
      github: 'https://github.com/ARRGUPT/AI_Doctor_at_Home',
      live: 'https://arrgupt-ai-doctor-at-home-app-hqwthj.streamlit.app/',
      category: 'ai',
      highlights: ['120MB Knowledge Base', '3-4s Response Time', 'RAG Architecture']
    },
    {
      id: 2,
      title: 'Quora Duplicate Question Detection',
      description: 'Engineered and optimized an NLP pipeline including text cleaning, advanced feature extraction, and Word2Vec embeddings to preprocess a 166MB Quora dataset.',
      fullDescription: `A sophisticated NLP system for detecting duplicate questions on Quora with near state-of-the-art performance.
        Key Features:
        • Advanced NLP pipeline with text cleaning (decontraction, HTML removal, stop-word filtering, stemming)
        • Feature extraction using RapidFuzz fuzzy ratios and Word2Vec embeddings
        • 166MB Quora dataset preprocessing
        • XGBoost model achieving 79.1% accuracy
        • Industry benchmark performance (81% SOTA)
        • Modern Streamlit web application for instant detection`,
      image: '/projects/quora.png',
      tech: ['Python', 'RandomForest', 'XGBoost', 'Word2Vec', 'Scikit-learn', 'NLTK', 'Streamlit'],
      github: 'https://github.com/ARRGUPT/Quora_Duplicate_Question_Detection',
      live: 'https://quoraduplicatequestiondetction-94uzt2as8hmyp4ya4pm6xv.streamlit.app/',
      category: 'ml',
      highlights: ['79.1% Accuracy', '166MB Dataset', 'NLP Pipeline']
    },
    {
      id: 3,
      title: 'LangGraph Chatbot',
      description: 'Engineered a stateful chatbot architecture using LangGraph, Groq LLM, and custom-built tools enabling real-time internet search and agentic tool orchestration.',
      fullDescription: `A sophisticated stateful chatbot with agentic capabilities and persistent memory.
        Key Features:
        • Stateful architecture using LangGraph and Groq LLM
        • Custom-built tools: DuckDuckGo search, calculator, stock-price fetcher
        • Real-time internet search bypassing model knowledge cutoff
        • SQLite checkpointer system for conversation persistence
        • Resume chat feature for seamless user experience
        • LangSmith integration for deep observability
        • Clean, responsive Streamlit UI with streaming support`,
      image: '/projects/chatbot.png',
      tech: ['LangChain', 'LangGraph', 'LangSmith', 'Groq', 'SQLite', 'Streamlit'],
      github: 'https://github.com/ARRGUPT/chatbot',
      live: 'https://arrgupt-chatbot-streamlit-frontend-h4fnyi.streamlit.app/',
      category: 'ai',
      highlights: ['Agentic Workflow', 'Persistent Memory', 'Real-time Search']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI/LLM' },
    { key: 'ml', label: 'Machine Learning' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{textAlign: 'center'}}
        >
          <span className="section-tag">PORTFOLIO</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects showcasing my skills in AI, ML, and data science
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="project-emoji">
                    {project.category === 'ai' ? '🤖' : '📊'}
                  </span>
                </div>
                <div className="project-overlay">
                  <button className="view-btn">View Details</button>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
                
                <div className="project-tech">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag more">+{project.tech.length - 4}</span>
                  )}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="view-all-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/ARRGUPT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub /> View All Projects on GitHub
          </a>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>
                
                <div className="modal-header">
                  <div className="modal-image">
                    <span className="project-emoji large">
                      {selectedProject.category === 'ai' ? '🤖' : '📊'}
                    </span>
                  </div>
                </div>
                
                <div className="modal-content">
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  
                  <div className="modal-tech">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="modal-description">
                    {selectedProject.fullDescription.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  
                  <div className="modal-links">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <FaGithub /> View Code
                    </a>
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
