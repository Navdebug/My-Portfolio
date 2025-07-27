// import React from 'react';
// import './App.css';
// import Navbar from './Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
      
//       <section id="hero" className="hero-section">
//         <div className="hero-content">
//           <h1>Hi, I'm Nav</h1>
//           <p>Front-End- Developer</p>
//         </div>
//       </section>
//       <section id="about" className="about-section">
//   <h2>About Me</h2>
// <p>
//   I'm a passionate <strong>Front-End Developer</strong> who loves building modern, responsive, and animated user interfaces using React.
// </p>

// </section>
// <section id="projects" className="projects-section">
//   <h2>Projects</h2>
//   <div className="projects-grid">
  
//     <div className="project-card">
//       <h3>Weather App</h3>
//       <p>A weather forecast app using OpenWeatherMap API and React Hooks.</p>
//       <button>View</button>
//       <div className="project-card">
//       <h3> Currency Converter </h3>
//       <p> Real-time currency conversion using JavaScript and async API requests. </p>
//       <button>View</button>
//     </div>
//     </div>
//     <div className="project-card">
//       <h3>tic-tak-toe Game </h3>
//       <p>Two players game with game state management and DOM manipulation</p>
//       <button>View</button>
//     </div>
//       <div className="project-card">
//       <h3>Rock Paper Scissors Game  </h3>
//       <p>Interactive game built with HTML, CSS, JavaScript</p>
//       <button>View</button>
//     </div>
//   </div>
// </section>

// <section id="skills" className="skills-section">
//   <h2>Skills</h2>
//   <div className="skills-grid">
//     <div className="skill-card">HTML5</div>
//     <div className="skill-card">CSS3</div>
//     <div className="skill-card">Tailwind CSS</div>
//     <div className="skill-card">JavaScript(ES6+)</div>
//     <div className="skill-card">React.js</div>
//     <div className="skill-card">Git</div>
//     <div className="skill-card">Bootstrap</div>
//     <div className="skill-card">Responsive Design</div>
//   </div>
// </section>
// <section id="contact" className="contact-section">
//   <h2>Contact Me</h2>
//   <p>Have a question or want to work together? Just fill out the form below or email me.</p>
  
//   <form className="contact-form">
//     <input type="text" placeholder="Your Name" required />
//     <input type="email" placeholder="Your Email" required />
//     <textarea placeholder="Your Message" rows="5" required></textarea>
//     <button type="submit">Send Message</button>
//   </form>
// </section>

//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update state on input change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log the data
    console.log('Form submitted:', formData);

    // TODO: send formData to your backend API

    // Optionally clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      <Navbar />

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Nav</h1>
          <p>Front-End- Developer</p>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate <strong>Front-End Developer</strong> who loves building modern, responsive, and animated user interfaces using React.
        </p>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Weather App</h3>
            <p>A weather forecast app using OpenWeatherMap API and React Hooks.</p>
            <button>View</button>
          </div>
          <div className="project-card">
            <h3>Currency Converter</h3>
            <p>Real-time currency conversion using JavaScript and async API requests.</p>
            <button>View</button>
          </div>
          <div className="project-card">
            <h3>tic-tak-toe Game</h3>
            <p>Two players game with game state management and DOM manipulation</p>
            <button>View</button>
          </div>
          <div className="project-card">
            <h3>Rock Paper Scissors Game</h3>
            <p>Interactive game built with HTML, CSS, JavaScript</p>
            <button>View</button>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">Tailwind CSS</div>
          <div className="skill-card">JavaScript(ES6+)</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">Bootstrap</div>
          <div className="skill-card">Responsive Design</div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Just fill out the form below or email me.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
