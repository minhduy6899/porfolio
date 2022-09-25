import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="cv__footer section__padding" id="footer">
    <section></section>
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>Minh Duy Nguyen</h3>

        <p class="footer-links">
          <a href="/#" class="link-1">
            Home
          </a>

          <a href="#about">About</a>

          <a href="#skill">Skills</a>

          <a href="#project">Projects</a>

          <a href="#contact">Contact</a>
        </p>

        <p class="footer-company-name">Minh Duy © 2022</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>339A, Nguyen Huu Kien Street, </span> Cao Lanh City
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>0939.993.486</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>minhduy140799@gmail.com</p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>Pledge </span>I pledge that I will make efforts and always
          improve my self to work better.
        </p>

        <div class="footer-icons">
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
