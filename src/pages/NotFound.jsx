import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi'
import styles from './NotFound.module.css'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/', { replace: true })
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
      <Helmet>
        <title>Page Not Found - Abubakar Saad</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <main className={styles.notFound}>
        <div className={styles.container}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Animation */}
            <motion.div
              className={styles.errorCode}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              <span className={styles.four}>4</span>
              <motion.div
                className={styles.zero}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <FiSearch />
              </motion.div>
              <span className={styles.four}>4</span>
            </motion.div>

            {/* Error Message */}
            <motion.div
              className={styles.message}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1>Oops! Page Not Found</h1>
              <p>
                The page you're looking for seems to have wandered off into the digital void. 
                Don't worry, it happens to the best of us!
              </p>
            </motion.div>

            {/* Suggestions */}
            <motion.div
              className={styles.suggestions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3>Here's what you can do:</h3>
              <ul>
                <li>Check the URL for any typos</li>
                <li>Navigate back to the homepage</li>
                <li>Explore my projects and skills</li>
                <li>Get in touch if you need help</li>
              </ul>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button
                onClick={handleGoHome}
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiHome />
                <span>Go Home</span>
              </motion.button>
              
              <motion.button
                onClick={handleGoBack}
                className="btn btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiArrowLeft />
                <span>Go Back</span>
              </motion.button>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              className={styles.funFact}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p>
                <strong>Fun Fact:</strong> This 404 page was crafted with React, Framer Motion, 
                and a touch of creativity. Even error pages deserve good design! 
              </p>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <div className={styles.floatingElements}>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.floatingElement}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound