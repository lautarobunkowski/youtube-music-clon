import useStore from "@store/store";
import { useEffect, useState } from "React";
import { Slider } from "@components/Slider";
import { Track } from "@types/Track";
import axios from "axios";
import { Link } from "react-router-dom";

import Play from "@icons/Play.jsx";
import Next from "@icons/Next.jsx";
import Previous from "@icons/Previous.jsx";
import Top from "@icons/Top.jsx";
import Left from "@icons/Left.jsx";
import Random from "@icons/Random.jsx";
import Repeat from "@icons/Repeat.jsx";
import Volume from "@icons/Volume.jsx";

const Player = () => {
  const [showSoundSlider, setShowSoundSlider] = useState(false);
  const [track, setTrack] = useState<Track>();
  const { isPlaying } = useStore((state) => state);
  const { currentSong } = useStore((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        `https://api.spotify.com/v1/tracks/${currentSong.id}`
      );
      console.log(data);
      setTrack(data);
    };
    if (isPlaying && currentSong.id.length > 0) {
      fetchData();
    }
  }, [currentSong, isPlaying]);

  return (
    <div
      onMouseLeave={() => setShowSoundSlider(false)}
      className={`fixed bottom-0 left-0 w-[calc(100vw-17px)] bg-[#212121] z-50 ${
        isPlaying
          ? "visible [transform:translate3d(0,0,0)]"
          : "invisible [transform:translate3d(0,72px,0)]"
      } transition-all duration-500 h-[72px] flex items-center`}
    >
      <div className="group absolute -top-4 hover:-top-[17px] w-full h-4 py-4 cursor-pointer">
        <Slider className="w-full bg-zinc-500 flex" />
      </div>
      <div className="w-full mx-4 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Previous />
          <Play width="32" height="32" />
          <Next />
          <span className="text-zinc-500 text-xs">2:43 / 3:00</span>
        </div>
        {track && (
          <div className="flex items-center gap-4">
            <picture className="w-10 h-10 aspect-square">
              <img
                src={track.album.images[2].url}
                alt={track.name}
                className="w-full h-full"
              />
            </picture>
            <div className="flex flex-col justify-between font-semibold">
              <h3 className="leading-4">{track.name}</h3>
              <div className="flex gap-1 text-zinc-400 leading-4 mt-1">
                <Link
                  to={`/channel/${track.artists[0].id}`}
                  className="hover:underline"
                >
                  <span>{track.artists[0].name}</span>
                </Link>
                <span>•</span>
                <Link
                  to={`/album?list=${track.album.id}`}
                  className="hover:underline"
                >
                  <span>{track.album.name}</span>
                </Link>
                <span>•</span>
                <span>{track.album.release_date.slice(0, 4)}</span>
              </div>
            </div>
          </div>
        )}
        <div className="flex gap-6 items-center text-zinc-500">
          <div className="flex items-center">
            <div
              className={`w-20 transition-all duration-200 ${
                showSoundSlider
                  ? "opacity-100 visible cursor-pointer"
                  : "opacity-0 invisible"
              }`}
            >
              <Slider className="bg-zinc-500 flex " />
            </div>
            <div
              onMouseEnter={() => setShowSoundSlider(true)}
              className="pl-4 cursor-pointer"
            >
              <Volume />
            </div>
          </div>
          <div className="cursor-pointer">
            <Repeat />
          </div>
          <div className="cursor-pointer">
            <Random />
          </div>
          <div className="cursor-pointer">
            <Top />
          </div>
        </div>
      </div>
      {/* <div className="w-[400px] h-[225px] absolute right-10 bottom-24 bg-zinc-700/50"></div> */}
    </div>
  );
};

export default Player;
