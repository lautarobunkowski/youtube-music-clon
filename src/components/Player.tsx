import useStore from "@store/store";
import { Slider } from "@components/Slider";

const Player = () => {
  const { isPlaying } = useStore((state) => state);

  return (
    <div
      className={`fixed bottom-0 left-0 w-[calc(100vw-17px)] bg-[#292929] z-50 ${
        isPlaying
          ? "visible [transform:translate3d(0,0,0)]"
          : "invisible [transform:translate3d(0,72px,0)]"
      } transition duration-500 h-[72px]`}
    >
      <div className="group absolute -top-4 hover:-top-[17px] w-full h-4 py-4 cursor-pointer">
        <Slider className="w-full bg-zinc-500 flex" />
      </div>
      {/* <div className="w-[400px] h-[225px] absolute right-10 bottom-24 bg-zinc-700/50"></div> */}
    </div>
  );
};

export default Player;
