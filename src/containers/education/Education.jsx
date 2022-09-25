import React from 'react';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Feature from '../../components/feature/Feature';
import './education.css';

const Education = () => (
  <div className="cv__education section__margin" id="education">
    <div className="cv__education-heading">
      <h1 className="gradient__text">
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="graduation-icon gradient__text"
        />
        &nbsp; Education - Certificate
      </h1>
    </div>
    <div className="cv__education-container">
      <div className="cv__education-education">
        <h1 className="cv__education-title">Education</h1>
        <Feature
          title="2017 - 2021"
          text="The degree of bachelor of Finance and Banking, University of Finance – Marketing"
        />
      </div>

      <div className="cv__education-cetificate">
        <h1 className="cv__education-title">Certificate</h1>
        <Feature
          title="2019"
          text="TOEIC Certificate with score 510 issued by IIG Vietnam"
        />
        <Feature title="2020" text="MOS issued by IIG Vietnam" />
      </div>

      <div className="cv__education-Awards">
        <h1 className="cv__education-title">Honors - Awards</h1>
        <Feature
          title="2013 - 2014"
          text="Won the consolation prize in the City excellent student contest in Math"
        />
        <Feature
          title="2016 - 2017"
          text="Won the third prize in the Provincial excellent student contest in Physics"
        />
      </div>
    </div>
  </div>
);

export default Education;
