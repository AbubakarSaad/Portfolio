import ReactGA from 'react-ga4'

const TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your Google Analytics 4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    debug: process.env.NODE_ENV === 'development',
    titleCase: false,
    gaOptions: {
      userId: 'anonymous'
    }
  })
}

export const trackPageView = (path) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: document.title 
  })
}

export const trackEvent = (action, category = 'User Interaction', label = '', value = 0) => {
  ReactGA.event({
    action,
    category,
    label,
    value
  })
}

export const trackClick = (elementName, location = '') => {
  trackEvent('click', 'UI Element', `${elementName}${location ? ` - ${location}` : ''}`)
}

export const trackDownload = (fileName) => {
  trackEvent('download', 'File Download', fileName)
}

export const trackContact = (method) => {
  trackEvent('contact', 'Contact Method', method)
}

export const trackProjectView = (projectName) => {
  trackEvent('view_project', 'Project', projectName)
}

export const trackSectionView = (sectionName) => {
  trackEvent('view_section', 'Section', sectionName)
}