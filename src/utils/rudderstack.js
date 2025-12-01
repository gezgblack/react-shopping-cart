import * as rudderanalytics from 'rudder-sdk-js';

rudderanalytics.load(
  '2qcKxjVX6xyzOXnDE6j6fCnFHsh',
  'https://shamildemzlfpr.dataplane.rudderstack.com'
);

// Expose rudderanalytics to the global window object for browser console access
if (typeof window !== 'undefined') {
  window.rudderanalytics = rudderanalytics;
}

export default rudderanalytics;
