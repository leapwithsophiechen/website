export interface GoogleReview {
  datePublished: string;
  id: number;
  isoDate: number;
  ratingValue: number;
  relativeTimeDescription: string;
  reviewAspect: string;
  reviewBody: string;
  reviewerImageUrl: string;
  reviewerName: string;
}

export interface GoogleReviews {
  rating: number;
  reviews: GoogleReview[];
}
