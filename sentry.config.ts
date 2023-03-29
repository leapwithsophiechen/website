/* eslint-disable no-param-reassign */
import * as Sentry from '@sentry/gatsby';

Sentry.init({
  // Adjust this value in production
  beforeSend(event) {
    // Modify the event here
    if (event.user) {
      // Don't send user's email address
      delete event.user.email;
    }
    return event;
  },

  dsn: process.env.GATSBY_SENTRY_DSN,
  environment: process.env.GATSBY_SENTRY_ENVNAME,
  sampleRate: parseInt(process.env.GATSBY_SENTRY_SAMPLE_RATE, 10),
});
