import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import Navbar from './components/Navbar';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  const onLogin = (newToken, userRole) => {
    setToken(newToken);
    setRole(userRole);
  };

  const onLogout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
  };

  return (
    <Router>
      {token && <Navbar onLogout={onLogout} />}
      <Routes>
        <Route 
          path="/login" 
          element={!token ? <Login onLogin={onLogin} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/" 
          element={
            !token ? <Navigate to="/login" /> : 
            role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;