import { AboutMe } from "./components/molecules/AboutMe/AboutMe";
import { NavBar } from "./components/molecules/NavBar/NavBar";
import { Network } from "./components/molecules/Network/Network";
import './Style.css'

export const App = ({ toggleTheme }) => {

  return (
    <div className="contGlobal">
      <NavBar toggleTheme={toggleTheme}/>
      <AboutMe/>
      <Network/>
    </div>
  );
}


