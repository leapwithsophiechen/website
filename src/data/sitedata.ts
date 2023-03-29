import { Sitedata } from '@/types';

export const sitedata: Sitedata = {
  businessName: 'Leap with Sophie Chen',
  contactName: 'Sophie',

  cookieLifeInDays: 1,
  eCommercePlatform: ['Shopify'],

  locations: {
    location1: {
      address: {
        addressLocality: 'Singapore',
        addressRegion: 'Singapore',
        country: 'Singapore',
        countryIso: 'SG',
        postalCode: '068914',
        streetAddress1: '160 Robinson Road',
        streetAddress2: ' #14-04 Singapore Business Federation Centre',
      },
      ageRestriction: 100,
      emails: ['sophie@leapwithsophiechen.com'],
      googleMap: 'https://goo.gl/maps/m1dx6nANovSdHH287',
      googleMapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7490073810563!2d103.87425171580286!3d1.3265486620168294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1747cf670797%3A0xd06738670617b515!2sBakedByWolf!5e0!3m2!1sen!2ssg!4v1642126248400!5m2!1sen!2ssg',
      latitude: 1.326838,
      longitude: 103.876476,
      openingHoursSpecification: [
        {
          closes: '17:30:00',
          dayOfWeek: 'Monday',
          opens: '09:00:00',
        },
        {
          closes: '17:30:00',
          dayOfWeek: 'Tuesday',
          opens: '09:00:00',
        },
        {
          closes: '17:30:00',
          dayOfWeek: 'Wednesday',
          opens: '09:00:00',
        },
        {
          closes: '17:30:00',
          dayOfWeek: 'Thursday',
          opens: '09:00:00',
        },
        {
          closes: '17:30:00',
          dayOfWeek: 'Friday',
          opens: '09:00:00',
        },
      ],
      phones: [
        {
          countryCode: 65,
          telephone: 12345678,
        },
      ],
      priceRange: 5,
    },
  },
  logo: 'logo.jpg',
  marketingPlatform: ['Facebook', 'Instagram'],

  serviceType: 'Consultant',
  siteDescription: 'Website description',

  siteName: 'Leap with Sophie Chen',

  siteUrl: 'https://www.leapwithsophiechen.com',

  socialMedia: {
    facebookHandle: 'xxx-101046245257550',
    facebookProfileId: '',
    fbAppId: '',
    instagramHandle: 'https://www.instagram.com/leapwithsophiechen/',
  },
  uen: 'xxx',
};
