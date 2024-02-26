export type MostPopularSongs = {
  tracks: Track[];
};

export type Track = {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: TrackType;
  uri: string;
};

export type Album = {
  album_type: AlbumTypeEnum;
  artists: Artist[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: AlbumTypeEnum;
  uri: string;
};

export enum AlbumTypeEnum {
  Album = "album",
  Single = "single",
}

export type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: ID;
  name: Name;
  type: ArtistType;
  uri: URI;
};

export type ExternalUrls = {
  spotify: string;
};

export enum ID {
  The1E6E3PEiDGmLH89A83Pe5G = "1E6e3PEiDGmLH89A83pe5g",
  The4LxJ1906ZdcktLBNIpvkMS = "4lxJ1906ZdcktLbNIpvkMs",
}

export enum Name {
  Inertia = "Inertia",
  LiziBlanco = "Lizi Blanco",
}

export enum ArtistType {
  Artist = "artist",
}

export enum URI {
  SpotifyArtist1E6E3PEiDGmLH89A83Pe5G = "spotify:artist:1E6e3PEiDGmLH89A83pe5g",
  SpotifyArtist4LxJ1906ZdcktLBNIpvkMS = "spotify:artist:4lxJ1906ZdcktLbNIpvkMs",
}

export type Image = {
  height: number;
  url: string;
  width: number;
};

export enum ReleaseDatePrecision {
  Day = "day",
}

export type ExternalIDS = {
  isrc: string;
};

export enum TrackType {
  Track = "track",
}
