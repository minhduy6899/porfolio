import React, { useContext, useEffect, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logogmd.png';
import { ThemeContext } from '../../context/themeContext';
import './navbar.css';

export var theme = '';

const Navbar = ({ props }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <div className="cv__navbar">
      <div className="cv__navbar-bg"></div>
      <div className="cv__navbar-links">
        <div className="cv__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div
          className={
            context.theme === 'dark'
              ? 'cv__navbar-links_container'
              : 'cv__navbar-links_container nav__text-dark'
          }
        >
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
        <button
          onClick={context.toggleTheme}
          type="button"
          className="btn-light"
        >
          {context.theme === 'dark' ? (
            <i className="fa-regular fa-lightbulb" />
          ) : (
            <i className="fa-solid fa-moon" />
          )}
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
              <button
                onClick={context.toggleTheme}
                type="button"
                className="btn-light"
              >
                {context.theme === 'dark' ? (
                  <i className="fa-regular fa-lightbulb" />
                ) : (
                  <i className="fa-solid fa-moon" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
