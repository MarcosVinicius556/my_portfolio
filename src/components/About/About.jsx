import { useEffect, useState } from 'react'
import AboutCard from './aboutComponents/AboutCard';
import ImgCrianca from '../../assets/kid.png';
import ImgDev from '../../assets/dev-img.png';
import ImgGuitar from '../../assets/guitar.png';
import ImgWorker from '../../assets/worker.png';
import { textoCrianca, textoJovem, textoAdulto, textoProfissional } from '../../assets/aboutText';
import './about.css';

function About() {

    //Busca o tamanho da tela sendo utilizada
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        
        return { width, height };
        };

    //State do tamanho da tela
    const [windowDimesions, setWindowDimensions] = useState(
        getWindowDimensions()
        );

    //Executa ao iniciar e adiciona um listener na tela
    useEffect(() => {
    const handleSize = () => {
        setWindowDimensions(getWindowDimensions);
    };

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
    }, []);

  return (
    <section className="about" id="section-about">
        <p className="about-title">Sobre mim</p>
        <AboutCard texto={textoCrianca} img={ImgCrianca} inverse={false} />
        <AboutCard texto={textoJovem} img={ImgGuitar} inverse={windowDimesions.width > 768} />
        <AboutCard texto={textoAdulto} img={ImgWorker} inverse={false} />
        <AboutCard texto={textoProfissional} img={ImgDev} inverse={windowDimesions.width > 768} />
    </section>
  )
}

export default About