import { AboutMe } from "./components/molecules/AboutMe/AboutMe";
import { NavBar } from "./components/molecules/NavBar/NavBar";

export const App = ({ toggleTheme }) => {

  return (
    <div>
      <NavBar toggleTheme={toggleTheme}/>
      <AboutMe/>
    </div>
  );
}


