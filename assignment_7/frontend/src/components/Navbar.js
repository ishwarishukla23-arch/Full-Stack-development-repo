import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav style={{ padding: '15px', background: '#282c34', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link style={{ color: 'white', marginRight: '20px' }} to="/">Dashboard</Link>
      </div>
      <button onClick={onLogout} style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Logout</button>
    </nav>
  );
};

export default Navbar;