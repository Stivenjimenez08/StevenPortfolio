import { useEffect, useState } from 'react';
import projectsData from './Projects.json'
import {CardProject} from '../../index'
import "../../StyleComponent.css"

import PortfolioImage from '../../../assets/Projects/Portfolio.png';
import TodoImage from '../../../assets/Projects/Todo.png';
import CrmImage from '../../../assets/Projects/Crm.png';

export const Projects = ({ language }) => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projectsData.hasOwnProperty(language)) {
      const projectsWithImages = projectsData[language].map(project => {
        let imageSrc = null;
        switch (project.image) {
          case 'Todo.png':
            imageSrc = TodoImage;
            break;
          case 'Crm.png':
            imageSrc = CrmImage;
            break;
          case 'Portfolio.png':
            imageSrc = PortfolioImage;
            break;
          default:
            imageSrc = null;
        }
        return { ...project, image: imageSrc };
      });
      setProjects(projectsWithImages);
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
          github={project.github}
          web={project.web}
        />
      ))}
    </div>
  )
}