import {CardProject} from '../../atoms/CardProject'
import projectsData from './Projects.json'
import "../../StyleComponent.css"
import { useEffect, useState } from 'react';

export const Projects = ({ language }) => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projectsData.hasOwnProperty(language)) {
      setProjects(projectsData[language]);
    } else {
      console.log(`No hay proyectos disponibles para el idioma ${language}`);
    }
  }, [language]); 

  return (
    <div className='ContentProjects'>
        {projects.map((project) => (
        <CardProject
          key={project.id}
          title={project.title}
          image={project.image}
          text={project.text}
        />
      ))}
    </div>
  )
}