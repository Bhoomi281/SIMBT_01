import React from 'react';
import './project.css'; 

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Contacts-Manager',
      description: '  Built a contacts-manager app where users can create, delete and import contacts by using CSV file.Developed User registration, log-in, log-out, Table and Tooltip components. Used JWTs for user Authentication and Authorization. Tech Stack: React, CSS, NodeJs, mongoDB, ExpressJs',
      image: require('../images/contM.jpg'),
      demoLink: 'https://shimmering-strudel-19bb7f.netlify.app/',
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'The app displays local temperature after searching location name. Responsive and attractive layout.' ,    
      image: require('../images/weather.png'),
      demoLink: 'https://startling-pudding-a021ca.netlify.app/',
    },
    {
        id: 3,
        title: 'Survey-Form',
        description: '  Built a survey-form where users can create, delete,  update question survey list. Developed User registration, log-in, log-out, preview and theme component. Built the backend using NodeJs to serve APIs & worked on database mongoDB. Used JWTs for user Authentication and Authorization.',
        image: require('../images/survey.png'),
        demoLink: 'https://astonishing-truffle-6a3637.netlify.app/',
      },
      {
        id: 4,
        title: 'Typing Master',
        description: 'a web-based application for touch typing. Touch typing is typing without looking at the keyboard. The fundamental idea is that each finger is given its own section of the keyboard and your fingers learn the location of the keyboard through practising regularly and gaining muscle memory to eventually build up speed while typing.',
        image: require('../images/typeM.png'),
        demoLink: 'https://sparkling-squirrel-164183.netlify.app/',
      },
      {
        id: 5,
        title: 'Food Blog',
        description: ' A static website template with Attractive Layout',
        image: require('../images/food.png'),
        demoLink: 'https://clinquant-kulfi-57cff7.netlify.app/',
      },
  ];

  return (
    <div id='projects' className="projects-container">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className='demo' href={project.demoLink} target="_blank" rel="noopener noreferrer">
                View 
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
