import React, { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { projectsData } from './projectsData';
import styles from './ProjectDetail.module.css';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const project = state?.project || projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className={styles.notFound}>Project not found</div>
    );
  }

  const { title, location, area, category, image, details } = project;

  return (
    <div className={styles.projectDetailPage}>
      {/* Hero Section - Full Screen */}
      <section className={styles.heroSectionFull}>
        <div className={styles.heroImage} style={{ backgroundImage: `url(${image})` }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContentLarge}>
          <h1 className={styles.projectTitleLarge}>{title}</h1>
          <div className={styles.projectMetaLarge}>
            <span className={styles.metaItem}>{location}</span>
            {area && <span className={styles.metaItem}>{area}</span>}
            {category && <span className={styles.metaItem}>{category.replace(/-/g, ' ')}</span>}
          </div>
        </div>
      </section>

      {/* Details Section - White Theme, Styled like SelectedProjects */}
      <section className={styles.detailsSectionWhite}>
       
  
        {/* Design Philosophy Section */}
          <h1 className={styles.detailsSectionTitle}>Design Philosophy</h1>

        <div className={styles.narrativeSectionsContainer}>

          {/* Description Section */}
          <div className={`${styles.narrativeCard} ${styles.evenNarrative}`}>
            <div className={styles.narrativeCardContent}>
              <div className={styles.narrativeImageWrapper}>
                <div
                  className={styles.narrativeImageParallax}
                  style={{ backgroundImage: `url(${details?.gallery?.[0]?.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'})` }}
                />
              </div>
              <div className={styles.narrativeTextContent}>
                <div className={styles.narrativeCategoryTag}>
                  <span>Description</span>
                </div>
                <h3 className={styles.narrativeTitle}>Project Overview</h3>
                <p className={styles.narrativeDescription}>{details?.description}</p>
              </div>
            </div>
          </div>

          {/* Challenge Section */}
          <div className={`${styles.narrativeCard} ${styles.oddNarrative}`}>
            <div className={styles.narrativeCardContent}>
              <div className={styles.narrativeImageWrapper}>
                <div
                  className={styles.narrativeImageParallax}
                  style={{ backgroundImage: `url(${details?.gallery?.[1]?.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'})` }}
                />
              </div>
              <div className={styles.narrativeTextContent}>
                <div className={styles.narrativeCategoryTag}>
                  <span>Challenge</span>
                </div>
                <h3 className={styles.narrativeTitle}>The Challenge</h3>
                <p className={styles.narrativeDescription}>{details?.challenge}</p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className={`${styles.narrativeCard} ${styles.evenNarrative}`}>
            <div className={styles.narrativeCardContent}>
              <div className={styles.narrativeImageWrapper}>
                <div
                  className={styles.narrativeImageParallax}
                  style={{ backgroundImage: `url(${details?.gallery?.[2]?.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'})` }}
                />
              </div>
              <div className={styles.narrativeTextContent}>
                <div className={styles.narrativeCategoryTag}>
                  <span>Solution</span>
                </div>
                <h3 className={styles.narrativeTitle}>Our Approach</h3>
                <p className={styles.narrativeDescription}>{details?.solution}</p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className={`${styles.narrativeCard} ${styles.oddNarrative}`}>
            <div className={styles.narrativeCardContent}>
              <div className={styles.narrativeImageWrapper}>
                <div
                  className={styles.narrativeImageParallax}
                  style={{ backgroundImage: `url(${details?.gallery?.[3]?.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'})` }}
                />
              </div>
              <div className={styles.narrativeTextContent}>
                <div className={styles.narrativeCategoryTag}>
                  <span>Results</span>
                </div>
                <h3 className={styles.narrativeTitle}>The Outcome</h3>
                <p className={styles.narrativeDescription}>{details?.results}</p>
              </div>
            </div>
          </div>
        </div>

        
      </section>

       {/* Project Info Section - Black & White Text Only */}
       <div className={styles.projectInfoSectionBW}>
          <div className={styles.projectInfoItemBW}>
            <div className={styles.projectInfoLabelBW}>Client</div>
            <div className={styles.projectInfoValueBW}>{details?.client || 'N/A'}</div>
          </div>
          <div className={styles.projectInfoItemBW}>
            <div className={styles.projectInfoLabelBW}>Year</div>
            <div className={styles.projectInfoValueBW}>{details?.completionYear || 'N/A'}</div>
          </div>
          <div className={styles.projectInfoItemBW}>
            <div className={styles.projectInfoLabelBW}>Duration</div>
            <div className={styles.projectInfoValueBW}>{details?.duration || 'N/A'}</div>
          </div>
          <div className={styles.projectInfoItemBW}>
            <div className={styles.projectInfoLabelBW}>Services</div>
            <ul className={styles.projectInfoServicesListBW}>
              {details?.services?.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

      {/* Gallery Section - Modern Masonry Image Grid with Overlayed Text */}
  {details?.gallery && (
        <section className={styles.gallerySectionGrid}>
          <div className={styles.sectionHeaderModern}>
            <h2 className={styles.sectionTitleModern}>Project Visuals</h2>
            <p className={styles.sectionSubtitleModern}>A visual journey through this project</p>
          </div>
          <div className={styles.galleryMasonryGrid}>
            {details.gallery.map((img, idx) => (
              <div key={img.id || idx} className={styles.galleryMasonryItem}>
                <div
                  className={styles.galleryMasonryImage}
                  style={{ backgroundImage: `url(${img.image})` }}
                >
                  <div className={styles.galleryMasonryOverlay}>
                    <div className={styles.galleryMasonryCategory}>{img.category?.replace(/-/g, ' ')}</div>
                    <div className={styles.galleryMasonryCaption}>{img.caption}</div>
                    <div className={styles.galleryMasonryDescription}>{img.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


    </div>
  );
};

function ParallaxImageBlock({ img, idx, galleryRefs }) {
  const ref = useRef(null);
  // Save ref for possible future use
  galleryRefs.current[idx] = ref;
  // Parallax effect: as the image enters viewport, move it at a different speed
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-60px', '60px']);

  return (
    <div ref={ref} className={styles.parallaxImageBlock}>
      <Motion.div className={styles.parallaxImageWrap} style={{ y }}>
        <div
          className={styles.parallaxImage}
          style={{ backgroundImage: `url(${img.image})` }}
        />
        <div className={styles.parallaxOverlay} />
        <div className={styles.parallaxCategory}>{img.category?.replace(/-/g, ' ')}</div>
      </Motion.div>
      <div className={styles.parallaxTextBlock}>
        <div className={styles.parallaxCaption}>{img.caption}</div>
        <div className={styles.parallaxDescription}>{img.description}</div>
      </div>
    </div>
  );
}

function ParallaxNarrativeSection({ title, text, image, reverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-40px', '40px']);
  const fallback = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

  return (
    <div
      ref={ref}
      className={reverse ? styles.narrativeRowReverse : styles.narrativeRow}
    >
      <Motion.div className={styles.narrativeImageWrap} style={{ y }}>
        <img
          src={image || fallback}
          alt={title}
          className={styles.narrativeImage}
        />
      </Motion.div>
      <div className={styles.narrativeTextWrap}>
        <h2 className={styles.narrativeHeadingWhite}>{title}</h2>
        <p className={styles.narrativeTextWhite}>{text}</p>
      </div>
    </div>
  );
}

export default ProjectDetail; 