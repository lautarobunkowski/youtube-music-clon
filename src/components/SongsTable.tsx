// import React from 'react'
import type { Playlist, Track } from "@types/Playlist";
import type { MostPopularSongs } from "@types/mostPopularSongs";
import type { Album } from "@types/album";
import { Link } from "react-router-dom";
import useStore from "@store/store";
import Play from "@icons/Play";
import Explicit from "@icons/Explicit";
import axios from "@/axiosConfig";

const formatTime = (time: number) => {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor(time / 1000 / 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export type PropsSongsTable = {
  tracks: MostPopularSongs;
};

export const SongsTable = ({ tracks }: PropsSongsTable) => {
  const { setIsPlaying } = useStore((state) => state);
  const { isPlaying } = useStore((state) => state);
  const { setCurrentSong } = useStore((state) => state);
  const { currentSong } = useStore((state) => state);

  const handlerPlayMusic = async (
    tracks: Track[],
    songId: string,
    index: number
  ) => {
    const tracksId = tracks.map((track) => track.uri);
    console.log(tracksId);
    if (currentSong.id === songId) {
      if (isPlaying) {
        await axios.put(`https://api.spotify.com/v1/me/player/pause`);
      } else {
        await axios.put(`https://api.spotify.com/v1/me/player/play`);
      }
    } else {
      await axios.put(`https://api.spotify.com/v1/me/player/play`, {
        uris: tracksId,
        // offset: index,
        position_ms: 0,
      });
    }
    setIsPlaying();
    setCurrentSong({
      id: songId,
      duration_ms: 50000,
    });
  };

  return (
    <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/20">
      <tbody>
        {tracks.tracks ? (
          tracks.tracks.slice(0, 5).map((track, index) => (
            <tr
              key={`track-${index}`}
              className="group border-b border-zinc-800 h-12 font-semibold"
            >
              <td className="w-[550px]">
                <div
                  className="flex ml-2 gap-x-6 items-center cursor-pointer"
                  onClick={() =>
                    handlerPlayMusic(tracks.tracks, track.id, index)
                  }
                >
                  <div className="relative w-8 h-8">
                    <img
                      src={track.album.images[2]?.url}
                      alt={track.name}
                      className="w-full h-full"
                    />
                    <div className="group-hover:bg-black/80 absolute top-0 left-0 w-full h-full"></div>
                    <div className="absolute top-2 left-2 invisible group-hover:visible ">
                      <Play />
                    </div>
                  </div>
                  <h3>{track.name}</h3>
                </div>
              </td>
              <td>
                <Link
                  to={`/album?list=${track.album.id}`}
                  className="hover:underline text-zinc-500"
                >
                  {track.artists[0].name}
                </Link>
              </td>
              <td className=" text-zinc-500 relative">
                <div className=" flex items-center justify-end">
                  <div className="flex items-center justify-center">
                    <div className="invisible group-hover:visible absolute w-5 h-5 border border-white cursor-pointer hover:bg-zinc-800"></div>
                    <span className="group-hover:invisible">
                      {formatTime(track.duration_ms)}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-xl text-zinc-500 font-extralight">
              No hay elementos en la lista de reproducción.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export type PropsPlaylistSongsTable = {
  playlist: Playlist;
};

export const PlaylistSongsTable = ({ playlist }: PropsPlaylistSongsTable) => {
  const { setIsPlaying } = useStore((state) => state);
  const { isPlaying } = useStore((state) => state);
  const { setCurrentSong } = useStore((state) => state);
  const { currentSong } = useStore((state) => state);

  const handlerPlayMusic = async (
    playlistId: string,
    songId: string,
    index: number
  ) => {
    if (currentSong.id === songId) {
      if (isPlaying) {
        await axios.put(`https://api.spotify.com/v1/me/player/pause`);
      } else {
        await axios.put(`https://api.spotify.com/v1/me/player/play`);
      }
    } else {
      await axios.put(`https://api.spotify.com/v1/me/player/play`, {
        context_uri: `spotify:playlist:${playlistId}`,
        offset: {
          position: index,
        },
        position_ms: 0,
      });
    }
    setIsPlaying();
    setCurrentSong({
      id: songId,
      duration_ms: 50000,
    });
  };

  return (
    <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/20">
      <tbody>
        {playlist.tracks.items.length > 0 ? (
          playlist.tracks.items.map((track, index) => (
            <tr
              key={`track-${index}`}
              className="group border-b border-zinc-800 h-12 font-semibold"
            >
              <td className="w-[550px]">
                <div
                  className="flex ml-2 gap-x-6 items-center cursor-pointer"
                  onClick={() =>
                    handlerPlayMusic(playlist.id, track.track.id, index)
                  }
                >
                  <div className="relative w-8 h-8">
                    <img
                      src={track.track.album.images[2]?.url}
                      alt={track.track.name}
                      className="w-full h-full"
                    />
                    <div className="group-hover:bg-black/80 absolute top-0 left-0 w-full h-full"></div>
                    <div className="absolute top-2 left-2 invisible group-hover:visible ">
                      <Play />
                    </div>
                  </div>
                  <h3>{track.track.name}</h3>
                </div>
              </td>
              <td>
                <Link
                  to={`/channel/${track.track.artists[0].id}`}
                  className="hover:underline text-zinc-500"
                >
                  {track.track.artists[0].name}
                </Link>
              </td>
              <td className=" text-zinc-500 relative">
                <div className=" flex items-center justify-end">
                  <div className="flex items-center justify-center">
                    <div className="invisible group-hover:visible absolute w-5 h-5 border border-white cursor-pointer hover:bg-zinc-800"></div>
                    <span className="group-hover:invisible">
                      {formatTime(track.track.duration_ms)}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-xl text-zinc-500 font-extralight">
              No hay elementos en la lista de reproducción.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export type PropsAlbumSongsTable = {
  album: Album;
};

export const AlbumSongsTable = ({ album }: PropsAlbumSongsTable) => {
  const { setIsPlaying } = useStore((state) => state);
  const { isPlaying } = useStore((state) => state);
  const { setCurrentSong } = useStore((state) => state);
  const { currentSong } = useStore((state) => state);

  const handlerPlayMusic = async (
    albumId: string,
    songId: string,
    index: number
  ) => {
    if (currentSong.id === songId) {
      if (isPlaying) {
        await axios.put(`https://api.spotify.com/v1/me/player/pause`);
      } else {
        await axios.put(`https://api.spotify.com/v1/me/player/play`);
      }
    } else {
      await axios.put(`https://api.spotify.com/v1/me/player/play`, {
        context_uri: `spotify:album:${albumId}`,
        offset: {
          position: index,
        },
        position_ms: 0,
      });
    }
    setIsPlaying();
    setCurrentSong({
      id: songId,
      duration_ms: 50000,
    });
  };

  return (
    <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/20">
      <tbody>
        {album.tracks.items.length > 0 ? (
          album.tracks.items.map((track, index) => (
            <tr
              key={`track-${index}`}
              className="group border-b border-zinc-800 h-12 font-semibold"
            >
              <td className="w-[550px]">
                <div
                  className="flex ml-2 gap-x-6 items-center cursor-pointer"
                  onClick={() => handlerPlayMusic(album.id, track.id, index)}
                >
                  <div className="relative">
                    <span className="mx-2 group-hover:invisible">
                      {index + 1}
                    </span>
                    <div className="group-hover:bg-black/80 absolute top-0 left-0 w-full h-full"></div>
                    <div className="absolute top-1 left-1 invisible group-hover:visible ">
                      <Play />
                    </div>
                  </div>
                  <h3>{track.name}</h3>
                </div>
              </td>
              <td>
                <span className="text-zinc-500">
                  {track.explicit && <Explicit />}
                </span>
              </td>
              <td className=" text-zinc-500 relative">
                <div className=" flex items-center justify-end">
                  <div className="flex items-center justify-center">
                    <div className="invisible group-hover:visible absolute w-5 h-5 border border-white cursor-pointer hover:bg-zinc-800"></div>
                    <span className="group-hover:invisible">
                      {formatTime(track.duration_ms)}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-xl text-zinc-500 font-extralight">
              No hay elementos en la lista de reproducción.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
