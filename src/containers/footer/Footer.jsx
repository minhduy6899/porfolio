import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="cv__footer section__padding" id="footer">
    <section></section>
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Minh Duy Nguyen</h3>

        <p className="footer-links">
          <a href="/#" className="link-1">
            Home
          </a>

          <a href="#about">About</a>

          <a href="#skill">Skills</a>

          <a href="#project">Projects</a>

          <a href="#contact">Contact</a>
        </p>

        <p className="footer-company-name">Minh Duy © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>339A, Nguyen Huu Kien Street, </span> Cao Lanh City
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>0939.993.486 (main) - 085.496.7955 (other) </p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>minhduy140799@gmail.com</p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Pledge </span>I pledge that I will make efforts and always
          improve my self to work better.
        </p>

        <div className="footer-icons">
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
    </footer>
  </div>
);

export default Footer;
