interface Review {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface Params {
  apiKey: string;
  placeId: string;
  reviewAspect: string;
}

const returnValue = {
  error: true,
  googleReviews: {
    rating: null,
    reviews: null,
  },
};

export const getGoogleReview = async ({
  apiKey,
  placeId,
  reviewAspect,
}: Params) => {
  //
  const requestUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&key=${apiKey}`;

  try {
    const response = await fetch(requestUrl);

    if (response) {
      const {
        result: { rating, reviews: rawReviews },
      } = await response.json();

      const reviews = rawReviews.map((review: Review, index: number) => ({
        datePublished: new Date(review.time * 1000).toISOString(),
        id: index,
        isoDate: review.time,
        ratingValue: review.rating,
        relativeTimeDescription: review.relative_time_description,
        reviewAspect,
        reviewBody: review.text,
        reviewerImageUrl: review.profile_photo_url,
        reviewerName: review.author_name,
      }));

      return {
        error: false,
        googleReviews: {
          rating,
          reviews,
        },
      };
    }
  } catch (error) {
    return returnValue;
  }

  return returnValue;
};
