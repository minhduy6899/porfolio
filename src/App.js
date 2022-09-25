import React from 'react';

import { Footer, Project, About, Education, Header, Contact } from './containers';
import { Skills, Banner, Navbar, BannerFooter } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Banner />
    <About />
    <Education />
    <Skills />
    <Project />
    <Contact />
    <BannerFooter />
    <Footer />
  </div>
);

export default App;
