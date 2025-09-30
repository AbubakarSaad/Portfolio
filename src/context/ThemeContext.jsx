import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  // Update CSS custom properties when theme changes
  useEffect(() => {
    const root = document.documentElement
    
    if (theme === 'light') {
      // Light theme colors
      root.style.setProperty('--color-bg-primary', '#ffffff')
      root.style.setProperty('--color-bg-secondary', '#f8f9fa')
      root.style.setProperty('--color-bg-tertiary', '#e9ecef')
      root.style.setProperty('--color-bg-card', 'rgba(0, 0, 0, 0.05)')
      
      root.style.setProperty('--color-text-primary', '#212529')
      root.style.setProperty('--color-text-secondary', '#495057')
      root.style.setProperty('--color-text-muted', '#6c757d')
      
      root.style.setProperty('--gradient-bg', 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)')
      root.style.setProperty('--gradient-hero', 'linear-gradient(135deg, rgba(243, 156, 18, 0.1) 0%, rgba(52, 152, 219, 0.1) 100%)')
    } else {
      // Dark theme colors (default)
      root.style.setProperty('--color-bg-primary', '#0a0a0a')
      root.style.setProperty('--color-bg-secondary', '#1a1a1a')
      root.style.setProperty('--color-bg-tertiary', '#2a2a2a')
      root.style.setProperty('--color-bg-card', 'rgba(255, 255, 255, 0.05)')
      
      root.style.setProperty('--color-text-primary', '#ffffff')
      root.style.setProperty('--color-text-secondary', '#b0b0b0')
      root.style.setProperty('--color-text-muted', '#666666')
      
      root.style.setProperty('--gradient-bg', 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)')
      root.style.setProperty('--gradient-hero', 'linear-gradient(135deg, rgba(243, 156, 18, 0.1) 0%, rgba(52, 152, 219, 0.1) 100%)')
    }

    // Update body background
    document.body.style.background = `var(--color-bg-primary)`
    document.body.style.color = `var(--color-text-primary)`
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  // Toggle theme with smooth transition
  const toggleTheme = () => {
    setIsTransitioning(true)
    
    // Add transition class
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease'
    
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
      
      setTimeout(() => {
        setIsTransitioning(false)
        document.body.style.transition = ''
      }, 300)
    }, 50)
  }

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemThemeChange = (e) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('portfolio-theme')
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  const value = {
    theme,
    toggleTheme,
    isTransitioning,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}