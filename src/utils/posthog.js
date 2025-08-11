import posthog from 'posthog-js';

// Initialize PostHog
if (typeof window !== 'undefined') {
  posthog.init('phc_V4BpyoMQgPR503yhijMmq83OXM6dHlFtBY7vuS9dZaR', {
    api_host: 'https://app.posthog.com', // or your self-hosted instance
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') console.log('PostHog loaded');
    },
    // Capture pageviews automatically
    capture_pageview: true,
    // Other useful options
    autocapture: true, // Automatically capture clicks, form submissions, etc.
    disable_session_recording: false, // Enable session recordings
    cross_subdomain_cookie: false,
    secure_cookie: true,
  });
}

export default posthog;
