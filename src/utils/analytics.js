import ReactGA from 'react-ga4'

// Google Analytics Measurement ID
// Get yours from: https://analytics.google.com/
// This is safe to commit - GA4 Measurement IDs are public by design
const GA_MEASUREMENT_ID = 'YOUR_GA_MEASUREMENT_ID_HERE' // Replace with your actual ID (format: G-XXXXXXXXXX)

// Initialize Google Analytics
export const initGA = () => {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'YOUR_GA_MEASUREMENT_ID_HERE') {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      gtagOptions: {
        send_page_view: false, // We'll handle page views manually
      },
    })
    console.log('✅ Google Analytics initialized:', GA_MEASUREMENT_ID)
  } else {
    console.warn('⚠️ Google Analytics not initialized. Set GA_MEASUREMENT_ID in src/utils/analytics.js')
  }
}

// Track page views
export const trackPageView = (path, title) => {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'YOUR_GA_MEASUREMENT_ID_HERE') {
    ReactGA.send({ 
      hitType: 'pageview', 
      page: path,
      title: title || document.title
    })
    console.log('📊 Page view tracked:', path)
  }
}

// Track custom events (optional - for future use)
export const trackEvent = (category, action, label, value) => {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'YOUR_GA_MEASUREMENT_ID_HERE') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    })
    console.log('📊 Event tracked:', { category, action, label, value })
  }
}
