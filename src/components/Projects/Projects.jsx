import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiEye, FiStar, FiCalendar } from 'react-icons/fi'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Projects.module.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  // Project data
  const projects = [
    {
      id: 1,
      title: 'DriveNow - Automotive Marketplace',
      description: 'A comprehensive automotive marketplace platform connecting buyers and sellers in Guyana, similar to AutoTrader.',
      longDescription: 'DriveNow is a full-stack automotive marketplace built with modern web technologies. The platform features advanced search and filtering, secure user authentication, image upload and management, and responsive design for optimal mobile experience. Built with scalable architecture to handle high traffic and large vehicle inventories.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Express.js', 'TypeScript'],
      category: 'web',
      github: 'https://github.com/AbubakarSaad/drivenow',
      demo: 'https://drivenow.gy',
      featured: true,
      status: 'in-progress',
      year: '2024',
      stats: {
        stars: 45,
        views: 892
      }
    },
    {
      id: 2,
      title: 'DriveNow Dealer Portal',
      description: 'A dedicated dealer management system for automotive dealers to manage their inventory and sales through the DriveNow platform.',
      longDescription: 'The dealer portal provides comprehensive inventory management, analytics dashboard, lead management, and integration with the main DriveNow marketplace. Features include bulk vehicle uploads, sales reporting, customer communication tools, and performance analytics.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js', 'JWT'],
      category: 'web',
      github: 'https://github.com/AbubakarSaad/drivenow-dealer',
      demo: 'https://dealer.drivenow.gy',
      featured: true,
      status: 'in-progress',
      year: '2024',
      stats: {
        stars: 32,
        views: 567
      }
    },
    {
      id: 3,
      title: 'Salaaz - Ethical E-commerce Marketplace',
      description: 'An ethical e-commerce marketplace focused on sustainable and fair-trade products, connecting conscious consumers with responsible sellers.',
      longDescription: 'Salaaz is building a sustainable e-commerce ecosystem that prioritizes ethical sourcing, fair trade practices, and environmental responsibility. The platform features vendor verification, sustainability ratings, carbon footprint tracking, and community-driven reviews focusing on ethical practices.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Next.js', 'PostgreSQL', 'Stripe', 'AWS', 'Tailwind CSS'],
      category: 'web',
      github: 'https://github.com/AbubakarSaad/salaaz',
      demo: 'https://salaaz.com',
      featured: true,
      status: 'in-progress',
      year: '2024',
      stats: {
        stars: 78,
        views: 1234
      }
    }
  ]

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length }
  ]

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>Featured Projects</h2>
            <p className={styles.subtitle}>
              A showcase of my latest work in web development, AI/ML, and blockchain technology
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div className={styles.featuredSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Highlighted Work</h3>
            <div className={styles.featuredGrid}>
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`${styles.projectCard} ${styles.featured}`}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  layout
                >
                  <div className={styles.cardImageContainer}>
                    <div className={styles.cardImage}>
                      <div className={styles.imagePlaceholder}>
                        <FiCode size={48} />
                      </div>
                      <div className={styles.cardOverlay}>
                        <div className={styles.cardActions}>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionButton}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiGithub />
                          </motion.a>
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionButton}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FiExternalLink />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardStatus}>
                      <span className={`${styles.status} ${styles[project.status]}`}>
                        {project.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardMeta}>
                      <span className={styles.year}>
                        <FiCalendar size={14} />
                        {project.year}
                      </span>
                      <div className={styles.cardStats}>
                        <span className={styles.stat}>
                          <FiStar size={14} />
                          {project.stats.stars}
                        </span>
                        <span className={styles.stat}>
                          <FiEye size={14} />
                          {project.stats.views}
                        </span>
                      </div>
                    </div>

                    <h4 className={styles.cardTitle}>{project.title}</h4>
                    <p className={styles.cardDescription}>
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>

                    <div className={styles.cardTags}>
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div className={styles.filterSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>All Projects</h3>
            <div className={styles.filterTabs}>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`${styles.filterTab} ${filter === category.id ? styles.active : ''}`}
                  onClick={() => setFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                  <span className={styles.count}>({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className={styles.projectsGrid} variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                className={styles.gridContainer}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={styles.projectCard}
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    layout
                  >
                    <div className={styles.cardImageContainer}>
                      <div className={styles.cardImage}>
                        <div className={styles.imagePlaceholder}>
                          <FiCode size={32} />
                        </div>
                        <div className={styles.cardOverlay}>
                          <div className={styles.cardActions}>
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.actionButton}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiGithub />
                            </motion.a>
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.actionButton}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiExternalLink />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardContent}>
                      <div className={styles.cardMeta}>
                        <span className={styles.year}>
                          <FiCalendar size={12} />
                          {project.year}
                        </span>
                        <div className={styles.cardStats}>
                          <span className={styles.stat}>
                            <FiStar size={12} />
                            {project.stats.stars}
                          </span>
                        </div>
                      </div>

                      <h4 className={styles.cardTitle}>{project.title}</h4>
                      <p className={styles.cardDescription}>{project.description}</p>

                      <div className={styles.cardTags}>
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className={styles.moreTagsIndicator}>
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div className={styles.cta} variants={itemVariants}>
            <h3>Want to see more?</h3>
            <p>Check out my GitHub for additional projects and contributions</p>
            <motion.a
              href="https://github.com/AbubakarSaad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
              <span>View GitHub Profile</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects