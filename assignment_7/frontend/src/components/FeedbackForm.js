import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ studentName: '', course: '', rating: 5, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert("Please Login First!");

    try {
      await axios.post('http://localhost:5000/api/feedback', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Feedback Sent to DB!");
    } catch (err) {
      alert("Error submitting feedback");
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Student Feedback</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Your Name" onChange={(e) => setFormData({...formData, studentName: e.target.value})} required />
        <input type="text" placeholder="Course" onChange={(e) => setFormData({...formData, course: e.target.value})} required />
        <input type="number" min="1" max="5" placeholder="Rating (1-5)" onChange={(e) => setFormData({...formData, rating: e.target.value})} required />
        <textarea placeholder="Write review..." onChange={(e) => setFormData({...formData, message: e.target.value})} required />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;