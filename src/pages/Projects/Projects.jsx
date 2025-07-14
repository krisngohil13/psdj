import React, { useState, useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Projects.module.css';
import projectImage from '../../assets/images/1.jpg';
import { projectsData } from './projectsData';

const Projects = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const patternY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const [activeMainCategory, setActiveMainCategory] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const categories = [
    {
      id: 'residential',
      title: 'Residential',
      subCategories: [
        { id: 'exclusive-homes', title: 'Exclusive Homes' },
        { id: 'multiple-residential', title: 'Multiple Residential' },
        { id: 'conservation-heritage', title: 'Conservation & Heritage' },
        { id: 'private-estates', title: 'Private Estates' }
      ]
    },
    {
      id: 'hospitality-commercial',
      title: 'Hospitality & Commercial',
      subCategories: []
    }
  ];

  const textCards = [
    {
      id: 'text1',
      title: 'Crafting Luxurious Spaces',
      description: 'Every project is thoughtfully designed to capture the essence of our clients\' aspirations, blending sophistication with practical living solutions.',
      shape: 'shape2'
    },
    {
      id: 'text2',
      title: 'Attention to Detail',
      description: 'Our philosophy embraces the art of precision, where every texture, material, and finish contributes to a cohesive, refined environment.',
      shape: 'shape2'
    },
    {
      id: 'text3',
      title: 'Timeless Design',
      description: 'We curate interiors that transcend trends, marrying classic influences with modern sensibilities to create lasting impressions.',
      shape: 'shape2'
    },
    {
      id: 'text4',
      title: 'Sustainable Living',
      description: 'From eco-friendly materials to energy-efficient solutions, our designs promote a healthier, more responsible approach to luxury interiors.',
      shape: 'shape2'
    },
    {
      id: 'text5',
      title: 'Personalized Experience',
      description: 'Collaboration is at the heart of our process, ensuring each space reflects the distinct tastes and lifestyle of those who inhabit it.',
      shape: 'shape2'
    }
  ];

  const handleMainCategoryClick = (categoryId) => {
    setActiveMainCategory(categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    if (category && category.subCategories.length > 0) {
      setActiveSubCategory(category.subCategories[0].id);
    } else {
      setActiveSubCategory(null);
    }
  };

  const getFilteredProjects = () => {
    if (activeMainCategory === 'all') {
      return projectsData;
    }
    if (activeSubCategory) {
      return projectsData.filter(project => project.category === activeSubCategory);
    }
    if (activeMainCategory === 'hospitality-commercial') {
      return projectsData.filter(project => project.category === 'hospitality-commercial');
    }
    return projectsData.filter(project => {
      const category = categories.find(cat => cat.id === activeMainCategory);
      return category?.subCategories.some(sub => project.category === sub.id);
    });
  };

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  const renderProjectCard = (project) => (
    <div 
      key={project.id} 
      className={`${styles.projectCard} ${styles[project.shape]}`}
    >
      <div className={styles.imageContainer}>
        <img 
          src={project.image}
          alt={project.title} 
          className={styles.projectImage}
        />
        <div className={styles.projectOverlay}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectLocation}>{project.location}</p>
            <p className={styles.projectArea}>{project.area}</p>
            <button 
              className={styles.viewProjectBtn}
              onClick={() => handleProjectClick(project)}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTextCard = (textCard) => (
    <div key={textCard.id} className={`${styles.textCard} ${styles[textCard.shape]}`}>
      <div className={styles.textCardContent}>
        <h3 className={styles.textCardTitle}>{textCard.title}</h3>
        <p className={styles.textCardDescription}>{textCard.description}</p>
      </div>
    </div>
  );

  const renderProjectsWithTextCards = () => {
    const filteredProjects = getFilteredProjects();
    const result = [];
    const availableTextCards = [...textCards];
    let currentRow = [];

    filteredProjects.forEach((project, index) => {
      currentRow.push(renderProjectCard(project));
      
      // If we have 3 items in the row or it's the last project
      if (currentRow.length === 3 || index === filteredProjects.length - 1) {
        // Add text card if we have any available and haven't added one to this row
        if (availableTextCards.length > 0 && Math.random() < 0.5) {
          const randomIndex = Math.floor(Math.random() * availableTextCards.length);
          const textCard = availableTextCards.splice(randomIndex, 1)[0];
          
          // Insert text card at a random position in the current row
          const insertPosition = Math.floor(Math.random() * (currentRow.length + 1));
          currentRow.splice(insertPosition, 0, renderTextCard(textCard));
        }
        
        // Add current row to results
        result.push(...currentRow);
        currentRow = [];
      }
    });

    // If we have a partial row at the end
    if (currentRow.length > 0) {
      // Add text card to the last row if we have any left
      if (availableTextCards.length > 0 && Math.random() < 0.5) {
        const randomIndex = Math.floor(Math.random() * availableTextCards.length);
        const textCard = availableTextCards.splice(randomIndex, 1)[0];
        const insertPosition = Math.floor(Math.random() * (currentRow.length + 1));
        currentRow.splice(insertPosition, 0, renderTextCard(textCard));
      }
      result.push(...currentRow);
    }

    return result;
  };

  const BounceCard = ({ className, children, onClick }) => {
    return (
      <Motion.div
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className={`${styles.bounceCard} ${className}`}
        onClick={onClick}
      >
        {children}
      </Motion.div>
    );
  };

  const CardTitle = ({ children }) => {
    return (
      <h3 className={styles.cardTitle}>{children}</h3>
    );
  };

  return (
    <div ref={containerRef} className={styles.projectsPage}>
      {/* Background Pattern */}
        <Motion.div 
        className={styles.backgroundPattern}
        style={{ y: patternY }}
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroLeft}>
        <Motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.subTitle}>Portfolio</span>
            <h1 className={styles.mainTitle}>
              Our Featured
              <span className={styles.highlightText}> Projects</span>
            </h1>
            <p className={styles.heroDescription}>
              Explore our collection of meticulously crafted spaces, where every detail 
              tells a story of innovation and timeless design.
            </p>
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
          </div>
          </div>
          </Motion.div>
        </div>

        <div className={styles.heroRight}>
          <Motion.div 
            className={styles.imageGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
          >
            <div className={styles.mainImageContainer}>
              <img src={projectImage} alt="Featured Project" className={styles.mainImage} />
            </div>
            <div className={styles.smallImagesContainer}>
              <img src={projectImage} alt="Project Detail" className={styles.smallImage} />
              <img src={projectImage} alt="Project Detail" className={styles.smallImage} />
            </div>
          </Motion.div>
      </div>
      </section>

      {/* Category Nav */}
      <div className={styles.categoryNavContainer}>
        <div className={styles.categoryNav}>
          <div className={styles.mainCategories}>
            <button
              className={`${styles.categoryButton} ${activeMainCategory === 'all' ? styles.active : ''}`}
              onClick={() => handleMainCategoryClick('all')}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${activeMainCategory === category.id ? styles.active : ''}`}
                onClick={() => handleMainCategoryClick(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
          {activeMainCategory !== 'all' && activeMainCategory !== 'hospitality-commercial' && (
            <div className={styles.subCategories}>
              {categories
                .find(cat => cat.id === activeMainCategory)
                ?.subCategories.map(subCategory => (
                  <button
                    key={subCategory.id}
                    className={`${styles.categoryButton} ${styles.subCategory} ${activeSubCategory === subCategory.id ? styles.active : ''}`}
                    onClick={() => setActiveSubCategory(subCategory.id)}
                  >
                    {subCategory.title}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {renderProjectsWithTextCards()}
      </div>

      {/* Featured Works Section */}
      <section className={styles.featuredWorksSection}>
        <div className={styles.featuredHeader}>
          <h2 className={styles.featuredTitle}>
            Featured
            <span className={styles.featuredTitleSpan}> Interior Projects</span>
          </h2>
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.featuredButton}
            onClick={() => navigate('/projects')}
          >
            Explore All Projects
          </Motion.button>
        </div>

        <Motion.div 
          className={styles.featuredGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BounceCard 
            className={styles.col4} 
            onClick={() => projectsData[0] && handleProjectClick(projectsData[0])}
          >
            <CardTitle>{projectsData[0]?.title || 'Modern Living Space'}</CardTitle>
            <div className={styles.cardImageContainer}>
              <img 
                src={projectsData[0]?.image || projectImage} 
                alt={projectsData[0]?.title || 'Modern Living Space'} 
              />
            </div>
          </BounceCard>
          <BounceCard 
            className={styles.col8}
            onClick={() => projectsData[1] && handleProjectClick(projectsData[1])}
          >
            <CardTitle>{projectsData[1]?.title || 'Luxury Villa Design'}</CardTitle>
            <div className={styles.cardImageContainer}>
              <img 
                src={projectsData[1]?.image || projectImage} 
                alt={projectsData[1]?.title || 'Luxury Villa Design'} 
              />
            </div>
          </BounceCard>
        </Motion.div>

        <Motion.div 
          className={styles.featuredGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BounceCard 
            className={styles.col8}
            onClick={() => projectsData[2] && handleProjectClick(projectsData[2])}
          >
            <CardTitle>{projectsData[2]?.title || 'Urban Penthouse'}</CardTitle>
            <div className={styles.cardImageContainer}>
              <img 
                src={projectsData[2]?.image || projectImage} 
                alt={projectsData[2]?.title || 'Urban Penthouse'} 
              />
            </div>
          </BounceCard>
          <BounceCard 
            className={styles.col4}
            onClick={() => projectsData[3] && handleProjectClick(projectsData[3])}
          >
            <CardTitle>{projectsData[3]?.title || 'Heritage Revival'}</CardTitle>
            <div className={styles.cardImageContainer}>
              <img 
                src={projectsData[3]?.image || projectImage} 
                alt={projectsData[3]?.title || 'Heritage Revival'} 
              />
            </div>
          </BounceCard>
        </Motion.div>

        <Motion.div 
          className={styles.featuredGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <BounceCard 
            className={styles.col4}
            onClick={() => projectsData[4] && handleProjectClick(projectsData[4])}
          >
            <CardTitle>{projectsData[4]?.title || 'Contemporary Studio'}</CardTitle>
            <div className={styles.cardImageContainer}>
              <img 
                src={projectsData[4]?.image || projectImage} 
                alt={projectsData[4]?.title || 'Contemporary Studio'} 
              />
            </div>
          </BounceCard>
          <BounceCard 
            className={styles.col8}
            onClick={() => projectsData[5] && handleProjectClick(projectsData[5])}
          >
            <CardTitle>{projectsData[5]?.title || 'Minimalist Retreat'}</CardTitle>
            <div className={styles.cardImageContainer}>
              <img 
                src={projectsData[5]?.image || projectImage} 
                alt={projectsData[5]?.title || 'Minimalist Retreat'} 
              />
            </div>
          </BounceCard>
        </Motion.div>
      </section>
    </div>
  );
};

export default Projects; 