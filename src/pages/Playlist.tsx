import { useEffect, useState } from "React";
import axios from "@/axiosConfig.ts";
import { useLocation } from "react-router-dom";
import type { Playlist, Item } from "@types/Playlist";
import { Button as ButtonLib } from "@components/ButtonLog";
import Button from "@components/Button";
import Random from "@icons/Random.jsx";
import Edit from "@icons/Edit.jsx";
import SongsTable from "@components/SongsTable";

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

const Playlist = () => {
  const [playlist, setPlaylist] = useState<Playlist>();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const playlistId = params.get("list");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://api.spotify.com/v1/playlists/${playlistId}`
      );
      const data = await response.data;
      setPlaylist(data);
      console.log(data);
    };
    fetchData();
  }, [playlistId]);

  const minutesPerPlaylist = (tracks: Item[]) => {
    const time =
      tracks.reduce((acc, track) => acc + track.track.duration_ms, 0) /
      (1000 * 60);
    if (time < 10) {
      return (
        <>
          {Math.round(time)} minutos y {Math.round((time % 0.6) * 100)} segundos
        </>
      );
    } else {
      return <>{Math.round(time)} minutos</>;
    }
  };

  return (
    <div className="mt-14">
      {playlist !== undefined && (
        <div>
          <div className="flex gap-x-10 items-center justify-start mb-12">
            <div>
              <picture>
                {playlist.images ? (
                  <img
                    src={playlist.images[0].url}
                    alt=""
                    className="w-40 h-40 aspect-square sm:w-[200px] sm:h-[200px] min-[936px]:w-[240px] min-[936px]:h-[240px] min-[1364px]:w-[264px] min-[1364px]:h-[264px]"
                  />
                ) : (
                  <div className="text-zinc-600 flex items-center justify-center w-40 h-40 aspect-square sm:w-[200px] sm:h-[200px] min-[936px]:w-[240px] min-[936px]:h-[240px] min-[1364px]:w-[264px] min-[1364px]:h-[264px] bg-zinc-800">
                    <NoneImgSvg />
                  </div>
                )}
              </picture>
            </div>
            <div className="">
              <div className="max-h-[5rem] overflow-hidden max-w-[720px]">
                <h3 className="font-bold text-4xl mb-4">{playlist.name}</h3>
              </div>
              <div className="text-zinc-400">
                <span>{playlist.public ? "private" : "public"}</span>
                <span> • </span>
                {playlist.owner.display_name}
              </div>
              <div className="mt-1 text-zinc-400">
                <span>{playlist.tracks.total} pistas</span>
                <span> • </span>
                {minutesPerPlaylist(playlist.tracks.items)}
              </div>
              <div className="mt-6">
                <Button>
                  <Random />
                  <p className="ml-1">Aleatorio</p>
                </Button>
                <ButtonLib className="rounded-3xl border hover:bg-slate-800 border-zinc-800 ml-2">
                  <Edit />
                  <p className="ml-1">Editar lista</p>
                </ButtonLib>
              </div>
            </div>
          </div>
          <SongsTable playlist={playlist} />
          {/* <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/20">
            <tbody>
              {playlist.tracks.items.length > 0 ? (
                playlist.tracks.items.map((track, index) => (
                  <tr
                    key={`track-${index}`}
                    className="border-b border-zinc-800 h-12 font-semibold"
                  >
                    <td className="w-[550px]">
                      <div
                        className="flex ml-2 gap-x-6 items-center cursor-pointer"
                        onClick={() => handlerPlayMusic(index)}
                      >
                        <img
                          src={track.track.album.images[2]?.url}
                          alt={track.track.name}
                          className="w-8 h-8"
                        />
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
                    <td className="text-end text-zinc-500">
                      {formatTime(track.track.duration_ms)}
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
          </table> */}
        </div>
      )}
    </div>
  );
};

export default Playlist;
