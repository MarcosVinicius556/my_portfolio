import './projects.css'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import ProjectCarousel from './ProjectsComponents/ProjectCarousel/ProjectCarousel';

function Projects() {

  const [projects, setProjetcts] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const carousel = useRef();

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

  useEffect(()=>{
      setScreenWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <section className="projects">
      <h1>Meus projetos</h1>
      <ProjectCarousel projectList={projects} />
    </section>
  )
}

export default Projects