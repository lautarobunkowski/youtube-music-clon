// import React from 'react'
import type { Item } from "@types/miselfPlaylist.ts";
// import { ReactNode } from "React";
import { Link } from "react-router-dom";

type Props = {
  playlist: Item;
};

// const noneImgSVG = () => (
//   <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path></svg>
// )

const PlaylistCard = ({ playlist }: Props) => {
  // let playlistCardImg: string | JSX.Element
  // if (playlist.images.length > 0 ) {
  //   playlistCardImg = playlist.images[0].url
  // } else {
  //   playlistCardImg = noneImgSVG()
  // }

  return (
    <div className="text-[15px] leading-4 font-normal max-w-[196px] flex flex-col items-center justify-start overflow-hidden">
      <Link
        to={`/playlist?list=${playlist.id}`}
        className="rounded-md overflow-hidden w-full aspect-square"
      >
        <picture>
          <img
            src={
              playlist.images.length > 0
                ? playlist.images[0].url
                : "images/noneImgSVG.svg"
            }
            // src={playlistCardImg}
            alt=""
            className="w-full h-full"
          />
        </picture>
      </Link>
      <div className="overflow-hidden max-h-[35px] mt-2">
        <Link to={`/playlist?list=${playlist.id}`}>
          <p>{playlist.name}</p>
        </Link>
      </div>
      <div className="text-zinc-400">
        <p>Lista de reproducción</p>
        <span>LautaroB</span>
      </div>
    </div>
  );
};

export default PlaylistCard;
