import React, { useContext } from 'react';


import { Footer, Project, About, Education, Header, Contact } from './containers';
import { Skills, Banner, Navbar, BannerFooter, BannerMiddle } from './components';

import './App.css';
import { ThemeContext } from './context/themeContext';



const App = ({ props }) => {

  const context = useContext(ThemeContext)
  return (

    <div className={context.theme} >
      <div className={context.theme === 'dark' ? "gradient__bg" : 'light'}>
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
    </div >
  );
}

export default App;
