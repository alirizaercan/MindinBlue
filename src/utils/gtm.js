/**
 * Google Tag Manager (GTM) Helper Functions
 * Push events to GTM dataLayer for centralized tracking
 * 
 * GTM Container ID: GTM-K24Z7T4X
 */

/**
 * Initialize dataLayer if not exists
 */
const initDataLayer = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
};

let gtmErrorGuardInstalled = false;

const isLocalDevelopment = () =>
  process.env.NODE_ENV === 'development' &&
  typeof window !== 'undefined' &&
  ['localhost', '127.0.0.1'].includes(window.location.hostname);

/**
 * Prevent third-party GTM tag errors from taking over the React dev overlay.
 * This only runs on localhost development builds.
 */
export const installGtmErrorGuard = () => {
  if (!isLocalDevelopment() || gtmErrorGuardInstalled) {
    return;
  }

  gtmErrorGuardInstalled = true;

  window.addEventListener(
    'error',
    (event) => {
      const errorSource = [
        event.message,
        event.filename,
        event.error && event.error.stack,
      ]
        .filter(Boolean)
        .join(' ');

      const isGtmError =
        errorSource.includes('googletagmanager.com') ||
        errorSource.includes('gtm.js') ||
        event.message === 'Script error.';

      if (isGtmError) {
        console.warn('GTM script error suppressed in local development.', event);
        event.preventDefault();
      }
    },
    true
  );
};

/**
 * Push event to GTM dataLayer
 * @param {string} event - Event name
 * @param {object} data - Additional event data
 */
export const pushToDataLayer = (event, data = {}) => {
  initDataLayer();

  if (typeof window === 'undefined') {
    return;
  }

  const payload = {
    event: event,
    ...data
  };

  try {
    window.dataLayer.push(payload);
    console.log('GTM DataLayer Push:', payload);
  } catch (error) {
    console.warn('GTM DataLayer push failed:', error, payload);
  }
};

/**
 * Track page view in GTM
 * @param {string} pageTitle - Page title
 * @param {string} pagePath - Page path
 * @param {string} pageUrl - Full page URL
 */
