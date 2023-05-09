import './about-card.css';

// eslint-disable-next-line react/prop-types
function AboutCard({texto, img, inverse}) {
  return (
    <div className="about-card">
        { inverse && <p className="about-text">{texto}</p> }
        <img 
         src={img} 
         alt="" 
         className="about-img"
        />
        { !inverse && <p className="about-text">{texto}</p> }
    </div>
  )
}

export default AboutCard