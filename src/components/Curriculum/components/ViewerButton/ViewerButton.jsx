/* eslint-disable react/prop-types */
import './viewer-button.css';

const ViewerButton = ({ arquivo }) => {
  
    return (
        <a href={arquivo} target="_blank" rel="noreferrer" className='curriculum-button view'>Visualizar</a>
    );
  };
  
  export default ViewerButton;