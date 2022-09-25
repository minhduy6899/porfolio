import React from 'react';
import a1 from '../../assets/a1.jpg';
import './header.css';

const Header = () => (
  <div className="cv__header section__padding" id="home">
    <div className="cv__header-content">
      <h1 className="gradient__text">I&apos;m a Student of Ironhack</h1>
      <p>
        I spent most of my day experimenting with HTML, CSS, JavaScript, React,
        Node, Express, and MongoDB. I enjoy coding and the challenge of learning
        something new everyday. I also value every career opportunity and will
        do everything in my power to add value to the company.
      </p>

      <div className="cv__header-content__input">
        <button className="btn btn-secondary" type="button">
          <a
            href="https://docs.google.com/document/d/1A0xGp3vBqUpArbDBmuN0zWkoDz_Qt6H84e966_kLzDU/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD CV
          </a>
        </button>
      </div>
    </div>

    <div className="cv__header-image">
      <img src={a1} alt="personal" />
    </div>
  </div>
);

export default Header;
