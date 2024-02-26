import { useEffect, useState } from "React";
// import useStore  from "@store/store";
import { useParams } from "react-router-dom";
import axios from "@/axiosConfig";
import type { Channel } from "@/types/channel";
import Button from "@/components/Button";
import Random from "@icons/Random";
import { SongsTable } from "@components/SongsTable";

const Channel = () => {
  const [channel, setChannel] = useState<Channel>();
  const [topTracks, setTopTracks] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(`https://api.spotify.com/v1/artists/${id}`);
      setChannel(data);
      // console.log(data);
    };
    fetchData();
    const getArtistTopTracks = async () => {
      const { data } = await axios(
        `https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`
      );
      setTopTracks(data);
      console.log(data);
    };
    getArtistTopTracks();
  }, [id]);

  const suscribersFormat = (suscribers: number) => {
    if (suscribers > 1000) {
      return `${(suscribers / 1000).toFixed(1)} K`;
    }
    return `${suscribers}`;
  };

  return (
    <>
      {channel && (
        <div className="pt-[303px]">
          <div className="pt-[97px]">
            <div className="flex flex-col gap-y-6">
              <h1 className="text-5xl font-bold">{channel.name}</h1>
              <div className="flex items-center gap-2">
                <Button className="w-[137px]">
                  <Random />
                  <p className="ml-1">Aleatorio</p>
                </Button>
                <Button className="w-[137px]">
                  <Random />
                  <p className="ml-1">Radio</p>
                </Button>
                <Button className="w-[137px] bg-transparent text-white border border-zinc-600 hover:bg-transparent">
                  <p className="ml-1">
                    Seguidos
                    <span> {suscribersFormat(channel.followers.total)}</span>
                  </p>
                </Button>
              </div>
            </div>
            <div className="mt-20">
              <h3 className="font-bold text-xl mb-6">Canciones</h3>
              <SongsTable tracks={topTracks} />
            </div>
          </div>
          <div
            className={`absolute top-0 left-0 w-screen h-[50vh] -z-20 flex items-center justify-center`}
          >
            <img
              src={channel.images[0].url}
              alt=""
              className="h-full w-full object-contain object-top"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Channel;
