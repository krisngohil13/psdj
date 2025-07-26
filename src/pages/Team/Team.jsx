import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './Team.module.css';
import projectImage from '../../assets/images/03_LIVING_03.webp';
import projectImage2 from '../../assets/images/32.webp';
import projectImage3 from '../../assets/images/07.webp';
import projectImage4 from '../../assets/images/44.webp';
// Import team member images
import teamImage1 from '../../assets/images/18.webp';
import teamImage2 from '../../assets/images/32.webp';
import teamImage3 from '../../assets/images/3.webp';
import teamImage4 from '../../assets/images/4.webp';
import heroImage from '../../assets/images/hero.webp';
import { 
  RiAwardLine, RiLightbulbLine, RiHeartLine,
  RiShieldStarLine, RiMedalLine, RiHandHeartLine, RiPlantLine
} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const containerRef = useRef(null);
  const teamSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: teamScrollProgress } = useScroll({
    target: teamSectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Create parallax transforms for each team member
  const parallaxY1 = useTransform(teamScrollProgress, [0, 1], ['-20%', '20%']);
  const parallaxY2 = useTransform(teamScrollProgress, [0, 1], ['20%', '-20%']);
  const parallaxY3 = useTransform(teamScrollProgress, [0, 1], ['-15%', '15%']);
  const parallaxY4 = useTransform(teamScrollProgress, [0, 1], ['15%', '-15%']);
  const parallaxY5 = useTransform(teamScrollProgress, [0, 1], ['-25%', '25%']);

  const parallaxTransforms = [parallaxY1, parallaxY2, parallaxY3, parallaxY4, parallaxY5];

  const teamMembers = [
    {
      id: 1,
      name: 'Param Bhatt',
      role: 'Creative Design Head',
      education: "Bachelor's in Interior Design and Master's from the UK in Interior Architecture & Design",
      description: 'Param brings artistic storytelling and global finesse to every project.',
      expertise: ['Spatial Planning', 'Luxury Design', 'Material Innovation'],
      achievements: ['Best Designer Award 2022', '15+ International Projects'],
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      image: teamImage1
    },
    {
      id: 2,
      name: 'Soham Lashkari',
      role: 'Creative Design Head',
      education: "Interior Design graduate from India with a Master's from the UK in Interior Architecture & Design",
      description: 'Soham blends European design sensibilities with practical experience from the UK.',
      expertise: ['Contemporary Design', 'Sustainable Solutions', 'Space Optimization'],
      achievements: ['Sustainable Design Award', '20+ Luxury Projects'],
      quote: "Good design is obvious. Great design is transparent.",
      image: teamImage2
    },
    {
      id: 3,
      name: 'Devang Kacha',
      role: 'Technical Head',
      education: 'Civil Engineer and Interior Design graduate from a prestigious Indian college',
      description: 'Devang ensures structural integrity and flawless execution.',
      expertise: ['Technical Planning', 'Project Management', 'Quality Control'],
      achievements: ['Excellence in Execution 2023', '100+ Projects Delivered'],
      quote: "Details make perfection, and perfection is not a detail.",
      image: teamImage3
    },
    {
      id: 4,
      name: 'Dhwani Sakriya',
      role: 'Architectural Strategist',
      education: 'Architecture graduate from India and member of Council of Architecture (COA) professional',
      description: 'Dhwani drives contextual, sustainable design thinking.',
      expertise: ['Sustainable Architecture', 'Urban Planning', 'Green Building'],
      achievements: ['LEED Certification Expert', 'Sustainable Design Leader'],
      quote: "Architecture should speak of its time and place, but yearn for timelessness.",
      image: teamImage4
    },
    {
      id: 5,
      name: 'Jigar Talsaniya',
      role: 'Design & Fine Arts Director',
      education: "Interior Design graduate with a Master's in Fine Arts",
      description: 'Jigar integrates art, detail, and materiality into refined spatial experiences.',
      expertise: ['Art Integration', 'Custom Furniture', 'Material Selection'],
      achievements: ['Design Excellence Award', 'Featured in Design Magazine'],
      quote: "Art is the highest form of hope.",
      image: heroImage
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const navigate = useNavigate();

  return (
    <div ref={containerRef} className={styles.teamPage}>
      {/* Parallax Background */}
      <Motion.div 
        className={styles.parallaxBg}
        style={{ 
          y: useTransform(smoothProgress, [0, 1], ['0%', '30%']),
          opacity: useTransform(smoothProgress, [0, 0.5], [1, 0.5])
        }}
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className={styles.heroGrid}>
            <Motion.div 
              className={styles.heroLeft}
              variants={fadeInUp}
            >
              <span className={styles.subTitle}>Our Team</span>
              <h1 className={styles.mainTitle}>
                Meet the Visionaries Behind
                <br />
                <span className={styles.titleSpan}>Exceptional Spaces</span>
              </h1>
              <p className={styles.description}>
                Our diverse team of architects, designers, and visionaries brings together decades of expertise 
                to transform spaces into extraordinary experiences. Each member contributes unique perspectives 
                and innovative solutions to every project.
              </p>
            </Motion.div>

            <Motion.div 
              className={styles.heroRight}
              variants={fadeInUp}
            >
              <Motion.div 
                className={styles.imageGrid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className={styles.mainImageContainer}>
                  <img 
                    src={projectImage} 
                    alt="Team at work" 
                    className={styles.mainImage}
                  />
                </div>
                <div className={styles.smallImagesContainer}>
                  <img 
                    src={projectImage2} 
                    alt="Design discussion" 
                    className={styles.smallImage}
                  />
                  <img 
                    src={projectImage3} 
                    alt="Project planning" 
                    className={styles.smallImage}
                  />
                </div>
              </Motion.div>
            </Motion.div>
          </div>

        </Motion.div>
      </section>

      {/* Team Grid Section */}
      <section ref={teamSectionRef} className={styles.teamSection}>
        <Motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Our Creative Minds</h2>
          <p className={styles.sectionSubtitle}>
            Meet the talented individuals who bring vision to life
          </p>
        </Motion.div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => {
            return (
              <Motion.div 
                key={member.id}
                className={styles.teamCard}
                initial={{ 
                  opacity: 0,
                  y: 100,
                  scale: 0.9,
                  rotateX: -15
                }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Role Text */}
                <Motion.div 
                  className={styles.backgroundRole}
                  style={{ 
                    y: parallaxTransforms[index] || parallaxY1
                  }}
                >
                  {member.role.split(' ').map((word, i) => (
                    <span key={i} className={styles.roleWord}>{word}</span>
                  ))}
                </Motion.div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  {/* Member Image */}
                  <Motion.div 
                    className={styles.memberImageContainer}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                    }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={styles.memberImage}
                    />
                    <div className={styles.imageOverlay} />
                  </Motion.div>

                  {/* Member Info */}
                  <div className={styles.memberInfo}>
                    <Motion.h3 
                      className={styles.memberName}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {member.name}
                    </Motion.h3>
                    
                    <Motion.p 
                      className={styles.memberRoleText}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {member.role}
                    </Motion.p>

                    <Motion.div 
                      className={styles.memberDivider}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    />

                    <Motion.p 
                      className={styles.memberDescription}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {member.description}
                    </Motion.p>

                    <Motion.div 
                      className={styles.memberExpertise}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <h4>Expertise</h4>
                      <div className={styles.expertiseList}>
                        {member.expertise.map((skill, i) => (
                          <span key={i} className={styles.expertiseTag}>{skill}</span>
                        ))}
                      </div>
                    </Motion.div>

                    <Motion.blockquote 
                      className={styles.memberQuote}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      "{member.quote}"
                    </Motion.blockquote>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={styles.cardDecorations}>
                  <div className={styles.cornerDecoration} />
                  {/* <div className={styles.sideDecoration} /> */}
                </div>
              </Motion.div>
            );
          })}
        </div>
      </section>

      {/* Unified Culture & Excellence Section */}
      <section className={styles.unifiedSection}>
        <Motion.div 
          className={styles.parallaxBackground}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{ 
            y: useTransform(smoothProgress, [0, 1], ['0%', '-20%'])
          }}
        />
        
        <div className={styles.contentWrapper}>
          <Motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <span className={styles.sectionLabel}>Our DNA</span>
            <h2>Culture & Excellence</h2>
            <p>Driven by innovation, guided by values</p>
          </Motion.div>

          <Motion.div 
            className={styles.treeContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Root Node */}
            <Motion.div 
              className={styles.rootNode}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <div className={styles.rootIcon}>
                <RiAwardLine />
              </div>
              <h3 className={styles.rootTitle}>Excellence</h3>
              <p className={styles.rootSubtitle}>Our Foundation</p>
            </Motion.div>

            {/* Branch Container */}
            <Motion.div 
              className={styles.branchContainer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              {/* Values Branch */}
              <Motion.div 
                className={styles.branchNode}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className={styles.branchIcon}>
                  <RiHeartLine />
                </div>
                <h4 className={styles.branchTitle}>Values</h4>
                <p className={styles.branchSubtitle}>Core Principles</p>
              </Motion.div>

              {/* Achievements Branch */}
              <Motion.div 
                className={styles.branchNode}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className={styles.branchIcon}>
                  <RiShieldStarLine />
                </div>
                <h4 className={styles.branchTitle}>Achievements</h4>
                <p className={styles.branchSubtitle}>Our Success</p>
              </Motion.div>
            </Motion.div>

            {/* Leaf Container */}
            <Motion.div 
              className={styles.leafContainer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              {/* Value Leaves */}
              <Motion.div 
                className={styles.leafNode}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className={styles.leafIcon}>
                  <RiLightbulbLine />
                </div>
                <h5 className={styles.leafTitle}>Innovation</h5>
                <p className={styles.leafSubtitle}>First</p>
              </Motion.div>

              <Motion.div 
                className={styles.leafNode}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.9,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className={styles.leafIcon}>
                  <RiHandHeartLine />
                </div>
                <h5 className={styles.leafTitle}>Client</h5>
                <p className={styles.leafSubtitle}>Centric</p>
              </Motion.div>

              <Motion.div 
                className={styles.leafNode}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 1.0,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className={styles.leafIcon}>
                  <RiPlantLine />
                </div>
                <h5 className={styles.leafTitle}>Sustainable</h5>
                <p className={styles.leafSubtitle}>Thinking</p>
              </Motion.div>

              {/* Achievement Leaves */}
              <Motion.div 
                className={styles.leafNode}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 1.1,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className={styles.leafIcon}>
                  <RiAwardLine />
                </div>
                <h5 className={styles.leafTitle}>Design</h5>
                <p className={styles.leafSubtitle}>Excellence</p>
              </Motion.div>

              <Motion.div 
                className={styles.leafNode}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 1.2,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className={styles.leafIcon}>
                  <RiMedalLine />
                </div>
                <h5 className={styles.leafTitle}>Industry</h5>
                <p className={styles.leafSubtitle}>Leadership</p>
              </Motion.div>

              <Motion.div 
                className={styles.leafNode}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 1.3,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <div className={styles.leafIcon}>
                  <RiShieldStarLine />
                </div>
                <h5 className={styles.leafTitle}>Client</h5>
                <p className={styles.leafSubtitle}>Success</p>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className={styles.collaborationSection}>
        <div className={styles.collaborationWrapper}>
          <Motion.div 
            className={styles.collaborationHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Let's Work Together</h2>
            <p>Transform your vision into reality with our expert team of designers and architects.</p>
          </Motion.div>

          <Motion.div 
            className={styles.collaborationGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Side - Text Content */}
            <Motion.div 
              className={styles.collaborationText}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <div className={styles.joiningElement + ' ' + styles.joiningLeft}></div>
              <h3>Ready to Create Something Extraordinary?</h3>
              <p>
                Join forces with our passionate team to bring your vision to life. 
                We combine creativity, expertise, and collaboration to deliver 
                exceptional results that exceed expectations.
              </p>
              <Motion.button 
                className={styles.collaborationButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'auto' }); }}
              >
                Start a Project
              </Motion.button>
            </Motion.div>

            {/* Right Side - Image Grid */}
            <Motion.div 
              className={styles.collaborationImages}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <div className={styles.joiningElement + ' ' + styles.joiningRight}></div>
              
              <Motion.div 
                className={`${styles.collaborationImage} ${styles.image1}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <img src={projectImage2} alt="Team Collaboration" />
              </Motion.div>
              
              <Motion.div 
                className={`${styles.collaborationImage} ${styles.image2}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <img src={projectImage3} alt="Design Process" />
              </Motion.div>
              
              <Motion.div 
                className={`${styles.collaborationImage} ${styles.image3}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <img src={projectImage4} alt="Project Planning" />
              </Motion.div>
            </Motion.div>
          </Motion.div>
{/* stats */}
          <Motion.div 
            className={styles.collaborationStats}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <Motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <span className={styles.statNumber}>150+</span>
              <p>Projects Completed</p>
            </Motion.div>
            <Motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: 0.9,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <span className={styles.statNumber}>12+</span>
              <p>Years Experience</p>
            </Motion.div>
            <Motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: 1.0,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <span className={styles.statNumber}>98%</span>
              <p>Client Satisfaction</p>
            </Motion.div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team; 