/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import './contact.css';

const Contact = () => {
  const context = useContext(ThemeContext);
  return (
    <div className="cv__contact section__padding" id="contact">
      <div
        className={
          context.theme === 'dark'
            ? 'cv__contact-bg'
            : 'cv__contact-bg cv__contact-bg-light'
        }
      />
      <div className="cv__contact-map">
        <iframe
          title="home"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.2141133483183!2d105.57899391413663!3d10.48378046739533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a6f20b1ec6bf9%3A0x32f45932592ca69e!2zTmjDoCBLaMOhY2ggTWluaCBEdXkgKFRyYW5nIHRyw60gdGnhu4djIGPGsOG7m2kp!5e0!3m2!1svi!2s!4v1664116959286!5m2!1svi!2s"
          width="100%"
          height="510"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="cv__contact-info">
        <div
          className={
            context.theme === 'dark'
              ? 'cv__contact-info-bg'
              : 'cv__contact-info-bg cv__contact-info-light'
          }
        />
        <div className="cv__contact-info-content">
          <h1 className="gradient__text cv__contact-title">Contact</h1>
          <div className="cv__contact-name">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              id="name"
              className="name"
            />
          </div>
          <div className="cv__contact-email">
            <label htmlFor="">Email</label>
            <input
              placeholder="Enter your email"
              type="text"
              name="email"
              id="email"
              className="email"
            />
          </div>
          <div className="cv__contact-phone">
            <label htmlFor="">Phone number</label>
            <input
              placeholder="Enter your phone number"
              type="text"
              name="phonenumber"
              id="phonenumber"
              className="phonenumber"
            />
          </div>
          <div className="cv__contact-mess">
            <label htmlFor="mess">Message</label>
            <textarea
              placeholder="Enter your message"
              name="mess"
              id="mess"
              cols="30"
              rows="3"
            />
          </div>
          <div className="cv__contact-btn">
            <button type="button">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
