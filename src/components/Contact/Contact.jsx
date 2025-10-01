import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Contact.module.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    hasError: false,
    errorMessage: ''
  })

  // Contact information
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'abubakar.saad.891@gmail.com',
      href: 'mailto:abubakar.saad.891@gmail.com',
      color: '#e74c3c'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (416) 123-4567',
      href: 'tel:+14161234567',
      color: '#27ae60'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Toronto, ON, Canada',
      href: 'https://maps.google.com/?q=Toronto,ON,Canada',
      color: '#3498db'
    }
  ]

  // Social links
  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/AbubakarSaad',
      color: '#333333'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abubakar-saad',
      color: '#0077b5'
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      href: 'https://x.com/AbubakarSaad10',
      color: '#1da1f2'
    }
  ]

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (formStatus.hasError) {
      setFormStatus(prev => ({
        ...prev,
        hasError: false,
        errorMessage: ''
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Name is required'
    }
    if (!formData.email.trim()) {
      return 'Email is required'
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) {
      return 'Subject is required'
    }
    if (!formData.message.trim()) {
      return 'Message is required'
    }
    if (formData.message.trim().length < 10) {
      return 'Message must be at least 10 characters long'
    }
    return null
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        hasError: true,
        errorMessage: validationError
      })
      return
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      hasError: false,
      errorMessage: ''
    })

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_hpbiilb'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_39ahhxt'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'N1ihLWrkC3V9hmke3'
      
      // Additional security: Basic rate limiting (client-side)
      const lastSubmission = localStorage.getItem('lastEmailSubmission')
      const now = Date.now()
      const oneMinute = 60 * 1000
      
      if (lastSubmission && (now - parseInt(lastSubmission)) < oneMinute) {
        throw new Error('Please wait a minute before sending another message.')
      }
      
      // Template parameters for EmailJS (using common variable names)
      const templateParams = {
        // Standard EmailJS variables
        from_name: formData.name,
        from_email: formData.email,
        user_email: formData.email,  // Alternative variable name
        user_name: formData.name,    // Alternative variable name
        subject: formData.subject,
        message: formData.message,
        to_name: 'Abubakar Saad',
        reply_to: formData.email,
        
        // Additional details for better email formatting
        contact_email: formData.email,
        sender_email: formData.email,
        email: formData.email,  // Simple variable name
        name: formData.name,    // Simple variable name
        
        // Formatted message with contact details
        full_message: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Portfolio Contact Form
Reply to: ${formData.email}
        `.trim()
      }

      // Debug: Log template parameters (remove in production)
      console.log('Sending email with parameters:', templateParams)

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('Email sent successfully:', result)
      
      // Store submission timestamp for rate limiting
      localStorage.setItem('lastEmailSubmission', now.toString())
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        hasError: false,
        errorMessage: ''
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSubmitted: false
        }))
      }, 5000)

    } catch (error) {
      console.error('EmailJS error:', error)
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        hasError: true,
        errorMessage: 'Failed to send message. Please try again or contact me directly.'
      })
    }
  }

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
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.subtitle}>
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </motion.div>

          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <motion.div className={styles.contactInfo} variants={itemVariants}>
              <h3 className={styles.sectionTitle}>Contact Information</h3>
              
              <div className={styles.infoList}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={styles.infoItem}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className={styles.infoIcon}
                      style={{ backgroundColor: info.color }}
                    >
                      <info.icon />
                    </div>
                    <div className={styles.infoText}>
                      <span className={styles.infoLabel}>{info.label}</span>
                      <span className={styles.infoValue}>{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Me</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      style={{ backgroundColor: social.color }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      aria-label={social.label}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <motion.div className={styles.additionalInfo} variants={itemVariants}>
                <h4>Let's Work Together</h4>
                <p>
                  I'm always open to discussing new opportunities, creative projects, 
                  or potential partnerships. Whether you have a specific project in mind 
                  or just want to explore possibilities, don't hesitate to reach out.
                </p>
                <div className={styles.availability}>
                  <div className={styles.statusIndicator}>
                    <div className={styles.statusDot}></div>
                    <span>Available for freelance work</span>
                  </div>
                  <div className={styles.responseTime}>
                    <FiCheckCircle />
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className={styles.contactForm} variants={itemVariants}>
              <h3 className={styles.sectionTitle}>Send Message</h3>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name Field */}
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <label htmlFor="name" className={styles.label}>
                    <FiUser />
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Your full name"
                    disabled={formStatus.isSubmitting}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <label htmlFor="email" className={styles.label}>
                    <FiMail />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="your.email@example.com"
                    disabled={formStatus.isSubmitting}
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <label htmlFor="subject" className={styles.label}>
                    <FiMessageSquare />
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="What's this about?"
                    disabled={formStatus.isSubmitting}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <label htmlFor="message" className={styles.label}>
                    <FiMessageSquare />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    rows="6"
                    placeholder="Tell me about your project or idea..."
                    disabled={formStatus.isSubmitting}
                  />
                </motion.div>

                {/* Status Messages */}
                {formStatus.hasError && (
                  <motion.div 
                    className={styles.errorMessage}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FiAlertCircle />
                    {formStatus.errorMessage}
                  </motion.div>
                )}

                {formStatus.isSubmitted && (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FiCheckCircle />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className={`${styles.submitButton} btn btn-primary`}
                  disabled={formStatus.isSubmitting}
                  whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                  variants={itemVariants}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <div className={styles.spinner}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact