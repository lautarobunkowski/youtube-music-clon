import { useState } from "React";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lupa = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width="24"
    height="24"
  >
    <g>
      <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
    </g>
  </svg>
);

type Props = {
  scroll: number;
};

const SearchBar = ({ scroll }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  const handlerSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    navigate(`/search?q=${inputValue.replace(/ /g, "+")}`, {
      replace: true,
    });
  };

  return (
    <form
      className="w-[480px] h-[40px] flex items-center relative left-0 "
      onSubmit={handlerSearch}
    >
      <button
        type="submit"
        className="absolute w-14 h-full flex items-center justify-center text-[#858585] bg-transparent"
      >
        <Lupa />
      </button>
      <input
        value={inputValue}
        onChange={(value) => setInputValue(value.currentTarget.value)}
        type="search"
        name="search"
        placeholder="Busca canciones, álbumes, artistas y pódcasts"
        className={`bg-transparent focus:bg-[#212121] w-full h-full font-semibold  focus:outline-none ring-1 ring-[#484848] focus:bg-transparent rounded-lg pl-14 pr-4 ${
          scroll === 0 && "bg-white/10 transition duration-150"
        }`}
      />
    </form>
  );
};

export default SearchBar;
