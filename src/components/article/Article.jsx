import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, time, urlSource, urlReview }) => (
  <div className="cv__project-container_article">
    <div className="cv__project-container_article-image">
      <img src={imgUrl} alt="project_image" />
    </div>
    <div className="cv__project-container_article-content">
      <div>
        <h3>{text}</h3>
        <p>{date}</p>
      </div>
      <small>{time}</small>
      <div className="cv__project-button">
        <div className="cv__project-left">
          <button type="button">
            <a href={urlSource} target="_blank" rel="noreferrer">
              Sourcecode
            </a>
          </button>
        </div>
        <div className="cv__project-right">
          <button type="button">
            <a href={urlReview} target="_blank" rel="noreferrer">
              Review
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Article;
