import React, { useContext } from 'react';
import Article from '../../components/article/Article';
import { dice, course, pizza } from './imports';
import './project.css';

const Project = () => {
  return (
    <div className="cv__project section__padding" id="project">
      <div className="cv__project-heading">
        <i className="fa-solid fa-diagram-project" />
        &nbsp;&nbsp;
        <span className="gradient__text">Projects</span>
      </div>
      <div className="cv__project-container">
        <div className="cv__project-container_groupB">
          <Article
            imgUrl={pizza}
            text="Pizza 365 online store"
            date="This is a website for customer can be order pizza with three sizes (S, M, L) and drink. Besides that it has some featured like create, edit and delete user"
            time="4 weeks"
            urlSource={
              'https://gitlab.com/my-group1031/pizza-365-online-pizza-store.git'
            }
            urlReview={
              'https://6333197fdc8d115c4b10979f--prismatic-trifle-7b1569.netlify.app/'
            }
          />
          <Article
            imgUrl={course}
            text="Course 365 UI "
            date="This is a homepage of featured courses and course detail"
            time="2 weeks"
            urlSource={'https://gitlab.com/my-group1031/course-365-ui.git'}
            urlReview={
              'https://6333197fdc8d115c4b10979f--prismatic-trifle-7b1569.netlify.app/'
            }
          />
          <Article
            imgUrl={dice}
            text="Lucky dice casino"
            date="Lucky Dice Casino is a entertainment website, we can use username to join this game. After throw the dice we can see the result, voucher and prize."
            time="3 weeks"
            urlSource={'https://gitlab.com/my-group1031/lucky-dice-casino.git'}
            urlReview={
              'https://6333197fdc8d115c4b10979f--prismatic-trifle-7b1569.netlify.app/'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
