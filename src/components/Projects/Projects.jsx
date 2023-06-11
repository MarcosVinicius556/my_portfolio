import './projects.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import ProjectCarousel from './ProjectsComponents/ProjectCarousel/ProjectCarousel';
import Loading from './ProjectsComponents/Loading/Loading';

function Projects() {

  const [projects, setProjetcts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const base_url = 'https://api.github.com/users/MarcosVinicius556/repos';
    axios.get(base_url)
         .then(promisse => {
           const projects = promisse.data;
           setProjetcts(projects);
           setLoading(false);
         })
         .catch(error => {
            console.log(error);
         });
  }, []);

  return (
    <>
      <section className="projects" id="section-projects">
        { loading ? <Loading /> :
                  <>
                    <h1>Meus projetos</h1>
                    <p className='projects-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Recusandae, accusamus quaerat corporis, voluptas aut minus
                      perferendis iure non iste fuga atque ullam magni.
                      Nulla repellat cum neque quidem accusamus soluta.
                    </p>
                    <ProjectCarousel projectList={projects} />
                    </>
        }
      </section>
    </>
  )
}

export default Projects