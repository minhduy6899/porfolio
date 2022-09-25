import React from 'react';
import './banner.css';

const Banner = () => (
  <div className="cv__banner">
    <div className="cv__banner-content">
      <p>Hi! I am Duy</p>
      <h3>Thank you for spending time with me!</h3>
    </div>
    <div className="cv__banner-btn">
      <button type="button">
        <a
          href="https://drive.google.com/drive/folders/1pcBj2nF35ecuUfEBRTuIP8Ccwg0kcr18?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Get more imformation
        </a>
      </button>
    </div>
  </div>
);

export default Banner;
