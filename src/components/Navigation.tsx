import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <>
    <nav style={{ position: 'fixed', top: 0, left: 0, zIndex: 999, display: 'flex', justifyContent: 'space-around', width: '100%', padding: '20px', backgroundColor: 'black', fontFamily: 'Geologica' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '100px', fontWeight: 'bold', fontSize: '20px' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/roadmap">Roadmap</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
    <h1
        style={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '100px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        fontFamily: 'Geologica' 
        }}
      >
    DIAL 0UT
      </h1>
    </>
  );
};

export default Navigation;
