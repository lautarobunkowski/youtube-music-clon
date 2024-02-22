// import React from 'react'
import type { Item } from "@types/miselfPlaylist.ts";

type Props = {
  playlist: Item;
};

const PlaylistCard = ({ playlist }: Props) => {
  return (
    <div>
      <picture>
        <img
          src={playlist.images.length > 0 ? playlist.images[0].url : ""}
          alt=""
          className="h-10 w-10"
        />
      </picture>
      <p>{playlist.name}</p>
    </div>
  );
};

export default PlaylistCard;
