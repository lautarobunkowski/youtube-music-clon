import axios from "axios";
import { useEffect, useState } from "React";
import PlaylistCard from "@components/PlaylistCard.tsx";
import type { Data, Item } from "@types/miselfPlaylist.ts";

const Library = () => {
  const [playlists, setPlaylists] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const token =
        "BQDdDsvr2_5LIY1ZgnID1hB_G2PdDlhZc04JM4CmFNCVTHdHXs2jVQgQM57Y6l3nOP1KuXjgx_4p8QkhDLBp6gJe7D36dx9yDnQNYtBeI7aEY12XNYyZkh3AQ31W6CmhHz13I1LWt1azxyRdq0O6zJVQFvaqFqB1_AWbSghENK2q6mR7TknvZj_F-gpDGc-Ssyrsr8y7XukdxdIN15rf5gKT-scmJdCb6XwzMkP_KUfhAt5uFYXSwgZseqayS0EYLdGngvWkp7cV";
      const response = await axios("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
