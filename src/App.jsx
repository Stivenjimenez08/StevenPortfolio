import { useEffect, useState } from "react";
import { Home, NavBar, AboutMe, Network, Habilities, Projects } from "./components/index";
import './Style.css'

export const App = ({ toggleTheme }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [language, setLanguage] = useState('es');
  const [activeSection, setActiveSection] = useState('home');

  const toggleThemeWrapper = () => {
    setIsDarkTheme(prevState => !prevState);
    toggleTheme(); 
  };
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };
  const handleSetActiveSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollThresholdTop = sectionTop + sectionHeight * 0.5; // Umbral ascendente
        const scrollThresholdBottom = sectionTop + sectionHeight * 0.3; // Umbral descendente
  
        if (scrollPosition >= sectionTop - window.innerHeight * 0.5 && scrollPosition < scrollThresholdTop) {
          setActiveSection(section.id);
        } else if (scrollPosition >= scrollThresholdBottom && scrollPosition < sectionTop + sectionHeight - window.innerHeight * 0.5) {
          setActiveSection(section.id);
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  
  return (
    
    <div className="contGlobal">
      <NavBar toggleTheme={toggleThemeWrapper} toggleLanguage={toggleLanguage} handleSetActiveSection={handleSetActiveSection}/>
      <Network />
      
      <section id="home" className={activeSection === 'home' ? 'fade-in active' : 'fade-in'}> <Home /> </section>
      <section id="about" className={activeSection === 'about' ? 'fade-in active' : 'fade-in'}> <AboutMe isDarkTheme={isDarkTheme} /> </section>
      <section id="skills" className={activeSection === 'skills' ? 'fade-in active' : 'fade-in'}> <Habilities isDarkTheme={isDarkTheme} /> </section>
      <section id="projects" className={activeSection === 'projects' ? 'fade-in active' : 'fade-in'}> <Projects language={language} /> </section>
    </div>
  );
}


