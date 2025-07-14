import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './Expertise.module.css';
import projectImage from '../../assets/images/1.jpg';
import { FaLightbulb, FaHandshake, FaChartLine, FaCrown } from 'react-icons/fa';

const Expertise = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll progress for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enhanced parallax transforms
  const heroY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const patternY = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  
  // Additional parallax effects for hero section
  const titleY = useTransform(smoothProgress, [0, 0.2], ['0%', '-100%']);
  const imageScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.2], [0.3, 0.6]);
  const statsY = useTransform(smoothProgress, [0, 0.2], ['0%', '-50%']);

  return (
    <div ref={containerRef} className={styles.expertisePage}>
      {/* <div className={styles.headerSection}>
        <div className={styles.headerOverlay}></div>
        <div className={styles.decorativeElements}>
          <div className={styles.decorativeLine}></div>
          <div className={styles.decorativeCircle}></div>
          <div className={styles.decorativeSquare}></div>
          <div className={styles.decorativePattern}></div>
        </div>
        <div className={styles.headerContent}>
          <div className={styles.titleWrapper}>
            <span className={styles.subTitle}>Our Expertise</span>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLight}>Exceptional design</span>
              <span className={styles.titleBold}>is something you feel</span>
            </h1>
            <div className={styles.headerDivider}></div>
            <p className={styles.headerDescription}>
              Each project in our portfolio represents a unique blend of artistry and functionality, 
              showcasing our commitment to creating spaces that inspire and endure.
            </p>
          </div>
          <div className={styles.accentImage}>
            <img src={projectImage} alt="Interior Design" />
            <div className={styles.accentOverlay}></div>
          </div>
        </div>
      </div> */}

      {/* Parallax Background Pattern */}
      <Motion.div 
        className={styles.backgroundPattern}
        style={{ y: patternY }}
      />
      
      {/* Redesigned Hero Section */}
      <Motion.section 
        className={styles.heroSection}
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className={styles.heroContent}>
            <Motion.div 
            className={styles.heroText}
            style={{ y: titleY }}
          >
            {/* <Motion.span 
              className={styles.heroLabel}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Expertise
            </Motion.span> */}
          <Motion.h1 
            className={styles.mainTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className={styles.titleLight}>Crafting Spaces</span>
            <span className={styles.titleBold}>That Inspire</span>
          </Motion.h1>

          <Motion.p 
            className={styles.mainDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
          >
            At PSDJ, we transform visions into extraordinary spaces. Our expertise in interior design and architecture creates environments that blend aesthetics with functionality, delivering experiences that resonate with your lifestyle.
          </Motion.p>
          </Motion.div>

          <Motion.div 
            className={styles.heroStats}
            style={{ y: statsY }}
          >
            <Motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </Motion.div>
            <Motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </Motion.div>
            <Motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </Motion.div>
          </Motion.div>
        </div>

        <Motion.div 
          className={styles.heroVisuals}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.imageWrapper}>
            <Motion.img 
              src={projectImage} 
              alt="Interior Design Excellence" 
              className={styles.heroImage}
              style={{
                scale: imageScale,
                willChange: 'transform'
              }}
            />
            <Motion.div 
              className={styles.imageOverlay}
              style={{
                opacity: overlayOpacity,
                willChange: 'opacity'
              }}
            />
          </div>
          <div className={styles.decorativeElements}>
            <div className={styles.verticalLine}></div>
            <div className={styles.horizontalLine}></div>
          </div>
        </Motion.div>
      </Motion.section>

      {/* Approach Section with Enhanced Design and Animations */}
      <Motion.section className={styles.approachSection}>
        <Motion.div 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
            >
          <h2>Our Approach</h2>
          <p>Discover how we bring your vision to life</p>
            </Motion.div>

          <div className={styles.approachGrid}>
          {/* Approach Cards */}
          {[
            
              {
                title: "Design Excellence",
                description: "Crafting interiors that harmonize beauty and purpose, with meticulous attention to every detail.",
                image: projectImage,
                stats: {
                  projects: "200+",
                  satisfaction: "99%"
                  }
              },
              {
                title: "Innovative Solutions",
                description: "Delivering transformative designs through sustainable materials and forward-thinking concepts.",
                image: projectImage,
                stats: {
                  innovations: "40+",
                  awards: "18"
                    }
              },
              {
                title: "Client Focus",
                description: "Building lasting relationships by listening deeply and translating visions into remarkable spaces.",
                image: projectImage,
                stats: {
                  clients: "300+",
                  retention: "97%"
                }
              }
            
            
          ].map((card, index) => (
            <Motion.div
              key={index}
              className={styles.approachCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
                  <Motion.div 
                className={styles.imageContainer}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  >
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles.approachImage}
                />
                  </Motion.div>
              <h3 className={styles.approachTitle}>{card.title}</h3>
              <p className={styles.approachDescription}>{card.description}</p>
              <div className={styles.approachStats}>
                {Object.entries(card.stats).map(([key, value]) => (
                  <div key={key} className={styles.statItem}>
                    <div className={styles.statNumber1}>{value}</div>
                    <div className={styles.statLabel}>{key}</div>
                </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      {/* Optimized Expertise Section */}
      <Motion.section className={styles.expertiseSection}>
        <Motion.div 
            className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <h2>Our Expertise</h2>
          <p>Excellence in every aspect of interior design</p>
        </Motion.div>

        <div className={styles.expertiseContainer}>
          {[
            {
              step: "01",
              title: "Residential Design",
              description: "Creating luxurious living spaces that reflect your personality and enhance your lifestyle.",
              image: projectImage,
              stats: {
                homes: "150+",
                satisfaction: "99%"
              }
            },
            {
              step: "02",
              title: "Commercial Spaces",
              description: "Designing productive and inspiring workplaces that embody your brand's vision.",
              image: projectImage,
              stats: {
                offices: "100+",
                sqft: "1M+"
              }
            },
            {
              step: "03",
              title: "Hospitality Design",
              description: "Crafting immersive experiences through thoughtful space planning and ambiance.",
              image: projectImage,
              stats: {
                hotels: "50+",
                rating: "4.9"
              }
            }
          ].map((item, index) => (
            <Motion.div 
              key={index}
              className={styles.expertiseStep}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>{item.step}</div>
                <div className={styles.stepText}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={styles.stepStats}>
                    {Object.entries(item.stats).map(([key, value]) => (
                      <div key={key} className={styles.statItem}>
                        <div className={styles.statNumber1}>{value}</div>
                        <div className={styles.statLabel}>{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Motion.div 
                className={styles.stepImage}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                    >
                <img src={item.image} alt={item.title} />
              </Motion.div>
              </Motion.div>
            ))}
        </div>
      </Motion.section>

      {/* Values Section with Parallax */}
      <Motion.section className={styles.valuesSection}>
        <Motion.div 
            className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <h2>Our Values</h2>
          <p>Principles that guide our design philosophy</p>
        </Motion.div>

          <div className={styles.valuesGrid}>
          {[
            {
              icon: <FaLightbulb />,
              title: "Creative Innovation",
              description: "Pushing boundaries with unique design solutions that set new standards in interior excellence.",
              metric: "40+",
              metricLabel: "Design Innovations"
            },
            {
              icon: <FaHandshake />,
              title: "Client Partnership",
              description: "Building lasting relationships through transparent communication and collaborative design process.",
              metric: "97%",
              metricLabel: "Client Satisfaction"
            },
            {
              icon: <FaChartLine />,
              title: "Sustainable Growth",
              description: "Creating spaces that evolve with time while maintaining their aesthetic and functional value.",
              metric: "85%",
              metricLabel: "Sustainable Materials"
            },
            {
              icon: <FaCrown />,
              title: "Quality Excellence",
              description: "Delivering premium craftsmanship with attention to every detail and finish.",
              metric: "100%",
              metricLabel: "Quality Assurance"
            }
          ].map((value, index) => (
              <Motion.div 
              key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                ease: "easeOut"
                }}
              >
              <div className={styles.iconWrapper}>
                    {value.icon}
                  </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>{value.metric}</span>
                <span className={styles.metricLabel}>{value.metricLabel}</span>
                </div>
              </Motion.div>
            ))}
        </div>
      </Motion.section>
    </div>
  );
};

export default Expertise; 