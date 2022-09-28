import React, { useContext } from 'react';
import './skills.css';
import { db, html, js, mongodb, node, react } from './imports';
import { ThemeContext } from '../../context/themeContext';

const skills = [
  {
    img: html,
    icon: 'fap fa-html5 cv__skill-icon',
    title: 'Html - Css',
    description:
      'Create buttons, insert compelling images, create compelling text, and add promotional videos… Skilled in analyzing the layout.',
  },
  {
    img: js,
    icon: 'fap fa-js cv__skill-icon',
    title: 'JavaScript',
    description:
      'Show or hide more information with the click of a button; change the color of a button when the mouse hovers over it,...',
  },
  {
    img: react,
    icon: 'fap fa-react cv__skill-icon',
    title: 'ReactJS',
    description:
      'I have basic knowledge of reactjs. React hook, function component, JSX. Use react webpack to compile project.',
  },
  {
    img: node,
    icon: 'fap fa-js cv__skill-icon',
    title: 'NodeJS',
    description:
      'Generate dynamic page content. Create, open, read, write, delete, and close files on the server. ',
  },
  {
    img: mongodb,
    icon: 'fap fa-database cv__skill-icon',
    title: 'MongoDB',
    description:
      'Uses a JSON-like format to store documents. Can nest JSON to store complex data objects',
  },
  {
    img: db,
    icon: 'fap fa-database cv__skill-icon',
    title: 'NoSQL',
    description:
      'Grasp the basics of NoSQL. Applying knowledge about NoSQL to the project',
  },
];

const Skills = () => {
  const context = useContext(ThemeContext);
  console.log('check', context);
  return (
    <div className="cv_skills section__padding" id="skill">
      <div>
        <i className="fa-solid fa-code" />
        &nbsp;&nbsp;
        <span className="gradient__text">Skills</span>
      </div>
      <div
        className={
          context.theme === 'dark'
            ? 'cv__skill-item section__padding'
            : 'cv__skill-item section__padding bg-skill'
        }
      >
        {skills.map((item, index) => (
          <div key={index} className="cv__skill-content">
            <div className="cv__skill-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="cv__skill-name">
              <h3>{item.title}</h3>
            </div>
            <div className="cv__skill-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
