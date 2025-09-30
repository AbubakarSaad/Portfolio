import React from 'react'
import { motion } from 'framer-motion'
import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <motion.div
      className={styles.loadingScreen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        {/* Animated Logo */}
        <motion.div
          className={styles.logo}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className={styles.logoText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            AS
          </motion.span>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className={styles.loadingAnimation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className={styles.spinner}>
            <div className={styles.spinnerInner}></div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className={styles.loadingText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Crafting Experience...
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          className={styles.progressContainer}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className={styles.progressBar}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.4, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Floating Particles */}
        <div className={styles.particles}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              initial={{ 
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: [0, 1, 0] 
              }}
              transition={{ 
                delay: Math.random() * 2,
                duration: 3,
                repeat: Infinity,
                repeatType: "loop"
              }}
              style={{
                left: `${50 + Math.random() * 20 - 10}%`,
                top: `${50 + Math.random() * 20 - 10}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen