import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { FiCode, FiDatabase, FiServer, FiCpu, FiTool, FiZap } from 'react-icons/fi'
import styles from './About.module.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  // Skills data
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiCode,
      color: '#f39c12',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Three.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'CSS/SCSS', level: 92 }
      ]
    },
    {
      title: 'Backend Development',
      icon: FiServer,
      color: '#3498db',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'GraphQL', level: 82 },
        { name: 'REST APIs', level: 90 },
        { name: 'Microservices', level: 78 }
      ]
    },
    {
      title: 'Database & DevOps',
      icon: FiDatabase,
      color: '#e74c3c',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'Redis', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'CI/CD', level: 78 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: FiCpu,
      color: '#9b59b6',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Computer Vision', level: 82 },
        { name: 'NLP', level: 78 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Data Science', level: 80 }
      ]
    }
  ]

  // Experience timeline
  const timeline = [
    {
      period: '2023 - Present',
      title: 'Senior Support & Solutions Engineer',
      company: 'Humansignal',
      description: 'Resolved complex technical issues for enterprise customers, designed custom data annotation solutions, and contributed to open-source Label Studio project.',
      icon: FiZap,
      color: '#f39c12'
    },
    {
      period: '2023 - Present',
      title: 'Freelance Developer',
      company: 'Independent',
      description: 'Developing custom web applications with React and Node.js, featuring analytical dashboards and integrated LLM APIs, to deliver tailored AI solutions for clients.',
      icon: FiCode,
      color: '#3498db'
    },
    {
      period: '2021 - 2023',
      title: 'ML/Data Engineer',
      company: 'Laivly',
      description: 'Developed large-scale ETL and ML pipelines on AWS and Databricks, built and deployed LLMs as APIs using Kubernetes and Docker.',
      icon: FiCpu,
      color: '#e74c3c'
    },
    {
      period: '2019 - 2020',
      title: 'Machine Learning Developer',
      company: 'Ecoli-Sense',
      description: 'Developed Twitter sentiment analysis tool and E. coli concentration prediction model using PyTorch and Python.',
      icon: FiServer,
      color: '#9b59b6'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.subtitle}>
              Passionate developer with a love for creating innovative solutions
            </p>
          </motion.div>

          {/* Personal Description */}
          <motion.div className={styles.description} variants={itemVariants}>
            <div className={styles.textContent}>
              <p>
                By night, I am a Deep learning enthusiast and by day a curious full-stack developer. 
                I love understanding the intricate details of how things work, and often learn by hacking, 
                just to make things fun! My current learning excitement involves Convolution Networks and NLP filters.
              </p>
              <p>
                Aside from the computer scientist in me, I enjoy working out and learning to play piano in my free time. 
                I continuously strive to push myself forward both professionally and more importantly, as a person.
              </p>
              <p>
                I am always open to new ideas and possible projects, so don't hesitate to contact me if you have got one!
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div className={styles.skillsSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Technical Skills</h3>
            <div className={styles.skillsGrid}>
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className={styles.skillCategory}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.categoryHeader}>
                    <div 
                      className={styles.categoryIcon}
                      style={{ backgroundColor: category.color }}
                    >
                      <category.icon />
                    </div>
                    <h4 className={styles.categoryTitle}>{category.title}</h4>
                  </div>
                  <div className={styles.skillsList}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className={styles.skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                          duration: 0.5 
                        }}
                      >
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        <div className={styles.skillBar}>
                          <motion.div
                            className={styles.skillProgress}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3,
                              duration: 1,
                              ease: 'easeOut'
                            }}
                            style={{ backgroundColor: category.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div className={styles.timelineSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Professional Journey</h3>
            <div className={styles.timeline}>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.timelineContent}>
                    <div 
                      className={styles.timelineIcon}
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon />
                    </div>
                    <div className={styles.timelineText}>
                      <div className={styles.timelinePeriod}>{item.period}</div>
                      <h4 className={styles.timelineTitle}>{item.title}</h4>
                      <div className={styles.timelineCompany}>{item.company}</div>
                      <p className={styles.timelineDescription}>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div className={styles.funFacts} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Fun Facts</h3>
            <div className={styles.factsGrid}>
              <motion.div 
                className={styles.fact}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.factNumber}>5+</div>
                <div className={styles.factLabel}>Years of Experience</div>
              </motion.div>
              <motion.div 
                className={styles.fact}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.factNumber}>50+</div>
                <div className={styles.factLabel}>Projects Completed</div>
              </motion.div>
              <motion.div 
                className={styles.fact}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.factNumber}>∞</div>
                <div className={styles.factLabel}>Cups of Coffee</div>
              </motion.div>
              <motion.div 
                className={styles.fact}
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.factNumber}>24/7</div>
                <div className={styles.factLabel}>Learning Mode</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About