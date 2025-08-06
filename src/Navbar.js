// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Nav's Portfolio</div>
//       <ul className="nav-links">
//         <li><a href="#hero">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><span className="theme-toggle">🌙</span></li>
  
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="logo">Nav's Portfolio</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <span 
            className="theme-toggle" 
            onClick={() => setDarkMode(!darkMode)}
            style={{ cursor: 'pointer' }}
          >
            {darkMode ? '☀️' : '🌙'}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



