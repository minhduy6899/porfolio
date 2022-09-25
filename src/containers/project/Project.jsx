import React from 'react';
import Article from '../../components/article/Article';
import { dice, course, pizza } from './imports';
import './project.css';

const Project = () => (
  <div className="cv__project section__padding" id="project">
    <div className="cv__project-heading">
      <h1 className="gradient__text">Projects</h1>
    </div>
    <div className="cv__project-container">
      <div className="cv__project-container_groupB">
        <Article
          imgUrl={pizza}
          text="Pizza 365 online store"
          date="This is a website for customer can be order pizza with three sizes (S, M, L) and drink. Besides that it has some featured like create, edit and delete user"
          time="4 weeks"
        />
        <Article
          imgUrl={course}
          text="Course 365 UI "
          date="This is a homepage of featured courses and course detail"
          time="2 weeks"
        />
        <Article
          imgUrl={dice}
          text="Lucky dice casino"
          date="Lucky Dice Casino is a entertainment website, we can use username to join this game. After throw the dice we can see the result, voucher and prize."
          time="3 weeks"
        />
      </div>
    </div>
  </div>
);

export default Project;
