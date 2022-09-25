import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logoDuy.png';
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
            <a href="#wgpt3">About Me</a>
          </p>
          <p>
            <a href="#about">Skills</a>
          </p>
          <p>
            <a href="#features">Portfolio</a>
          </p>
          <p>
            <a href="#project">Contact</a>
          </p>
        </div>
      </div>
      <div className="cv__navbar-sign">
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
                <a href="#wgpt3">About me</a>
              </p>
              <p>
                <a href="#about">Skills</a>
              </p>
              <p>
                <a href="#features">Portfolio</a>
              </p>
              <p>
                <a href="#project">Contact</a>
              </p>
            </div>
            <div className="cv__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
