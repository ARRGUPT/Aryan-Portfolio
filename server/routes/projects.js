const express = require('express');
const router = express.Router();

// Static projects data (can be replaced with MongoDB later)
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
        • Advanced NLP pipeline with text cleaning
        • Feature extraction using RapidFuzz fuzzy ratios and Word2Vec embeddings
        • 166MB Quora dataset preprocessing
        • XGBoost model achieving 79.1% accuracy
        • Industry benchmark performance (81% SOTA)
        • Modern Streamlit web application`,
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
        • LangSmith integration for deep observability`,
    tech: ['LangChain', 'LangGraph', 'LangSmith', 'Groq', 'SQLite', 'Streamlit'],
    github: 'https://github.com/ARRGUPT/chatbot',
    live: 'https://arrgupt-chatbot-streamlit-frontend-h4fnyi.streamlit.app/',
    category: 'ai',
    highlights: ['Agentic Workflow', 'Persistent Memory', 'Real-time Search']
  }
];

// Get all projects
router.get('/', (req, res) => {
  const { category } = req.query;
  
  if (category && category !== 'all') {
    const filtered = projects.filter(p => p.category === category);
    return res.json(filtered);
  }
  
  res.json(projects);
});

// Get single project
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  
  res.json(project);
});

module.exports = router;
