/* eslint-disable react/prop-types */
import './download-button.css';

const DownloadButton = ({ arquivo }) => {
  
    return (
        <a href={arquivo} download className='curriculum-button download'>Baixar Currículo</a>
    );
  };
  
  export default DownloadButton;