import * as rudderanalytics from 'rudder-sdk-js';

rudderanalytics.load(
  '369CwDwHPldEnGQltBxz2hNtzme',
  'https://rudderstacaihq.dataplane.rudderstack.com'
);

// Expose rudderanalytics to the global window object for browser console access
if (typeof window !== 'undefined') {
  window.rudderanalytics = rudderanalytics;
}

export default rudderanalytics;
