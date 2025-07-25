import React from 'react';
import Hero from '../../components/Hero/Hero';
import CircleTextSection from '../../components/CircleTextSection/CircleTextSection';
import styles from './home.module.css';
import SelectedProjects from '../../components/SelectedProjects/SelectedProjects';
import SocialGrid from '../../components/SocialGrid/SocialGrid';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
const Home = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useTransform(scrollYProgress, [0.6, 0.8], [0.3, 0.1]);

  const achievements = [
    { 
      id: 1, 
      stat: '97%', 
      text: 'Planning Success Rate',
      subtext: 'Across all project typologies and scales' 
    },
    { 
      id: 2, 
      stat: '100+', 
      text: 'Elite Projects',
      subtext: 'Completed Globally with Excellence' 
    },
    { 
      id: 3, 
      stat: '15+', 
      text: 'Years Experience',
      subtext: 'Of Design Innovation & Leadership' 
    },
    { 
      id: 4, 
      stat: '50+', 
      text: 'Design Awards',
      subtext: 'Recognition for Excellence' 
    }
  ];

  
  return (
    <div className={styles.home}>
      <Hero />
      <CircleTextSection />
      <SelectedProjects />
      
      {/* Achievements Section */}
      <section className={styles.achievementsSection}>
        <Motion.div 
          className={styles.achievementsOverlay}
          style={{
            opacity: smoothProgress
          }}
        />
        <div className={styles.achievementsContent}>
          <Motion.div 
            className={styles.achievementTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Motion.span 
              className={styles.titleLight}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Achievements
            </Motion.span>
            <Motion.span 
              className={styles.titleBold}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Excellence in Numbers
            </Motion.span>
            <Motion.div 
              className={styles.titleDecoration}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </Motion.div>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <Motion.div 
                key={achievement.id}
                className={styles.achievementCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
              >
                <div className={styles.achievementContent}>
                  {achievement.stat && (
                    <Motion.div 
                      className={styles.achievementStat}
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.8,
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      {achievement.stat}
                    </Motion.div>
                  )}
                  <h3 className={styles.achievementText}>{achievement.text}</h3>
                  <p className={styles.achievementSubtext}>{achievement.subtext}</p>
                  <div className={styles.achievementDecoration} />
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <SocialGrid />
    </div>
  );
};

export default Home; 