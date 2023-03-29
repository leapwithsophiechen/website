import { sitedata } from '@/data';
import { GoogleReviews } from '@/types';
import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  description: string;
  featureImage: string;
  location: string;
  pathname: string;
  review: GoogleReviews;
  title: string;
}

export const LocalBusinessSEO = (props: Props) => {
  //
  const { description, featureImage, location, pathname, review, title } =
    props;
  // eslint-disable-next-line max-len
  const {
    businessName,
    locations,
    logo,
    serviceType,
    siteDescription,
    siteName,
    siteUrl,
    socialMedia,
  } = sitedata;

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
  const logoUrl = formatImageUrl(logo);

  const locIndex = `location${location}`;

  const address = {
    '@type': 'PostalAddress',
    addressCountry: locations[locIndex].address.country,
    addressLocality: locations[locIndex].address.addressLocality,
    addressRegion: locations[locIndex].address.addressRegion,
    postalCode: locations[locIndex].address.postalCode,
    streetAddress: `${locations[locIndex].address.streetAddress1}, ${locations[locIndex].address.streetAddress2}`,
  };
  const telephone = `+${locations[locIndex].phones[0].countryCode} ${locations[locIndex].phones[0].telephone}`;
  const priceRange = locations[locIndex].priceRange;

  const formattedReviews = review.reviews.map((r) => ({
    '@context': 'http://schema.org/',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: r.reviewerName,
    },
    datePublished: r.datePublished,
    itemReviewed: {
      '@type': serviceType,
      address,
      image: logoUrl,
      name: businessName,
      priceRange,
      telephone,
    },
    reviewBody: r.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      bestRating: 5,
      ratingValue: r.ratingValue,
      reviewAspect: r.reviewAspect,
      worstRating: 1,
    },
  }));

  const openingHours = locations[locIndex].openingHoursSpecification;
  let formattedOpeningHours = [] as any;

  if (openingHours) {
    formattedOpeningHours = openingHours.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      closes: day.closes,
      dayOfWeek: `https://schema.org/${day.dayOfWeek}`,
      opens: day.opens,
    }));
  }

  const baseSchema = [
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

  const localBusinessSchema = [
    {
      '@context': 'http://schema.org',
      '@type': serviceType,
      address,
      aggregateRating: {
        '@type': 'AggregateRating',
        bestRating: 5,
        ratingCount: review.reviews.length,
        ratingValue: review.rating,
        reviewCount: review.reviews.length,
        worstRating: 1,
      },
      email: locations[locIndex].emails[0],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: locations[locIndex].latitude,
        longitude: locations[locIndex].longitude,
      },
      image: logoUrl,
      name: businessName,
      openingHoursSpecification: formattedOpeningHours,
      priceRange,
      review: review.reviews.length > 0 && formattedReviews,
      telephone,
      url: siteUrl,
    },
  ];

  const schema = [...baseSchema, ...localBusinessSchema];

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title={title}
        titleTemplate={`%s | ${siteName}`}
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
