import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Resources from './components/Resources';
import Footer from './components/Footer';
import { portfolioData } from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header contact={portfolioData.contact} />
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          about={portfolioData.about}
        />
        <WorkExperience experiences={portfolioData.workExperience} />
        <Skills skills={portfolioData.skills} />
        <Education education={portfolioData.education} />
        <Projects projects={portfolioData.projects} />
        <Resources resources={portfolioData.resources} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;