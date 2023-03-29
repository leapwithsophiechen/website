type Country = 'Singapore' | 'Malaysia';
type CountryIso = 'SG' | 'MY';
type CountryCode = 65 | 60;
type ServiceType = 'Restaurant' | 'Consultant';
type MarketingPlatform = 'Facebook' | 'Instagram' | 'Twitter';
type ECommercePlatform = 'Shopify';

interface Location {
  address: {
    addressLocality: string;
    addressRegion: string;
    country: Country;
    countryIso: CountryIso;
    postalCode: string;
    streetAddress1: string;
    streetAddress2: string;
  };
  ageRestriction?: number;
  emails: string[];
  googleMap: string;
  googleMapEmbed: string;
  latitude: number;
  longitude: number;
  openingHoursSpecification?: {
    closes: string;
    dayOfWeek:
      | 'Monday'
      | 'Tuesday'
      | 'Wednesday'
      | 'Thursday'
      | 'Friday'
      | 'Saturday'
      | 'Sunday';
    opens: string;
  }[];
  phones: {
    countryCode: CountryCode;
    telephone: number;
  }[];
  priceRange?: 1 | 2 | 3 | 4 | 5;
}

export type Sitedata = {
  businessName: string;
  contactName: string;
  cookieLifeInDays: number;
  eCommercePlatform?: ECommercePlatform[];
  locations: {
    [location1: string]: Location;
  };
  logo: string;
  marketingPlatform?: MarketingPlatform[];

  serviceType: ServiceType;
  siteDescription: string;
  siteName: string;
  siteUrl: string;
  socialMedia: {
    facebookHandle?: string;
    facebookProfileId?: string;
    fbAppId?: string;
    instagramHandle?: string;
    linkedInHandle?: string;
    twitterHandle?: string;
  };
  uen?: string;
};
