import DownloadButton from './components/DownloadButton/DownloadButton';
import ViewerButton from './components/ViewerButton/ViewerButton';
import arquivo from '../../assets/curriculo.pdf';
import './curriculum.css';

function Curriculum() {

  return (
    <section className='curriculum-page'>
      <h1>Currículo</h1>
      <div className="curriculum-content">
        
      </div>
      <div className='buttons-container'>
        <DownloadButton arquivo={arquivo}/>
        <ViewerButton arquivo={arquivo}/>
      </div>
    </section>
  );
}

export default Curriculum;