import { Seo } from '@/types';

const businessName = 'Business name';

export const seo: Seo = [
  {
    description: 'Description for landing page.',
    page: '/',
    title: 'Page title | Tagline',
  },
  {
    description: 'Description for about.',
    page: '/about',
    title: 'Page title | Tagline',
  },
  {
    description: 'Description for contact form.',
    page: '/contact/form',
    title: 'Page title | Tagline',
  },
  {
    description: 'Description for contact details.',
    page: '/contact/find-us',
    title: 'Page title | Tagline',
  },
  {
    description: 'Not Found',
    page: '/404',
    title: '404',
  },
  {
    description: `${businessName}'s Sitemap`,
    page: '/sitemap',
    title: 'Sitemap',
  },
  {
    description: `${businessName}'s Cookie Policy`,
    page: '/legal/cookie-policy',
    title: 'Cookie Policy',
  },
  {
    description: `${businessName}'s Privacy Policy`,
    page: '/legal/privacy-policy',
    title: 'Privacy Policy',
  },
  {
    description: `${businessName}'s Terms of Use`,
    page: '/legal/terms-of-use',
    title: 'Terms of Use',
  },
];
