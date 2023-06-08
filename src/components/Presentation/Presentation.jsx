import './presentation.css';
import { Link } from 'react-router-dom';

function Presentation() {
  return (
    <> 
    <section id="section-presentation">

        <div id="dev-data">
            <h1 className="dev-name">
                Marcos Vinicius
            </h1>
            <h2 className="dev-description">
                Fullstack Software Developer
            </h2>
        </div>

        <Link className="see-more" to="/about">Ver mais...</Link>
    </section>
    </>
  )
}

export default Presentation