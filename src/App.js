import React from 'react';

import { Footer, Project, About, Education, Header, Features, Contact } from './containers';
import { Skills, Banner, Navbar } from './components';

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
    <Features />
    <Footer />
  </div>
);

export default App;
