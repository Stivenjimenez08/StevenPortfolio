import {CardProject} from '../../atoms/CardProject'
import projectsData from './Projects.json'
import "../../StyleComponent.css"

export const Projects = () => {

  return (
    <div className='ContentProjects'>
        {projectsData.map((project) => (
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