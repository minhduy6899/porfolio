import React from 'react';

import { Footer, Project, About, Education, Header, Contact } from './containers';
import { Skills, Banner, Navbar, BannerFooter, BannerMiddle } from './components';

import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMYaEgLgZs1Bn7Ve__Pq0D5zQk35fcJTg",
  authDomain: "portfolio-70bdb.firebaseapp.com",
  projectId: "portfolio-70bdb",
  storageBucket: "portfolio-70bdb.appspot.com",
  messagingSenderId: "747634434847",
  appId: "1:747634434847:web:dc7faa73dcd9022cc8462a",
  measurementId: "G-J4VFR1492Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
