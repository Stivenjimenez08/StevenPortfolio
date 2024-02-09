import { AboutMe } from "./components/molecules/AboutMe/AboutMe";
import { Carousel } from "./components/molecules/carousel/Carousel";
import { NavBar } from "./components/molecules/NavBar/NavBar";
import './Style.css'

export const App = ({ toggleTheme }) => {

  return (
    <div className="contGlobal">
      <NavBar toggleTheme={toggleTheme}/>
      <AboutMe/>
      <Carousel/>
    </div>
  );
}


