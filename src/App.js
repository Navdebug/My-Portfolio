
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
    {[
      {
        name: "Portfolio Website",
        description:
          "Created a React.js-based portfolio site to showcase front-end projects, demonstrating expertise in component design, routing, and responsive UI development. Deployed with GitHub Pages reflecting strong attention to UX best practices.",
        link: "https://navdebug.github.io/My-Portfolio/",
      },
      {
        name: "Currency Converter",
        description:
          "Real-time currency conversion using JavaScript and async API requests with input validation and dynamic exchange rate display.",
        link: "https://navdebug.github.io/Currency-Converter/",
      },
      {
        name: "Tic Tac Toe Game",
        description:
          "Built using HTML, CSS, and JavaScript with win condition checks and interactive UI updates.",
        link: "https://navdebug.github.io/tic-tak-toe-/",
      },
      {
        name: "Rock Paper Scissors Game",
        description:
          "Implemented game logic using JavaScript event handling and DOM manipulation for real-time user interaction.",
        link: "https://navdebug.github.io/Rock-Paper-Scissors/",
      },
      {
        name: "HTML Basic Website (Punjabi)",
        description:
          "Static HTML website tailored for Punjabi-language users with localized content and regional accessibility.",
        link: "https://navdebug.github.io/HTML-basics-in-Punjabi-/",
      },
    ].map((project, index) => (
      <div key={index} className="project-card">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <button onClick={() => window.open(project.link, "_blank")}>View</button>
      </div>
    ))}
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
