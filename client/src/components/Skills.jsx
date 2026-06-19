import React from 'react';
import { LightbulbIcon, CodeIcon, DatabaseIcon } from '../icons';

const Skills = () => {
  const skillIcons = {
    "Neural Networks": LightbulbIcon,
    "React": CodeIcon,
    "JavaScript": CodeIcon,
    "Node.js": CodeIcon,
    "Database": DatabaseIcon
  };

  const skills = [
    { name: "Neural Networks", level: 90, icon: skillIcons."Neural Networks" || LightbulbIcon },
    { name: "React", level: 85, icon: skillIcons."React" || CodeIcon },
    { name: "JavaScript", level: 80, icon: skillIcons."JavaScript" || CodeIcon },
    { name: "Node.js", level: 75, icon: skillIcons."Node.js" || CodeIcon },
    { name: "Database", level: 70, icon: skillIcons."Database" || DatabaseIcon }
  ];

  return (
    <section className="skills-section">
      <h1>Skills</h1>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">
              {skill.icon}
            </div>
            <div className="skill-details">
              <h3>{skill.name}</h3>
              <div className="progress-bar" style={{ width: `${skill.level}%` }}>
                <div className="shimmer-effect" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
