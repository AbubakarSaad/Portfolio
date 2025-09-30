import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  FiArrowLeft, 
  FiGithub, 
  FiExternalLink, 
  FiCalendar, 
  FiTag,
  FiCode,
  FiStar,
  FiEye
} from 'react-icons/fi'
import styles from './ProjectDetail.module.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock project data - in a real app, this would come from an API
  const projectsData = {
    '1': {
      id: 1,
      title: 'DriveNow - Automotive Marketplace',
      description: 'A comprehensive automotive marketplace platform connecting buyers and sellers in Guyana, similar to AutoTrader.',
      longDescription: `DriveNow is a full-stack automotive marketplace built with modern web technologies. The platform serves as the primary automotive marketplace for Guyana, connecting buyers and sellers in a seamless digital experience.

Key features include:
- Advanced search and filtering by make, model, year, price range
- Secure user authentication and profile management
- Image upload and management for vehicle listings
- Responsive design optimized for mobile browsing
- Real-time messaging between buyers and sellers
- Payment integration for premium listings
- Admin dashboard for content moderation

The platform is built with scalable architecture to handle high traffic and large vehicle inventories. The backend uses Node.js with Express.js and PostgreSQL for robust data management, while the frontend leverages React with TypeScript for type safety and maintainability.`,
      image: '/api/placeholder/800/600',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Express.js', 'TypeScript', 'Tailwind CSS'],
      category: 'web',
      github: 'https://github.com/AbubakarSaad/drivenow',
      demo: 'https://drivenow.gy',
      year: '2024',
      status: 'in-progress',
      stats: {
        stars: 45,
        views: 892,
        forks: 12
      },
      challenges: [
        'Building scalable search functionality for large vehicle inventories',
        'Implementing secure image upload and storage solutions',
        'Creating responsive design for optimal mobile experience',
        'Integrating payment systems for premium features'
      ],
      technologies: {
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'React Query'],
        backend: ['Node.js', 'Express.js', 'PostgreSQL', 'AWS S3'],
        deployment: ['AWS EC2', 'Docker', 'Nginx', 'GitHub Actions']
      }
    },
    '2': {
      id: 2,
      title: 'DriveNow Dealer Portal',
      description: 'A dedicated dealer management system for automotive dealers to manage their inventory and sales through the DriveNow platform.',
      longDescription: `The DriveNow Dealer Portal is a comprehensive management system designed specifically for automotive dealers. It provides powerful tools for inventory management, sales tracking, and customer relationship management.

Core functionalities:
- Comprehensive inventory management with bulk upload capabilities
- Real-time analytics dashboard with sales performance metrics
- Lead management and customer communication tools
- Integration with the main DriveNow marketplace
- Automated reporting and insights
- Multi-location support for dealer groups
- Role-based access control for staff management

Built with modern web technologies, the portal features a clean, intuitive interface that allows dealers to efficiently manage their operations. The system integrates seamlessly with the main DriveNow marketplace, ensuring real-time synchronization of listings and leads.`,
      image: '/api/placeholder/800/600',
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js', 'JWT', 'Socket.io'],
      category: 'web',
      github: 'https://github.com/AbubakarSaad/drivenow-dealer',
      demo: 'https://dealer.drivenow.gy',
      year: '2024',
      status: 'in-progress',
      stats: {
        stars: 32,
        views: 567,
        forks: 8
      },
      challenges: [
        'Creating intuitive bulk upload interface for vehicle inventory',
        'Building real-time analytics dashboard with complex data visualization',
        'Implementing role-based access control for multi-user environments',
        'Ensuring seamless integration with main marketplace platform'
      ],
      technologies: {
        frontend: ['React', 'Chart.js', 'Material-UI', 'React Router'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
        deployment: ['AWS', 'Docker', 'PM2', 'Nginx']
      }
    },
    '3': {
      id: 3,
      title: 'Salaaz - Ethical E-commerce Marketplace',
      description: 'An ethical e-commerce marketplace focused on sustainable and fair-trade products, connecting conscious consumers with responsible sellers.',
      longDescription: `Salaaz is building a sustainable e-commerce ecosystem that prioritizes ethical sourcing, fair trade practices, and environmental responsibility. The platform serves as a bridge between conscious consumers and businesses committed to positive social and environmental impact.

Key features include:
- Vendor verification system for ethical business practices
- Sustainability ratings and certifications display
- Carbon footprint tracking for products and shipping
- Community-driven reviews focusing on ethical practices
- Educational content about sustainability and fair trade
- Impact tracking and reporting for consumers
- Support for local and small-scale producers

The platform uses Next.js for server-side rendering and SEO optimization, ensuring that ethical products reach a wider audience. The backend integrates with various sustainability APIs and certification databases to provide accurate information about products and their environmental impact.`,
      image: '/api/placeholder/800/600',
      tags: ['React', 'Next.js', 'PostgreSQL', 'Stripe', 'AWS', 'Tailwind CSS', 'GraphQL'],
      category: 'web',
      github: 'https://github.com/AbubakarSaad/salaaz',
      demo: 'https://salaaz.com',
      year: '2024',
      status: 'in-progress',
      stats: {
        stars: 78,
        views: 1234,
        forks: 19
      },
      challenges: [
        'Implementing complex vendor verification and certification systems',
        'Creating accurate carbon footprint calculation algorithms',
        'Building trust through transparent supply chain tracking',
        'Designing user-friendly sustainability rating displays'
      ],
      technologies: {
        frontend: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL'],
        backend: ['Node.js', 'PostgreSQL', 'Stripe API', 'AWS Lambda'],
        deployment: ['Vercel', 'AWS RDS', 'CloudFlare', 'GitHub Actions']
      }
    }
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const projectData = projectsData[id]
      if (projectData) {
        setProject(projectData)
      }
      setLoading(false)
    }, 500)
  }, [id])

  const handleBack = () => {
    navigate('/', { replace: true })
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading project details...</p>
      </div>
    )
  }

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <button onClick={handleBack} className="btn btn-primary">
          <FiArrowLeft />
          Back to Portfolio
        </button>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Abubakar Saad</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <main className={styles.projectDetail}>
        <div className={styles.container}>
          {/* Back Button */}
          <motion.button
            className={styles.backButton}
            onClick={handleBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft />
            <span>Back to Portfolio</span>
          </motion.button>

          {/* Project Header */}
          <motion.header
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.headerContent}>
              <div className={styles.projectMeta}>
                <span className={styles.year}>
                  <FiCalendar />
                  {project.year}
                </span>
                <span className={`${styles.status} ${styles[project.status]}`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>

              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.projectStats}>
                <div className={styles.stat}>
                  <FiStar />
                  <span>{project.stats.stars} stars</span>
                </div>
                <div className={styles.stat}>
                  <FiEye />
                  <span>{project.stats.views} views</span>
                </div>
                <div className={styles.stat}>
                  <FiCode />
                  <span>{project.stats.forks} forks</span>
                </div>
              </div>

              <div className={styles.projectActions}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub />
                  <span>View Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>

            <motion.div
              className={styles.projectImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.imagePlaceholder}>
                <FiCode size={64} />
              </div>
            </motion.div>
          </motion.header>

          {/* Project Content */}
          <div className={styles.content}>
            {/* Overview */}
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2>Project Overview</h2>
              <div className={styles.longDescription}>
                {project.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.section>

            {/* Technologies */}
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2>Technologies Used</h2>
              <div className={styles.technologies}>
                {Object.entries(project.technologies).map(([category, techs]) => (
                  <div key={category} className={styles.techCategory}>
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className={styles.techTags}>
                      {techs.map((tech, index) => (
                        <span key={index} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2>Key Challenges</h2>
              <ul className={styles.challengesList}>
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Tags */}
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2>Tags</h2>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    <FiTag />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProjectDetail