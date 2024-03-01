export type PlayBackState = {
    device:                 Device;
    shuffle_state:          boolean;
    smart_shuffle:          boolean;
    repeat_state:           string;
    timestamp:              number;
    context:                Context;
    progress_ms:            number;
    item:                   Item;
    currently_playing_type: string;
    actions:                Actions;
    is_playing:             boolean;
}

export type Actions = {
    disallows: Disallows;
}

export type Disallows = {
    pausing: boolean;
}

export type Context = {
    external_urls: ExternalUrls;
    href:          string;
    type:          string;
    uri:           string;
}

export type ExternalUrls = {
    spotify: string;
}

export type Device = {
    id:                 string;
    is_active:          boolean;
    is_private_session: boolean;
    is_restricted:      boolean;
    name:               string;
    supports_volume:    boolean;
    type:               string;
    volume_percent:     number;
}

export type Item = {
    album:             Album;
    artists:           Artist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    popularity:        number;
    preview_url:       string;
    track_number:      number;
    type:              string;
    uri:               string;
}

export type Album = {
    album_type:             string;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: string;
    total_tracks:           number;
    type:                   string;
    uri:                    string;
}

export type Artist = {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          string;
    uri:           string;
}

export type Image = {
    height: number;
    url:    string;
    width:  number;
}

export type ExternalIDS = {
    isrc: string;
}
