import './projects.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import ProjectCarousel from './ProjectsComponents/ProjectCarousel/ProjectCarousel';

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
    <section className="projects" id="section-projects">
      <h1>Meus projetos</h1>
      <ProjectCarousel projectList={projects} />
    </section>
  )
}

export default Projects