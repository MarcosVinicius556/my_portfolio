import './project-card.css';

// eslint-disable-next-line react/prop-types
function ProjectCard(obj) {
  return (
    <div className="card">
        <h3 className="project-title">{obj.project.name}</h3>
        <div className="desc-container">
            <p className="project-description">{obj.project.description}</p>
        </div>
        <div className="lang-container">
            <p className="main-language">Linguagem principal: {obj.project.language}</p>
        </div>
        <a className="project-redirect" href={obj.project.html_url} target="blank">Visualizar no GitHub</a>
    </div>
  )
}

export default ProjectCard