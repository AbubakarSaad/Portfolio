import React from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin, FiMail, FiCode, FiTwitter } from 'react-icons/fi'
import { useScroll } from '../../context/ScrollContext'
import styles from './Footer.module.css'

const Footer = () => {
  const { scrollToSection } = useScroll()

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/AbubakarSaad', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/abubakar-saad', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/AbubakarSaad10', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:abubakar.saad.891@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' }
  ]

  const handleScrollToTop = () => {
    scrollToSection('hero', 0)
  }

  const handleQuickLink = (section) => {
    scrollToSection(section, 80)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <motion.div
              className={styles.brand}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.brandText}>AS</span>
              <span className={styles.brandSubtext}>dev</span>
            </motion.div>
            <p className={styles.brandDescription}>
              Crafting digital experiences with passion and precision. 
              Always learning, always building, always innovating.
            </p>
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

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => handleQuickLink(link.section)}
                    className={styles.quickLink}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className={styles.techSection}>
            <h4 className={styles.sectionTitle}>Built With</h4>
            <div className={styles.techStack}>
              <span className={styles.techItem}>React</span>
              <span className={styles.techItem}>Three.js</span>
              <span className={styles.techItem}>Framer Motion</span>
              <span className={styles.techItem}>Vite</span>
            </div>
            <div className={styles.codeInfo}>
              <FiCode />
              <span>Open Source</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactText}>
                Have a project in mind? Let's work together to bring your ideas to life.
              </p>
              <motion.a
                href="mailto:abubakar.saad.891@gmail.com"
                className={styles.contactButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                <span>Say Hello</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <span>© {currentYear} Abubakar Saad. Made with</span>
              <motion.div
                className={styles.heart}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FiHeart />
              </motion.div>
              <span>in Toronto</span>
            </div>

            <motion.button
              className={styles.backToTop}
              onClick={handleScrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>
    </footer>
  )
}

export default Footer