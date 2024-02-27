import { useEffect, useState } from "React";
import axios from "@/axiosConfig.ts";
import { useLocation, Link } from "react-router-dom";
import type { Album, Item } from "@types/album";
import { Button as ButtonLib } from "@components/ButtonLog";
import Button from "@components/Button";
import Random from "@icons/Random.jsx";
import Edit from "@icons/Edit.jsx";
import { AlbumSongsTable } from "@components/SongsTable";
import Explicit from "@icons/Explicit";

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

const Album = () => {
  const [album, setAlbum] = useState<Album>();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const playlistId = params.get("list");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://api.spotify.com/v1/albums/${playlistId}`
      );
      const data = await response.data;
      setAlbum(data);
      console.log(data);
    };
    fetchData();
  }, [playlistId]);

  const minutesPerPlaylist = (tracks: Item[]) => {
    const time =
      tracks.reduce((acc, track) => acc + track.duration_ms, 0) / (1000 * 60);
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
      {album !== undefined && (
        <div>
          <div className="flex gap-x-10 items-center justify-start mb-12">
            <div>
              <picture>
                {album.images ? (
                  <img
                    src={album.images[0].url}
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
                <h3 className="font-bold text-4xl mb-4">{album.name}</h3>
              </div>
              <div className="text-zinc-400 flex items-center gap-1">
                <span className="inline-block">
                  {album?.tracks.items.some((item) => item.explicit) && (
                    <Explicit />
                  )}
                </span>
                <span>{album.total_tracks > 1 ? "Álbum" : "Single"}</span>
                <span> • </span>
                <Link
                  to={`/channel/${album.artists[0].id}`}
                  className="hover:underline"
                >
                  {album.artists[0].name}
                </Link>
                <span> • </span>
                {album.release_date.split("").slice(0, 4)}
              </div>
              <div className="mt-1 text-zinc-400">
                <span>{album.tracks.total} canciones</span>
                <span> • </span>
                {minutesPerPlaylist(album.tracks.items)}
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
          <AlbumSongsTable album={album} />
        </div>
      )}
    </div>
  );
};

export default Album;
