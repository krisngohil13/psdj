import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import styles from './selectedProjects.module.css';
import project1 from '../../assets/images/2.webp';
import project2 from '../../assets/images/3.webp';
import project3 from '../../assets/images/4.webp';

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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const patternY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background Pattern */}
      <Motion.div 
        className={styles.backgroundPattern}
        style={{ y: patternY }}
      />
      
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