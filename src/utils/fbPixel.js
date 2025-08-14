// Facebook Pixel utilities for tracking events
export const initFacebookPixel = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log('Facebook Pixel initialized');
  }
};

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
    console.log(`Facebook Pixel event tracked: ${eventName}`, parameters);
  }
};

export const trackCustomEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
    console.log(`Facebook Pixel custom event tracked: ${eventName}`, parameters);
  }
};

// Predefined events for MindinBlue
export const trackLead = (leadData = {}) => {
  trackEvent('Lead', {
    content_name: 'Contact Form Submission',
    content_category: 'Therapy Services',
    ...leadData
  });
};

export const trackContact = (contactData = {}) => {
  trackEvent('Contact', {
    content_name: 'Contact Form',
    ...contactData
  });
};

export const trackViewContent = (contentData = {}) => {
  trackEvent('ViewContent', {
    content_type: 'website',
    ...contentData
  });
};
