import type { Artist, EventInfo, SelectedArtist } from "models/entities";

export const mockArtist: Artist = {
  id: 1,
  name: "test artist",
  image_url: "test_image",
  url: "url",
  thumb_url: "url",
  facebook_page_url: "url",
  mbid: "",
  tracker_count: 1,
  upcoming_event_count: 1,
  links: [],
};

export const mockEvent: EventInfo = {
  id: 1,
  artist_id: 1,
  url: "url",
  on_sale_datetime: "2021-01-01",
  datetime: "2021-01-01",
  description: "test",
  venue: {
    name: "test",
    latitude: "1",
    longitude: "1",
    city: "test",
    region: "test",
    country: "test",
    location: "test",
    street_address: "test",
  },
  offers: [],
  lineup: ["test"],
  title: "test event",
};

export const mockArtistWithEvent: SelectedArtist = {
  artist: mockArtist,
  events: [mockEvent],
};
