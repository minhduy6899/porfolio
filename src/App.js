import React from 'react';

import { Footer, Project, About, Education, Header, Contact } from './containers';
import { Skills, Banner, Navbar, BannerFooter, BannerMiddle } from './components';

import './App.css';

const App = () => (
  <div className="app">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Banner />
    <About />
    <Education />
    <Skills />
    <BannerMiddle />
    <Project />
    <Contact />
    <BannerFooter />
    <Footer />
  </div>
);

export default App;
