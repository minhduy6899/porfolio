import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="cv__features-container__feature">
    <div className="cv__features-container__feature-title">
      <h1>{title}</h1>
      <div />
    </div>
    <div className="cv__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
