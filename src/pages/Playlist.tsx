import { useEffect, useState } from "React";
import axios from "@/axiosConfig.ts";
import { useLocation } from "react-router-dom";
import type { Playlist, Item } from "@types/Playlist";
import { Button } from "@components/ButtonLog";
import Random from "@icons/Random.jsx";
import Edit from "@icons/Edit.jsx";

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

  const formatTime = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor(time / 1000 / 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="mt-14">
      {playlist !== undefined && (
        <div>
          <div className="flex gap-x-10 items-center justify-start mb-12">
            <div>
              <picture>
                <img
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  className="w-40 h-40 aspect-square sm:w-[200px] sm:h-[200px] min-[936px]:w-[240px] min-[936px]:h-[240px] min-[1364px]:w-[264px] min-[1364px]:h-[264px]"
                />
              </picture>
            </div>
            <div>
              <h3 className="font-bold text-5xl mb-4">{playlist.name}</h3>
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
                <Button className="bg-[#D9D9D9] hover:bg-zinc-400 rounded-3xl h-[38px] text-black">
                  <Random />
                  <p className="ml-1">Aleatorio</p>
                </Button>
                <Button className="rounded-3xl border hover:bg-slate-800 border-zinc-800 ml-2">
                  <Edit />
                  <p className="ml-1">Editar lista</p>
                </Button>
              </div>
            </div>
          </div>
          <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/20">
            <tbody>
              {playlist.tracks.items.map((track, index) => {
                return (
                  <tr
                    key={`track-${index}`}
                    className="border-b border-zinc-800 h-12 font-semibold"
                  >
                    <td>
                      <div className="flex ml-2 gap-x-6 items-center">
                        <img
                          src={track.track.album.images[2]?.url}
                          alt={track.track.name}
                          className="w-8 h-8"
                        />
                        <h3>{track.track.name}</h3>
                      </div>
                    </td>
                    <td>{track.track.artists[0].name}</td>
                    <td>{formatTime(track.track.duration_ms)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Playlist;
