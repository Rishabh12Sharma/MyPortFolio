import React from "react";
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I am a software developer specializing in web and mobile application development. 
        With a passion for building innovative solutions, I have experience working with various 
        technologies such as React, Node.js, Kotlin, and Java, among others. 
      </p>
      <p>
        I believe in continuous learning and strive to keep up with the latest trends and technologies in 
        the software development world. Whether it's building a sleek UI or designing a robust backend system, 
        I enjoy the challenge of creating seamless, user-friendly applications.
      </p>
      <h3>Skills & Technologies</h3>
      <ul>
        <li>HTML, CSS, JavaScript, ReactJS</li>
        <li>Node.js, Express.js, MongoDB (MERN stack)</li>
        <li>Kotlin, Java (Android development)</li>
        <li>Tableau, PowerBI (Data visualization)</li>
        <li>Firebase, DBMS, Computer Networks</li>
      </ul>
      <h3>My Goals</h3>
      <p>
        As a software developer, my goal is to work on impactful projects that push the boundaries of technology. 
        I aspire to be part of a team where I can learn and grow, and contribute to creating meaningful applications 
        that solve real-world problems.
      </p>
      <h3>Hobbies</h3>
      <p>
        In my free time, I enjoy reading about new technologies, experimenting with side projects, and playing video games. 
        I am also passionate about traveling and discovering new cultures.
      </p>
    </section>
  );
}

export default About;
