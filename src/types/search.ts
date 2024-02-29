export type SearchData = {
  albums: Albums;
  artists: Artists;
  tracks: Albums;
  playlists: Albums;
  episodes: Albums;
  audiobooks: Albums;
};

export type Albums = {
  href: string;
  items: AlbumsItem[];
  limit: number;
  next: null | string;
  offset: number;
  previous: null;
  total: number;
};

export type AlbumsItem = {
  album_type?: AlbumTypeEnum;
  artists: Owner[];
  available_markets?: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision?: ReleaseDatePrecision;
  total_tracks?: number;
  type: PurpleType;
  uri: string;
  audio_preview_url?: string;
  description?: string;
  duration_ms?: number;
  explicit?: boolean;
  html_description?: string;
  is_externally_hosted?: boolean;
  is_playable?: boolean;
  language?: Language;
  languages?: Language[];
  resume_point?: ResumePoint;
  collaborative?: boolean;
  owner?: Owner;
  primary_color?: null;
  public?: null;
  snapshot_id?: string;
  tracks?: Tracks;
  album: Album;
  disc_number?: number;
  external_ids?: ExternalIDS;
  is_local?: boolean;
  popularity?: number;
  preview_url?: null | string;
  track_number?: number;
};

export type Album = {
  album_type: AlbumTypeEnum;
  artists: Owner[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: AlbumTypeEnum;
  uri: string;
};

export enum AlbumTypeEnum {
  Album = "album",
  Single = "single",
}

export type Owner = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: OwnerType;
  uri: string;
  display_name?: string;
};

export type ExternalUrls = {
  spotify: string;
};

export enum OwnerType {
  Artist = "artist",
  User = "user",
}

export type Image = {
  height: number | null;
  url: string;
  width: number | null;
};

export enum ReleaseDatePrecision {
  Day = "day",
}

export type ExternalIDS = {
  isrc: string;
};

export enum Language {
  En = "en",
  Pt = "pt",
}

export type ResumePoint = {
  fully_played: boolean;
  resume_position_ms: number;
};

export type Tracks = {
  href: null | string;
  total: number;
};

export enum PurpleType {
  Album = "album",
  Episode = "episode",
  Playlist = "playlist",
  Track = "track",
}

export type Artists = {
  href: string;
  items: ArtistsItem[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
};

export type ArtistsItem = {
  external_urls: ExternalUrls;
  followers: Tracks;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: OwnerType;
  uri: string;
};
