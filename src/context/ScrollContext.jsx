import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const ScrollContext = createContext()

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [isScrolling, setIsScrolling] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  
  const lastScrollY = useRef(0)
  const scrollTimeout = useRef(null)

  // Smooth scroll to section
  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const top = element.offsetTop - offset
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
  }

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scroll position
      setScrollY(currentScrollY)
      
      // Update scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      
      // Update scrolling state
      setIsScrolling(true)
      
      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      
      // Set scrolling to false after scroll ends
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
      
      lastScrollY.current = currentScrollY
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact']
    
    const handleActiveSection = () => {
      const offset = 100 // Offset for when section becomes active
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    handleActiveSection()
    window.addEventListener('scroll', handleActiveSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleActiveSection)
    }
  }, [])

  const value = {
    scrollY,
    scrollDirection,
    isScrolling,
    activeSection,
    scrollToSection
  }

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  )
}