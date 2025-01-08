import React, { useEffect, useState } from "react";
import '../styles/Skills.css';

function Skills() {
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
    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className={`skills-section ${isVisible ? "visible" : ""}`}>
      <h2>My Skills</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>ReactJS, Node.js, MongoDB</li>
        <li>Android Development (Kotlin, Firebase)</li>
        <li>Tableau, PowerBI</li>
      </ul>
    </section>
  );
}

export default Skills;
