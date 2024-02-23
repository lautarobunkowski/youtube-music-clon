import axios from "axios";
import { useEffect, useState } from "React";
import PlaylistCard from "@components/PlaylistCard.tsx";
import type { Data, Item } from "@types/miselfPlaylist.ts";

const Library = () => {
  const [playlists, setPlaylists] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://api.spotify.com/v1/me/playlists");
      const data: Data = await response.data;
      console.log(data);
      setPlaylists(data.items);
    };
    fetchData();
  }, []);

  return (
    <div>
      {playlists.map((playlist, index) => {
        return (
          <PlaylistCard playlist={playlist} key={`PlaylistCard-item${index}`} />
        );
      })}
    </div>
  );
};

export default Library;
