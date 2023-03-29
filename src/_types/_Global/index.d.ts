declare namespace NodeJS {
  interface ProcessEnv {
    GATSBY_API_DOMAIN_NAME: string;
    GATSBY_ENV: string;
    GATSBY_GOOGLE_ReCAPTCHA_SITEKEY: string;
    GATSBY_GOOGLE_SEARCH_HTML_VERIFICATION: string;
    GATSBY_GTM_ID: string;
    GATSBY_LOG_ROCKET_ID: string;
    GATSBY_MARKETING_API_PATH: string;
    GATSBY_MARKETING_SITE_DOMAIN_NAME: string;
    GATSBY_SENTRY_DSN: string;
    GATSBY_SENTRY_ENVNAME: string;
    GATSBY_SENTRY_SAMPLE_RATE: string;
    NODE_ENV: string;
  }
}

declare module 'react-hook-form-persist';
