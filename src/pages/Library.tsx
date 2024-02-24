import axios from "@/axiosConfig.ts";
import { useEffect, useState } from "React";
import PlaylistCard from "@components/PlaylistCard.tsx";
import type { Data, Item } from "@types/miselfPlaylist.ts";

const Library = () => {
  const [playlists, setPlaylists] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://api.spotify.com/v1/me/playlists");
      const data: Data = await response.data;
      setPlaylists(data.items);
    };
    fetchData();
  }, []);

  return (
    <div
      className="
    grid 
    grid-cols-2
    min-[440px]:grid-cols-3
    min-[615px]:grid-cols-4
    min-[760px]:grid-cols-5
    min-[1150px]:grid-cols-6
    min-[1364px]:grid-cols-7
    min-[1578px]:grid-cols-8
    overflow-hidden gap-4 w-full pt-8"
    >
      {playlists.map((playlist, index) => {
        return (
          <PlaylistCard playlist={playlist} key={`PlaylistCard-item${index}`} />
        );
      })}
    </div>
  );
};

export default Library;
