import { sitedata } from '@/data';
import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  description: string;
  featureImage: string;
  pathname: string;
  title: string;
}

export const PageSEO = (props: Props) => {
  //
  const { description, featureImage, pathname, title } = props;
  const { siteDescription, siteName, siteUrl, socialMedia } = sitedata;

  const formatImageUrl = (imageRef: string) => {
    if (imageRef.substring(0, 5) !== 'https') {
      return `${siteUrl}/${imageRef}`;
    }
    return imageRef;
  };

  const formatPageUrl = (pathName: string) => {
    if (pathName === '/') {
      return `${siteUrl}/`;
    }
    return `${siteUrl}${pathName}`;
  };

  const metaDescription = description || siteDescription;
  const imageUrl = formatImageUrl(featureImage);

  const schema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    },
    {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      description,
      name: title,
    },
  ];

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title={title}
        // titleTemplate={`%s | ${siteName}`}
      >
        {/* General tags */}
        <meta content={metaDescription} name="description" />
        <meta content={imageUrl} name="image" />

        {/* OpenGraph tags FB, LinkedIn, Pinterest */}
        <meta content={formatPageUrl(pathname)} property="og:url" />
        <meta content={siteName} property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta content={title} property="og:title" />
        <meta content={metaDescription} property="og:description" />
        <meta content={imageUrl} property="og:image" />
        <meta content={'1200'} property="og:image:width" />
        <meta content={'628'} property="og:image:height" />
        <meta content={socialMedia.fbAppId} property="fb:app_id" />

        {/* Twitter Card tags */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={socialMedia.twitterHandle} name="twitter:creator" />
        <meta content={title} name="twitter:title" />
        <meta content={metaDescription} name="twitter:description" />
        <meta content={imageUrl} name="twitter:image" />
      </Helmet>

      {/* Json Ld */}
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        type="application/ld+json"
      />
    </>
  );
};
