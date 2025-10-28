import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

/**
 * Custom hook to track page views on route changes
 * Automatically sends page_view event to Google Analytics 4
 * 
 * Usage: Add this hook to your main App.js component
 * 
 * @example
 * import usePageTracking from './utils/usePageTracking';
 * 
 * function App() {
 *   usePageTracking(); // This will track all route changes
 *   return <YourApp />;
 * }
 */
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Get page title - try multiple sources
    const pageTitle = document.title || 
                      document.querySelector('meta[property="og:title"]')?.content ||
                      'MindinBlue';

    // Track page view with current location
    trackPageView(pageTitle, location.pathname + location.search);

    // Optional: Track page engagement time when user leaves
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      
      // Only track if user spent more than 3 seconds on page
      if (timeSpent > 3 && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_engagement', {
          event_category: 'Engagement',
          event_label: location.pathname,
          time_on_page: timeSpent,
          non_interaction: true
        });
      }
    };
  }, [location]);
};

export default usePageTracking;
