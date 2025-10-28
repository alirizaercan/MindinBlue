/**
 * Google Analytics 4 Helper Functions
 * Centralized GA4 tracking utilities for better organization and debugging
 */

/**
 * Track page view manually (for SPA navigation)
 * @param {string} pageTitle - Page title
 * @param {string} pagePath - Page path (optional, defaults to current path)
 */
export const trackPageView = (pageTitle, pagePath = null) => {
  if (typeof window.gtag === 'undefined') {
    console.warn('⚠️ Google Analytics not loaded yet');
    return;
  }

  const path = pagePath || window.location.pathname;
  
  window.gtag('event', 'page_view', {
    page_title: pageTitle || document.title,
    page_location: window.location.href,
    page_path: path,
    send_to: 'G-7GEW6YKK9Z'
  });

  console.log('📊 GA4 Page View:', { pageTitle, path });
};

/**
 * Track custom events
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag === 'undefined') {
    console.warn('⚠️ Google Analytics not loaded yet');
    return;
  }

  window.gtag('event', eventName, {
    ...eventParams,
    send_to: 'G-7GEW6YKK9Z'
  });

  console.log('📊 GA4 Event:', eventName, eventParams);
};

/**
 * Track form submissions
 * @param {string} formName - Name/ID of the form
 * @param {string} formType - Type of form (contact, consultation, etc.)
 */
export const trackFormSubmission = (formName, formType = 'contact') => {
  trackEvent('form_submission', {
    event_category: 'Form',
    event_label: formName,
    form_name: formName,
    form_type: formType,
    value: 1
  });
};

/**
 * Track lead generation
 * @param {string} leadType - Type of lead (consultation, therapy, etc.)
 * @param {number} value - Lead value (optional)
 */
export const trackLead = (leadType, value = 0) => {
  trackEvent('generate_lead', {
    event_category: 'Lead Generation',
    event_label: leadType,
    lead_type: leadType,
    currency: 'PLN',
    value: value
  });
};

/**
 * Track CTA button clicks
 * @param {string} ctaName - Name of the CTA button
 * @param {string} ctaPosition - Position/location of CTA
 */
export const trackCTAClick = (ctaName, ctaPosition) => {
  trackEvent('cta_click', {
    event_category: 'User Engagement',
    event_label: ctaName,
    cta_name: ctaName,
    cta_position: ctaPosition,
    intent_level: 'high'
  });
};

/**
 * Track outbound links
 * @param {string} url - Destination URL
 * @param {string} linkText - Link text/label
 */
export const trackOutboundLink = (url, linkText) => {
  trackEvent('click', {
    event_category: 'Outbound Link',
    event_label: url,
    link_url: url,
    link_text: linkText,
    outbound: true
  });
};

/**
 * Track video interactions
 * @param {string} videoId - Video ID (YouTube, Vimeo, etc.)
 * @param {string} action - Action (play, pause, complete, etc.)
 * @param {number} progress - Progress percentage (optional)
 */
export const trackVideoInteraction = (videoId, action, progress = 0) => {
  trackEvent('video_' + action, {
    event_category: 'Video',
    event_label: videoId,
    video_id: videoId,
    video_action: action,
    video_progress: progress
  });
};

/**
 * Track scroll depth
 * @param {number} percentage - Scroll depth percentage
 */
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', {
    event_category: 'Engagement',
    event_label: `${percentage}%`,
    scroll_depth: percentage,
    non_interaction: true
  });
};

/**
 * Track time on page
 * @param {number} seconds - Time spent on page in seconds
 */
export const trackTimeOnPage = (seconds) => {
  trackEvent('timing_complete', {
    event_category: 'Engagement',
    event_label: 'Time on Page',
    name: 'page_engagement',
    value: seconds
  });
};

/**
 * Track user journey/funnel steps
 * @param {string} stepName - Name of the funnel step
 * @param {number} stepNumber - Step number in funnel
 */
export const trackFunnelStep = (stepName, stepNumber) => {
  trackEvent('funnel_step', {
    event_category: 'User Journey',
    event_label: stepName,
    funnel_step: stepNumber,
    step_name: stepName
  });
};

/**
 * Track errors
 * @param {string} errorMessage - Error message
 * @param {string} errorLocation - Where the error occurred
 * @param {boolean} fatal - Whether error is fatal
 */
export const trackError = (errorMessage, errorLocation, fatal = false) => {
  trackEvent('exception', {
    description: errorMessage,
    location: errorLocation,
    fatal: fatal
  });
};

/**
 * Set user properties
 * @param {object} properties - User properties to set
 */
export const setUserProperties = (properties) => {
  if (typeof window.gtag === 'undefined') {
    console.warn('⚠️ Google Analytics not loaded yet');
    return;
  }

  window.gtag('set', 'user_properties', properties);
  console.log('📊 GA4 User Properties Set:', properties);
};

/**
 * Track e-commerce events (for future use)
 * @param {string} eventName - E-commerce event name
 * @param {object} items - Array of items
 * @param {number} value - Transaction value
 */
export const trackEcommerce = (eventName, items = [], value = 0) => {
  trackEvent(eventName, {
    currency: 'PLN',
    value: value,
    items: items
  });
};

export default {
  trackPageView,
  trackEvent,
  trackFormSubmission,
  trackLead,
  trackCTAClick,
  trackOutboundLink,
  trackVideoInteraction,
  trackScrollDepth,
  trackTimeOnPage,
  trackFunnelStep,
  trackError,
  setUserProperties,
  trackEcommerce
};
