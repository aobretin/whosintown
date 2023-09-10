export interface Artist {
  id?: number;
  name: string;
  url: string;
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  mbid: string;
  tracker_count: number;
  upcoming_event_count: number;
  links: {
    type: string;
    url: string;
  }[];
}

export interface VenueInfo {
  name: string;
  latitude: string;
  longitude: string;
  city: string;
  region: string;
  country: string;
  location: string;
  street_address: string;
}

export interface OfferInfo {
  type: string;
  url: string;
  status: string;
}

export interface EventInfo {
  id: number;
  artist_id: number;
  url: string;
  on_sale_datetime: string;
  datetime: string;
  description?: string;
  venue: VenueInfo;
  offers: OfferInfo[];
  lineup: string[];
  title: string;
}

export interface SelectedArtist {
  artist: Artist;
  events: EventInfo[];
}
