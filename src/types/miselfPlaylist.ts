export type Data = {
  href: string;
  items: Item[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
};

export type Item = {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[] | [];
  name: string;
  owner: Owner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: ItemType;
  uri: string;
};

export type ExternalUrls = {
  spotify: string;
};

export type Image = {
  height: number | null;
  url: string;
  width: number | null;
};

export type Owner = {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: OwnerType;
  uri: string;
};

export enum OwnerType {
  User = "user",
}

export type Tracks = {
  href: string;
  total: number;
};

export enum ItemType {
  Playlist = "playlist",
}
