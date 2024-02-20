// import React from "React";
import { NavLink } from "react-router-dom";

const Start = () => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
    </g>
  </svg>
);

const Explore = () => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path>
    </g>
  </svg>
);

const Library = () => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M16,6v2h-2v5c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.37,0,0.7,0.11,1,0.28V6H16z M18,20H4V6H3v15h15V20z M21,3H6v15h15V3z M7,4h13v13H7V4z"></path>
    </g>
  </svg>
);

const Update = () => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"></path>
    </g>
  </svg>
);

const NewPlaylist = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M20,12h-8v8h-1v-8H3v-1h8V3h1v8h8V12z"></path></g></svg>
)

type Props = {
  asideActive: boolean;
};

const Aside = ({ asideActive }: Props) => {
  return (
    <aside className=" border-r border-zinc-800 flex flex-col justify-start items-center text-[10px] ">
      <ul className="w-full p-2 overflow-x-auto">
        <li>
          <NavLink to="/"
          >
            <button
            className={`hover:bg-zinc-800 py-3 flex flex-wrap items-center ${
              asideActive ? "justify-start gap-4 px-5" : "justify-center"
            } rounded-lg w-full text-ellipsis whitespace-nowrap`}
          >
            <Start />
            <p
              className={`${
                asideActive
                  ? "w-auto m-0 text-base font-semibold"
                  : "w-full mt-1"
              }`}
            >
              Inicio
            </p>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
          <button
            className={`hover:bg-zinc-800 py-3 flex flex-wrap items-center ${
              asideActive ? "justify-start gap-4 px-5" : "justify-center"
            } rounded-lg w-full text-ellipsis whitespace-nowrap`}
          >
            <Explore />
            <p
              className={`${
                asideActive
                  ? "w-auto m-0 text-base font-semibold"
                  : "w-full mt-1"
              }`}
            >
              Explorar
            </p>
          </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/library">
          <button
            className={`hover:bg-zinc-800 py-3 flex flex-wrap items-center ${
              asideActive ? "justify-start gap-4 px-5" : "justify-center"
            } rounded-lg w-full text-ellipsis whitespace-nowrap`}
          >
            <Library />
            <p
              className={`${
                asideActive
                  ? "w-auto m-0 text-base font-semibold"
                  : "w-full mt-1"
              }`}
            >
              Mi biblioteca
            </p>
          </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/music_premium">
          <button
            className={`hover:bg-zinc-800 py-3 flex flex-wrap items-center ${
              asideActive ? "justify-start gap-4 px-5" : "justify-center"
            } rounded-lg w-full text-ellipsis whitespace-nowrap`}
          >
            <Update />
            <p
              className={`${
                asideActive
                  ? "w-auto m-0 text-base font-semibold"
                  : "w-full mt-1"
              }`}
            >
              Actualizar
            </p>
          </button>
          </NavLink>
        </li>
      </ul>
      {
        asideActive &&
        <>
          <div className="border-t border-zinc-700 mx-0 my-6 w-[192px]"></div>
          <button
            className={`hover:bg-zinc-800 bg-zinc-800 py-2 w-[192px] flex items-center justify-center gap-2 px-5 rounded-3xl text-ellipsis whitespace-nowrap`}
          >
            <NewPlaylist />
            <p className=" text-sm font-semibold">
              Nueva lista
            </p>
          </button>
        </>
      }
      <style>
        {`.active button{
            background-color: #1D1D1D;
          }
        `}
      </style>
    </aside>
  );
};

export default Aside;
