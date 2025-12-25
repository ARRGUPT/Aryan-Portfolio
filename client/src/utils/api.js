// API utility for backend communication
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://aryan-portfolio-d2ym.onrender.com/api';

// Health check
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};

// Submit contact form
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message');
    }

    return data;
  } catch (error) {
    console.error('Contact form submission failed:', error);
    throw error;
  }
};

// Fetch projects (if needed)
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    throw error;
  }
};
