const apiDomainName = process.env.GATSBY_API_DOMAIN_NAME;
const marketingApiPath = process.env.GATSBY_MARKETING_API_PATH;

export const marketingApiBaseUrl = `https://${apiDomainName}/${marketingApiPath}`;

export const marketingSiteUrl = `https://${process.env.GATSBY_MARKETING_SITE_DOMAIN_NAME}`;

export const googleReCaptchaSiteKey =
  process.env.GATSBY_GOOGLE_ReCAPTCHA_SITEKEY;
