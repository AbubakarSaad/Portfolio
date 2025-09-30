import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Text3D, Center, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useTheme } from '../../context/ThemeContext'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload, FiTwitter } from 'react-icons/fi'
import styles from './Hero.module.css'

// Animated Background Spheres
const AnimatedSphere = ({ position, color, size = 1 }) => {
  const meshRef = useRef()
  const { isDark } = useTheme()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={isDark ? color : '#f39c12'}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

// Floating Particles
const Particles = () => {
  const points = useRef()
  const { isDark } = useTheme()
  
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={isDark ? '#f39c12' : '#3498db'}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  )
}

// Interactive Mouse Effect
const MouseTracker = () => {
  const meshRef = useRef()
  const { mouse } = useThree()
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * 0.5
      meshRef.current.rotation.y = mouse.x * 0.5
    }
  })

  return (
    <group ref={meshRef}>
      <Sphere args={[0.5, 32, 32]} position={[0, 0, -2]}>
        <meshStandardMaterial
          color="#e74c3c"
          transparent
          opacity={0.3}
          wireframe
        />
      </Sphere>
    </group>
  )
}

// Three.js Scene Component
const ThreeScene = () => {
  const { isDark } = useTheme()
  
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={isDark ? 0.8 : 1.2}
        color={isDark ? '#f39c12' : '#3498db'} 
      />
      <pointLight 
        position={[-10, -10, -10]} 
        intensity={isDark ? 0.5 : 0.8}
        color={isDark ? '#3498db' : '#f39c12'} 
      />

      {/* Animated Elements */}
      <AnimatedSphere position={[-4, 2, -3]} color="#f39c12" size={1.2} />
      <AnimatedSphere position={[4, -2, -4]} color="#3498db" size={0.8} />
      <AnimatedSphere position={[2, 3, -5]} color="#e74c3c" size={1} />
      <AnimatedSphere position={[-3, -1, -2]} color="#9b59b6" size={0.6} />
      
      {/* Particles */}
      <Particles />
      
      {/* Mouse Tracker */}
      <MouseTracker />
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

// Loading Component
const CanvasLoader = () => (
  <div className={styles.canvasLoader}>
    <div className={styles.loader}>
      <div className={styles.loaderSphere}></div>
    </div>
  </div>
)

const Hero = () => {
  const { isDark } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/AbubakarSaad', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/abubakar-saad', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/AbubakarSaad10', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:abubakar.saad.891@gmail.com', label: 'Email' },
  ]

  if (!mounted) return null

  return (
    <section id="hero" className={styles.hero}>
      {/* Three.js Background */}
      <div className={styles.canvasContainer}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          className={styles.canvas}
        >
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className={styles.content}>
        <div className={styles.container}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Greeting */}
            <motion.p
              className={styles.greeting}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className={styles.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Abubakar Saad
            </motion.h1>

            {/* Animated Title */}
            <div className={styles.titleContainer}>
              <motion.span
                className={styles.titlePrefix}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                I'm a{' '}
              </motion.span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Deep Learning Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Innovator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className={styles.animatedTitle}
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              By night, I am a Deep learning enthusiast and by day a curious full-stack developer. 
              I love understanding the intricate details of how things work, and often learn by hacking, 
              just to make things fun!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <button className={`${styles.ctaButton} btn btn-primary`} onClick={scrollToAbout}>
                <span>View My Work</span>
                <FiArrowDown />
              </button>
              
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.resumeButton} btn btn-secondary`}
              >
                <FiDownload />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
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
                  transition={{ delay: 2.6 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            onClick={scrollToAbout}
          >
            <motion.div
              className={styles.scrollMouse}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowDown />
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className={styles.gradientOverlay}></div>
    </section>
  )
}

export default Hero