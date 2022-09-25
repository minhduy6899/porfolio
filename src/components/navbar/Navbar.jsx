import React, { useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logogmd.png';
import './navbar.css';

export var theme = '';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
  }, []);

  const toggleThemeChange = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light');
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', 'light');
      setIsDark(true);
    } else {
      localStorage.setItem('theme', 'dark');
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', 'dark');
      setIsDark(false);
    }
  };

  return (
    <div className="cv__navbar">
      <div className="cv__navbar-links">
        <div className="cv__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="cv__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About Me</a>
          </p>
          <p>
            <a href="#skill">Skills</a>
          </p>
          <p>
            <a href="#project">Project</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="cv__navbar-sign disable">
        <button type="button" className="btn-light">
          <i className="fa-regular fa-lightbulb" />
        </button>
        <button type="button" className="btn-dark">
          <i className="fa-solid fa-moon" />
        </button>
      </div>
      <div className="cv__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cv__navbar-menu_container scale-up-center">
            <div className="cv__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">About Me</a>
              </p>
              <p>
                <a href="#skill">Skills</a>
              </p>
              <p>
                <a href="#project">Project</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
            <div className="cv__navbar-sign cv__navbar-search">
              <button type="button">Search</button>
              <input type="text" placeholder="About me..." />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
