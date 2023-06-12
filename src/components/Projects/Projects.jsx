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
                    Abaixo estão listados todos os projetos disponíveis no meu GitHub. Eles foram desenvolvidos com o objetivo de compreender o funcionamento de determinadas ferramentas ou simplesmente dar vida a ideias que surgiram. Sinta-se à vontade para explorar o código-fonte e testar!
                    </p>
                    <ProjectCarousel projectList={projects} />
                    </>
        }
      </section>
    </>
  )
}

export default Projects