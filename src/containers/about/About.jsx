import React from 'react';
// import aboutImage from '../../assets/about.png';
import a3 from '../../assets/a3.jpg';
import './about.css';

const About = () => (
  <div className="cv__about section__padding" id="about">
    <div className="cv__about-image">
      <img src={a3} alt="about" />
    </div>
    <div className="cv__about-content">
      <h1 className="gradient__text">About me</h1>
      <h3>Basic informations</h3>
      <h4>
        I&apos;m a student of Ironhack Vietnam and i spent most of my day
        experimenting with HTML, CSS, JavaScript, React, Node, Express, and
        MongoDB. I hope to share my skills, expertise, and experience with your
        organization and clients.
      </h4>
      <div className="cv_about-content-info">
        <ul className="info-left">
          <li>Name: Nguyen Minh Duy</li>
          <li>Nguyen Huu Kien Street, Cao Lanh City</li>
        </ul>
        <ul className="info-right">
          <li>Date of birth: 07/14/1999</li>
          <li>Phone: 0939993486</li>
          <li>Occupation: Web Developer</li>
        </ul>
      </div>
      <div className="cv_about-content-socials">
        <a
          href="https://www.facebook.com/duy.minh.9693001/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square" />
        </a>
        <a
          href="https://github.com/minhduy6899"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-square-github" />
        </a>
        <a
          href="https://twitter.com/BaDzyNguyen"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter-square" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  </div>
);

export default About;
