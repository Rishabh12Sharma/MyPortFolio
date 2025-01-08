import React, { useEffect, useState } from "react";
import '../styles/Projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className={`projects-section ${isVisible ? "visible" : ""}`}>
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Wander Lust</h3>
        <p>A MERN stack travel booking application that allows users to book flights, hotels, and activities.</p>
        <p><strong>Tech Stack:</strong> MongoDB, Express.js, React, Node.js, and Firebase.</p>
        <a href="https://github.com/Rishabh12Sharma/Wander-Lust" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div className="project-card">
        <h3>ClicknBuy</h3>
        <p>An Android-based shopping app that lets users browse and purchase products online with a secure payment gateway.</p>
        <p><strong>Tech Stack:</strong> Java, Firebase, SQLite, and Retrofit.</p>
        <a href="https://github.com/Rishabh12Sharma/ClicknBuy" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
}

export default Projects;
