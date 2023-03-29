/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

if (process.env.DEVELOPMENT) {
  require('dotenv').config({
    path: `.env.development`,
  });
}

if (process.env.STAGING) {
  require('dotenv').config({
    path: `.env.staging`,
  });
}

module.exports = {
  plugins: [
    {
      options: {
        allExtensions: true,
        isTSX: true,
        jsxPragma: `jsx`,
      },
      resolve: `gatsby-plugin-typescript`,
    },
    {
      options: {
        exclude: ['node_modules', '.cache', 'public'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
      },
      resolve: 'gatsby-plugin-eslint',
    },
    'gatsby-plugin-tsconfig-paths',
    {
      options: {
        isUsingColorMode: false,
        resetCSS: true,
      },
      resolve: '@chakra-ui/gatsby-plugin',
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      options: {
        icon: 'src/images/favicon.png',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: {
        defaults: {
          avifOptions: {},
          backgroundColor: `transparent`,
          blurredOptions: {},
          breakpoints: [750, 1080, 1366, 1920],
          formats: [`auto`, `webp`],
          jpgOptions: {},
          placeholder: `dominantColor`,
          pngOptions: {},
          quality: 50,
          tracedSVGOptions: {},
          webpOptions: {},
        },
      },
      resolve: `gatsby-plugin-sharp`,
    },
    'gatsby-transformer-sharp',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        display: 'swap',
        fonts: [
          `Lato`,
          `Frank Ruhl Libre`,
          `Plus Jakarta Sans`,
          `Montserrat`,
          `Dancing Script`,
          `Waterfall`,
        ],
      },
      resolve: `gatsby-plugin-google-fonts`,
    },
    'gatsby-plugin-postcss',
    {
      options: {
        printRejected: true,
        tailwind: true,
      },
      resolve: `gatsby-plugin-purgecss`,
    },
    {
      options: {
        defaultDataLayer: { platform: 'gatsby' },
        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',
        // Defaults to gatsby-route-change
        // routeChangeEventName: 'gatsby-route-change',
        enableWebVitalsTracking: true,
        id: process.env.GATSBY_GTM_ID,
        includeInDevelopment: true,
      },
      resolve: 'gatsby-plugin-google-tagmanager',
    },
    // {
    //   resolve: '@sentry/gatsby',
    // },
  ],
  siteMetadata: {
    siteUrl: `https://${process.env.GATSBY_MARKETING_SITE_DOMAIN_NAME}`,
    title: `MS Playground`,
  },
};
