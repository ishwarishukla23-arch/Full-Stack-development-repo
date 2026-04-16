import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/feedback');
        setFeedbacks(res.data);
      } catch (err) {
        console.error("Error fetching feedback");
      }
    };
    fetchFeedback();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Teacher Portal - Course Feedback</h1>
      <div style={{ marginTop: '20px' }}>
        {feedbacks.length === 0 ? <p>No feedback received yet.</p> : 
          feedbacks.map(f => (
            <div key={f._id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
              <h3>{f.course}</h3>
              <p><strong>Rating:</strong> {f.rating}/5</p>
              <p><strong>Review:</strong> {f.message}</p>
              <small>Submitted by: {f.studentName}</small>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TeacherDashboard;