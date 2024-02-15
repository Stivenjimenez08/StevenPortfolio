import { useState } from "react";
import { Home } from "./components/molecules/Home/Home";
import { NavBar } from "./components/molecules/NavBar/NavBar";
import { AboutMe } from "./components/molecules/AboutMe/AboutMe";
import { Network } from "./components/molecules/Network/Network";
import { Habilities } from "./components/molecules/Habilities/Habilities";
import { Projects } from "./components/molecules/Projects/Projects";
import './Style.css'

export const App = ({ toggleTheme }) => {
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
      <NavBar toggleTheme={toggleThemeWrapper} toggleLanguage={toggleLanguage}/>
      <Home/>
      <Network/>
      <AboutMe isDarkTheme={isDarkTheme}/>
      <Habilities isDarkTheme={isDarkTheme}/>
      <Projects language={language}/>
    </div>
  );
}


