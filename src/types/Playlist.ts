export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
};

export type ExternalUrls = {
  spotify: string;
};

export type Followers = {
  href: null;
  total: number;
};

export type Image = {
  height: number | null;
  url: string;
  width: number | null;
};

export type Owner = {
  display_name?: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  name?: string;
};

export type Tracks = {
  href: string;
  items: Item[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
};

export type Item = {
  added_at: Date;
  added_by: Owner;
  is_local: boolean;
  primary_color: null;
  track: Track;
  video_thumbnail: VideoThumbnail;
};

export type Track = {
  preview_url: string;
  available_markets: string[];
  explicit: boolean;
  type: string;
  episode: boolean;
  track: boolean;
  album: Album;
  artists: Owner[];
  disc_number: number;
  track_number: number;
  duration_ms: number;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  uri: string;
  is_local: boolean;
};

export type Album = {
  available_markets: string[];
  type: string;
  album_type: string;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  uri: string;
  artists: Owner[];
  external_urls: ExternalUrls;
  total_tracks: number;
};

export type ExternalIDS = {
  isrc: string;
};

export type VideoThumbnail = {
  url: null;
};
