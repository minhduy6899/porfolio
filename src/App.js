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
  apiKey: "AIzaSyCHkydNYC7okf6ba4GRtn12y0D4YMU396w",
  authDomain: "newportfoli.firebaseapp.com",
  projectId: "newportfoli",
  storageBucket: "newportfoli.appspot.com",
  messagingSenderId: "422092072708",
  appId: "1:422092072708:web:6dd1a3ca78f6bbb5c65251",
  measurementId: "G-MNRT2V72KP"
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
