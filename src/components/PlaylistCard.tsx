// import React from 'react'
import type { Item } from "@types/miselfPlaylist.ts";
// import { ReactNode } from "React";
import { Link } from "react-router-dom";
import Play from "@icons/Play.jsx";

type Props = {
  playlist: Item;
};

const NoneImgSvg = () => (
  <svg
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    // width="24"
    // height="24"
    className="w-14"
  >
    <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
  </svg>
);

const PlaylistCard = ({ playlist }: Props) => {
  return (
    <div className="text-[15px] leading-4 font-normal max-w-[196px] flex flex-col items-center justify-start overflow-hidden">
      <Link
        to={`/playlist?list=${playlist.id}`}
        className="group relative rounded-md overflow-hidden w-full aspect-square "
      >
        <div className="group-hover:opacity-100 opacity-0 w-full h-full absolute top-0 left-0 bg-gradient-to-t from-transparent to-black/30"></div>
        <picture>
          {playlist.images.length > 0 ? (
            <img
              src={playlist.images[0].url}
              alt=""
              className="w-full h-full"
            />
          ) : (
            <div className="text-zinc-600 flex items-center justify-center w-full h-full bg-zinc-800">
              <NoneImgSvg />
            </div>
          )}
        </picture>
        <button className="group-hover:opacity-100 opacity-0 absolute rounded-full bottom-4 right-4 bg-black/40 hover:bg-black hover:scale-110 p-3 transition duration-300">
          <Play />
        </button>
      </Link>
      <div className="mt-2">
        <div className="max-h-[35px] overflow-hidden">
          <Link
            to={`/playlist?list=${playlist.id}`}
            className="hover:underline"
          >
            <p>{playlist.name}</p>
          </Link>
        </div>
        <div className="text-zinc-400 mt-1">
          <p>Lista de reproducción</p>
          <span>LautaroB</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
