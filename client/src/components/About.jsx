import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <div className="gradient-mesh-bg">
        <img src="/images/akash.jpg" alt="Profile Photo" className="rounded-full w-full h-96" />
        <h2>Software Engineer & Full Stack Developer</h2>
        <p>Building scalable web applications with React, TypeScript, and modern CSS techniques.</p>
      </div>
    </section>
  );
};
export default About;
