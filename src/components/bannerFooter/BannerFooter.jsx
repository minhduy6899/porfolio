import React from 'react';
import './bannerFooter.css';
import node from '../../assets/languages/node.png';
import react from '../../assets/languages/react.png';
import js from '../../assets/languages/js.png';

const Banner = () => (
  <div className="cv__banner-footer">
    <div className="cv__banner-content">
      <img src={node} alt="fff" />
    </div>
    <div className="cv__banner-content react">
      <img src={react} alt="fff" />
    </div>
    <div className="cv__banner-content">
      <img src={js} alt="fff" />
    </div>
  </div>
);

export default Banner;
