import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import styles from './selectedProjects.module.css';
import project1 from '../../assets/images/2.png';
import project2 from '../../assets/images/3.jpg';
import project3 from '../../assets/images/4.jpg';

const projects = [
  {
    id: 1,
    title: "Luxury Villa Renovation",
    description: "Modern transformation of a classic Mediterranean villa, featuring open spaces and seamless indoor-outdoor living. Our design approach focused on preserving the villa's historic charm while introducing contemporary elements.",
    image: project1,
    category: "Residential",
    location: "Beverly Hills",
    year: "2023"
  },
  {
    id: 2,
    title: "Urban Loft Design",
    description: "Contemporary open-space design with industrial elements, transforming a former warehouse into a sophisticated living space. The project emphasizes natural light and flexible living areas.",
    image: project2,
    category: "Commercial",
    location: "New York",
    year: "2023"
  },
  {
    id: 3,
    title: "Minimalist Beach House",
    description: "Seamless indoor-outdoor living experience with a focus on sustainable materials and natural light. The design maximizes ocean views while maintaining privacy and comfort.",
    image: project3,
    category: "Residential",
    location: "Malibu",
    year: "2022"
  }
];

const Particle = ({ style }) => {
  return <div className={styles.particle} style={style}></div>;
};

const ParticleSystem = () => {
  const particles = Array.from({ length: 30 }, (_, index) => {
    const style = {
      width: `${Math.random() * 8 + 2}px`,
      height: `${Math.random() * 8 + 2}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
    return <Particle key={index} style={style} />;
  });

  return <div className={styles.particleContainer}>{particles}</div>;
};

const BackgroundShapes = () => {
  const shapes = [
    { id: 1, className: styles.shapeOne, animate: { x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }, transition: { duration: 15, repeat: Infinity, ease: "easeInOut" } },
    // { id: 2, className: styles.shapeTwo, animate: { x: [0, -20, 0], y: [0, 30, 0], scale: [1, 0.95, 1] }, transition: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 } },
    { id: 2, className: styles.shapeTwo, animate: { rotate: [0, 360], scale: [2, 3.08, 1.3] }, transition: { duration: 20, repeat: Infinity, ease: "linear" } },

    { id: 3, className: styles.shapeThree, animate: { rotate: [0, 360], scale: [1, 1.08, 1] }, transition: { duration: 20, repeat: Infinity, ease: "linear" } },
    { id: 4, className: styles.shapeFour, animate: { scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }, transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } },
    { id: 5, className: styles.floatingCircle, animate: { y: [0, -30, 0], opacity: [0.7, 0.9, 0.7] }, transition: { duration: 10, repeat: Infinity, ease: "easeInOut" } },
    { id: 6, className: styles.floatingSquare, animate: { y: [0, 20, 0], rotate: [0, 45, 0] }, transition: { duration: 12, repeat: Infinity, ease: "easeInOut" } },
    { id: 7, className: styles.floatingTriangle, animate: { rotate: [0, 180, 0], scale: [1, 1.1, 1] }, transition: { duration: 15, repeat: Infinity, ease: "easeInOut" } },
    { id: 8, className: styles.floatingDots, animate: { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }, transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } },
    { id: 9, className: styles.floatingLine, animate: { height: ["60px", "90px", "60px"], opacity: [0.6, 0.9, 0.6] }, transition: { duration: 10, repeat: Infinity, ease: "easeInOut" } },
    { id: 10, className: styles.shapeStrokeCircle, style: { top: '15%', left: '50%', animation: 'subtleFloat 18s linear infinite' } },
    { id: 11, className: styles.shapeStrokeSquare, style: { bottom: '25%', right: '40%', animation: 'subtleFloat 20s linear infinite' } },
    { id: 12, className: styles.shapeStrokeCircle, style: { top: '60%', left: '10%', animation: 'subtleFloat 16s linear infinite' } },
  ];

  return (
    <div className={styles.backgroundShapes}>
      {shapes.map(shape => (
        <Motion.div 
          key={shape.id} 
          className={shape.className} 
          animate={shape.animate}
          transition={shape.transition}
          style={shape.style}
        />
      ))}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`${styles.projectCard} ${isEven ? styles.even : styles.odd}`}>
      <div className={styles.cardContent}>
        <div className={styles.imageWrapper}>
          <div 
            className={styles.imageParallax}
            style={{ 
              backgroundImage: `url(${project.image})`,
            }}
          />
          <div className={styles.imageOverlay} />
        </div>

        <div className={styles.textContent}>
          <div className={styles.categoryTag}>
            <span>{project.category}</span>
            <span className={styles.year}>{project.year}</span>
          </div>

          <h3 className={styles.title}>{project.title}</h3>
          
          <div className={styles.details}>
            <p className={styles.location}>{project.location}</p>
            <p className={styles.description}>{project.description}</p>
          </div>

          <Link to={`/projects/${project.id}`} className={styles.projectLink}>
            View Project
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SelectedProjects = () => {
  return (
    <section className={styles.section}>
      <ParticleSystem />
      <BackgroundShapes />
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Selected Projects</h2>
        <p className={styles.sectionSubtitle}>Discover our most impactful transformations</p>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className={styles.exploreMore}>
        <Link to="/projects" className={styles.exploreLink}>
          Explore All Projects
        </Link>
      </div>
    </section>
  );
};

export default SelectedProjects; 