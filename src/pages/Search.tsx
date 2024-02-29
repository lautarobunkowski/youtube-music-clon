import { useState, useEffect } from "React";
import { useLocation } from "react-router-dom";
import axios from "axios";
import type { SearchData } from "@types/search";
import Explicit from "@icons/Explicit";

const Search = () => {
  const [searchInfo, setSearchInfo] = useState<SearchData>();
  const location = useLocation().search;

  const urlParams = new URLSearchParams(location);
  const qParam = urlParams.get("q");
  console.log(qParam?.split(" ").join("%20"));

  useEffect(() => {
    const type = [
      "artist",
      "track",
      "album",
      "playlist",
      "episode",
      "audiobook",
    ];
    const fetchData = async () => {
      const { data } = await axios(
        `https://api.spotify.com/v1/search?q=${qParam
          ?.split(" ")
          .join("%20")}&type=${type.join()}&limit=3`
      );
      setSearchInfo(data);
      console.log(data);
    };

    fetchData();
    // return () => {
    //   setSearchInfo({})
    // }
  }, [qParam]);

  return (
    <div className="pt-4 my-0 mx-auto max-w-[860px]">
      <div className="">
        <h4 className="font-bold text-2xl">Álbumes</h4>
        <div className="">
          <ul>
            {searchInfo?.albums.items.map((album, index) => {
              return (
                <li
                  key={`searched-album-${index}`}
                  className={`${
                    searchInfo?.albums.items.length - 1 === index
                      ? "border-b-none"
                      : "border-b border-zinc-700"
                  } flex items-center py-4 px-2 gap-4`}
                >
                  <picture className="w-14 h-14 aspect-square overflow-hidden">
                    <img
                      src={album.images[2].url}
                      alt={album.name}
                      className="w-14 h-14"
                    />
                  </picture>
                  <div className="">
                    <p className="font-medium text-sm mb-1">{album.name}</p>
                    <div className="font-medium text-sm text-zinc-400">
                      <span className="inline-block">
                        {album.explicit && <Explicit />}
                      </span>
                      <span>{album.type}</span>
                      <span> • </span>
                      <span>{album.artists[0].name}</span>
                      <span> • </span>
                      <span>{album.release_date.slice(0, 4)}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
