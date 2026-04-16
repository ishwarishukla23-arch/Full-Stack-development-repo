import React from 'react';
import FeedbackForm from './FeedbackForm';

const StudentDashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Portal</h1>
      <p>Please provide your honest feedback below.</p>
      <FeedbackForm />
    </div>
  );
};

export default StudentDashboard;