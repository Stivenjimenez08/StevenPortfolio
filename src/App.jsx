import { useState } from "react";
import { useRef } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Home, NavBar, AboutMe, Network, Habilities, Projects } from "./components/index";
import './Style.css'

export const App = ({ toggleTheme }) => {

  const aboutRef = useRef(null); 
  const networkRef = useRef(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [language, setLanguage] = useState('es');

  const toggleThemeWrapper = () => {
    setIsDarkTheme(prevState => !prevState);
    toggleTheme(); 
  };
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    
    <div className="contGlobal">
      <NavBar toggleTheme={toggleThemeWrapper} toggleLanguage={toggleLanguage} />
      <Network />
      
      <section id="home"> <Home /> </section>
      <section id="about"> <AboutMe isDarkTheme={isDarkTheme} /> </section>
      <section id="skills"> <Habilities isDarkTheme={isDarkTheme} /> </section>
      <section id="projects"> <Projects language={language} /> </section>
    </div>

    // <div className="contGlobal">
    //   <NavBar toggleTheme={toggleThemeWrapper} toggleLanguage={toggleLanguage}/>
    //   <Home/>
    //   <Network/>
    //   <AboutMe isDarkTheme={isDarkTheme}/>
    //   <Habilities isDarkTheme={isDarkTheme}/>
    //   <Projects language={language}/>
    // </div>
  );
}


