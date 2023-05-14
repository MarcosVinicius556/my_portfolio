import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import './project-carousel.css';

// eslint-disable-next-line react/prop-types
function ProjectCarousel({ projectList }) { 
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(`${carousel.current?.scrollWidth} ${carousel.current?.offsetWidth}`)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <div className="main-carousel">
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}> 
          <motion.div 
          className='inner'
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.8 }}>
              {
                // eslint-disable-next-line react/prop-types
                projectList.map(project => (
                                <motion.div key={project.id}> 
                                    <ProjectCard project={project}/>
                                </motion.div>
                            )   
                        )
              }
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default ProjectCarousel;