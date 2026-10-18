export interface Restaurant {
  businessStatus?: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon?: string;
  // image?: string;
  ix?: string;
  name?: string;
  openingHours?: {
    openNow?: boolean;
  };
  photos?: PhotosProps[];
  images: string[];
  placeId?: string;
  plusCode?: {
    compoundCode: string;
    globalCode: string;
  };
  priceLevel?: number;
  rating?: number;
  reference?: string;
  scope?: string;
  types?: string[];
  userRatingsTotal?: number;
  vicinity?: string;
}

export interface RestaurantsResponse {
  htmlAttributions: string[];
  next_page_token?: string;
  results: Restaurant[];
}

export interface PhotosProps {
  height: number;
  htmlAttributions: string[];
  photoReference: string;
  width: number;
}
