import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll } from '../../context/ScrollContext'
import { useTheme } from '../../context/ThemeContext'
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import styles from './Navigation.module.css'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY, scrollDirection, activeSection, scrollToSection } = useScroll()
  const { theme, toggleTheme, isDark } = useTheme()

  // Hide/show navigation based on scroll
  useEffect(() => {
    if (scrollY > 100) {
      setIsVisible(scrollDirection === 'up')
    } else {
      setIsVisible(true)
    }
  }, [scrollY, scrollDirection])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(`.${styles.navigation}`)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  // Social links
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/AbubakarSaad', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/abubakar-saad', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/AbubakarSaad10', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:abubakar.saad.891@gmail.com', label: 'Email' },
  ]

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId, 80)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className={styles.navigation}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className={styles.container}>
            {/* Logo/Brand */}
            <motion.div
              className={styles.brand}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleNavClick('hero')}
                className={styles.brandButton}
              >
                <span className={styles.brandText}>AS</span>
                <span className={styles.brandSubtext}>dev</span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className={styles.navItem}
                    whileHover={{ y: -2 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`${styles.navLink} ${
                        activeSection === item.id ? styles.active : ''
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          className={styles.activeIndicator}
                          layoutId="activeIndicator"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Desktop Actions */}
              <div className={styles.desktopActions}>
                {/* Theme Toggle */}
                <motion.button
                  className={styles.themeToggle}
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait">
                    {isDark ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiSun />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiMoon />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Social Links */}
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      aria-label={social.label}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiX />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className={styles.mobileMenu}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className={styles.mobileMenuContent}>
                  {/* Mobile Navigation Items */}
                  <ul className={styles.mobileNavList}>
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className={`${styles.mobileNavLink} ${
                            activeSection === item.id ? styles.active : ''
                          }`}
                        >
                          {item.label}
                        </button>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Mobile Actions */}
                  <motion.div
                    className={styles.mobileActions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* Theme Toggle */}
                    <button
                      className={styles.mobileThemeToggle}
                      onClick={toggleTheme}
                    >
                      {isDark ? <FiSun /> : <FiMoon />}
                      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>

                    {/* Social Links */}
                    <div className={styles.mobileSocialLinks}>
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.mobileSocialLink}
                          aria-label={social.label}
                        >
                          <social.icon />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navigation