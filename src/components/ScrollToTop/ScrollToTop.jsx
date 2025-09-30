import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useScroll } from '../../context/ScrollContext'
import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY, scrollToSection } = useScroll()

  // Show button when user scrolls down
  useEffect(() => {
    setIsVisible(scrollY > 300)
  }, [scrollY])

  const handleScrollToTop = () => {
    scrollToSection('hero', 0)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.scrollToTop}
          onClick={handleScrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <motion.div
            className={styles.iconContainer}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowUp />
          </motion.div>
          <div className={styles.ripple}></div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop