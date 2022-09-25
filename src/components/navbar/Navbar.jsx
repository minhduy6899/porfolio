import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logogmd.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
        <button type="button">Search</button>
        <input type="text" placeholder="About me..." />
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
