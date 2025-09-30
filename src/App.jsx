import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'

// Context
import { ScrollProvider } from './context/ScrollContext'
import { ThemeProvider } from './context/ThemeContext'

// Components
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

// Pages
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

// Analytics
import { initGA, trackPageView } from './utils/analytics'

// Styles
import './styles/globals.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize Google Analytics
    initGA()
    
    // Track initial page view
    trackPageView(window.location.pathname + window.location.search)
    
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsInitialized(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Home page component
  const HomePage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
    </motion.div>
  )

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ScrollProvider>
          <Router>
            <div className="App">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <LoadingScreen key="loading" />
                ) : (
                  <motion.div
                    key="app"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Navigation />
                    
                    <main>
                      <Suspense fallback={<LoadingScreen />}>
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/project/:id" element={<ProjectDetail />} />
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </Suspense>
                    </main>
                    
                    <Footer />
                    <ScrollToTop />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Router>
        </ScrollProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App