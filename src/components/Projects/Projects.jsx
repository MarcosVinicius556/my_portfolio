import './projects.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import ProjectCard from './ProjectsComponents/ProjectCard';

function Projects() {

  const [projects, setProjetcts] = useState([]);

  useEffect(() =>{
    const base_url = 'https://api.github.com/users/MarcosVinicius556/repos';
    axios.get(base_url)
         .then(promisse => {
           const projects = promisse.data;
           setProjetcts(projects);
         })
         .catch(error => {
            console.log(error);
         });
  }, []);

  return (
    <section className="projects">
      <h1>Meus projetos</h1>
      <div className="projects-container">
        {
          projects.map(project => {
            return(
              <ProjectCard project={project} key={project.id}/>
            );
          })
        }
        </div>
    </section>
  )
}

export default Projects