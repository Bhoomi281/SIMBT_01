import React from 'react';
import './about.css'; // Import the CSS file for styling

const About = () => {
  const skills = [
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'CSS', percentage: 80 },
    { skill: 'HTML', percentage: 85 },
    { skill: 'React', percentage: 75 },
    { skill: 'NodeJs', percentage: 70 },
    { skill: 'MongoDB', percentage: 70 },
    { skill: 'Git', percentage: 60 },
  ];
  return (
    <div id="about">
      <div className="content">
        <div className="card">
          <div className="card-left">
            <h2>About Me</h2>
            <p>
            I am an aspiring full stack developer and a determined problem solver with 8 months of coding experience. I have a passion for building scalable web applications. Throughout my journey as a developer, I have gained proficiency in React, JavaScript, CSS, Node.js, MongoDB, and Express.js. I enjoy creating responsive and attractive layouts that enhance the user experience.
              <br />
              <br />
              Education-wise, I completed a Full Stack Web Development course at 10X Academy from July 2022 to May 2023. I also hold a B.Sc degree in Mathmatics from Lucknow University .
              <br />
              <br />
              Apart from my technical skills, I possess valuable other skills such as Ms-Office , Typing ,  being a team player, managing time effectively, and adapting to new situations. These skills have been instrumental in collaborating with teams and delivering successful projects.
            </p>
          </div>
          <div className="card-right">
            <h2>Technical Skills</h2>
            {skills.map((skill) => (
            <div className="skill-bar" key={skill.skill}>
              <span className="skill-name">{skill.skill}</span>
              <div className="bar">
                <div className="progress" style={{ width: `${skill.percentage}%` }}>
                  <span className="percentage">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