export const gtmPageView = (pageTitle, pagePath, pageUrl = null) => {
  pushToDataLayer('pageview', {
    page_title: pageTitle,
    page_path: pagePath,
    page_url: pageUrl || window.location.href,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track form submission in GTM
 * @param {string} formName - Name of the form
 * @param {string} formType - Type of form
 * @param {object} formData - Form data (optional)
 */
export const gtmFormSubmit = (formName, formType, formData = {}) => {
  pushToDataLayer('form_submit', {
    form_name: formName,
    form_type: formType,
    form_destination: formData.email || '',
    form_submission_timestamp: new Date().toISOString(),
    ...formData
  });
};

/**
 * Track lead generation in GTM
 * @param {string} leadType - Type of lead
 * @param {string} leadValue - Lead value
 * @param {object} leadData - Additional lead data
 */
export const gtmLeadGeneration = (leadType, leadValue = '0', leadData = {}) => {
  pushToDataLayer('generate_lead', {
    lead_type: leadType,
    lead_value: leadValue,
    currency: 'PLN',
    lead_timestamp: new Date().toISOString(),
    ...leadData
  });
};

/**
 * Track CTA button clicks in GTM
 * @param {string} ctaName - CTA button name
 * @param {string} ctaLocation - Location/position of CTA
 * @param {string} ctaUrl - Destination URL (optional)
 */
export const gtmCTAClick = (ctaName, ctaLocation, ctaUrl = null) => {
  pushToDataLayer('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    cta_url: ctaUrl || window.location.href,
    cta_timestamp: new Date().toISOString()
  });
};

/**
 * Track video interactions in GTM
 * @param {string} videoId - Video ID
 * @param {string} videoAction - Action (play, pause, complete, etc.)
 * @param {number} videoProgress - Progress percentage
 * @param {string} videoTitle - Video title (optional)
 */
export const gtmVideoEvent = (videoId, videoAction, videoProgress = 0, videoTitle = '') => {
  pushToDataLayer('video_' + videoAction, {
    video_id: videoId,
    video_title: videoTitle,
    video_action: videoAction,
    video_progress: videoProgress,
    video_timestamp: new Date().toISOString()
  });
};

/**
 * Track scroll depth in GTM
 * @param {number} scrollDepth - Scroll depth percentage
 */
export const gtmScrollDepth = (scrollDepth) => {
  pushToDataLayer('scroll_depth', {
    scroll_percentage: scrollDepth,
    scroll_timestamp: new Date().toISOString()
  });
};

/**
 * Track outbound link clicks in GTM
 * @param {string} linkUrl - Destination URL
 * @param {string} linkText - Link text
 * @param {string} linkLocation - Where the link is located
 */
export const gtmOutboundClick = (linkUrl, linkText, linkLocation) => {
  pushToDataLayer('outbound_click', {
    link_url: linkUrl,
    link_text: linkText,
    link_location: linkLocation,
    link_domain: new URL(linkUrl).hostname,
    click_timestamp: new Date().toISOString()
  });
};

/**
 * Track modal/popup interactions
 * @param {string} modalName - Name of modal
 * @param {string} modalAction - Action (open, close, submit)
 */
export const gtmModalEvent = (modalName, modalAction) => {
  pushToDataLayer('modal_interaction', {
    modal_name: modalName,
    modal_action: modalAction,
    modal_timestamp: new Date().toISOString()
  });
};

/**
 * Track user engagement milestones
 * @param {string} engagementType - Type of engagement
 * @param {number} engagementValue - Engagement value (time, depth, etc.)
 */
export const gtmEngagement = (engagementType, engagementValue) => {
  pushToDataLayer('user_engagement', {
    engagement_type: engagementType,
    engagement_value: engagementValue,
    engagement_timestamp: new Date().toISOString()
  });
};

/**
 * Track errors
 * @param {string} errorMessage - Error message
 * @param {string} errorLocation - Where error occurred
 * @param {boolean} errorFatal - Is error fatal?
 */
export const gtmError = (errorMessage, errorLocation, errorFatal = false) => {
  pushToDataLayer('error', {
    error_message: errorMessage,
    error_location: errorLocation,
    error_fatal: errorFatal,
    error_timestamp: new Date().toISOString()
  });
};

/**
 * Set user properties in dataLayer
 * @param {object} userProperties - User properties object
 */
export const gtmSetUserProperties = (userProperties) => {
  pushToDataLayer('user_properties_set', {
    user_properties: userProperties,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track custom conversion events
 * @param {string} conversionName - Name of conversion
 * @param {number} conversionValue - Value of conversion
 * @param {object} conversionData - Additional conversion data
 */
export const gtmConversion = (conversionName, conversionValue = 0, conversionData = {}) => {
  pushToDataLayer('conversion', {
    conversion_name: conversionName,
    conversion_value: conversionValue,
    currency: 'PLN',
    conversion_timestamp: new Date().toISOString(),
    ...conversionData
  });
};

/**
 * Track e-commerce events (for future use)
 * @param {string} ecommerceAction - Action (add_to_cart, purchase, etc.)
 * @param {object} ecommerceData - E-commerce data
 */
export const gtmEcommerce = (ecommerceAction, ecommerceData) => {
  pushToDataLayer(ecommerceAction, {
    ecommerce: ecommerceData,
    timestamp: new Date().toISOString()
  });
};

/**
 * Clear ecommerce object (important for SPA)
 */
export const gtmClearEcommerce = () => {
  pushToDataLayer('ecommerce_clear', {
    ecommerce: null
  });
};

// Initialize dataLayer on module load
installGtmErrorGuard();
initDataLayer();

export default {
  installGtmErrorGuard,
  pushToDataLayer,
  gtmPageView,
  gtmFormSubmit,
  gtmLeadGeneration,
  gtmCTAClick,
  gtmVideoEvent,
  gtmScrollDepth,
  gtmOutboundClick,
  gtmModalEvent,
  gtmEngagement,
  gtmError,
  gtmSetUserProperties,
  gtmConversion,
  gtmEcommerce,
  gtmClearEcommerce
};
