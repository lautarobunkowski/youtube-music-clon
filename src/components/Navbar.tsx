import React from "React";
import { Link } from "react-router-dom";

import { Input } from "@/components/SearchBar.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/Dropdown";

const Menu = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    // className="w-full h-full"
    width="24"
    height="24"
  >
    <g>
      <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
    </g>
  </svg>
);

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" fill="none">
    <ellipse cx="12.18" cy="12" rx="12.18" ry="12" fill="red" />
    <ellipse
      cx="12.18"
      cy="12"
      rx="7.308"
      ry="7.2"
      fill="red"
      stroke="#fff"
      stroke-width="1.2"
    />
    <path
      d="M9.744 15.545l6.327-3.544-6.327-3.546v7.09zM37.433 9.642c-.579 2.853-1.019 6.336-1.25 7.774h-.163c-.187-1.482-.627-4.942-1.227-7.75L33.31 2.677h-4.52v18.85h2.803V5.987l.277 1.451 2.85 14.086h2.804l2.803-14.086.3-1.459v15.547h2.804V2.676h-4.563l-1.435 6.966zM51.01 18.696c-.256.517-.81.876-1.368.876-.648 0-.904-.494-.904-1.706V7.754H45.54v10.29c0 2.54.856 3.706 2.758 3.706 1.296 0 2.338-.562 3.058-1.909h.07l.277 1.684h2.502V7.755h-3.198v10.94h.003zM60.392 13.19c-1.043-.742-1.691-1.236-1.691-2.314 0-.763.37-1.19 1.25-1.19.905 0 1.206.605 1.227 2.674l2.689-.111c.208-3.346-.928-4.74-3.87-4.74-2.733 0-4.078 1.19-4.078 3.638 0 2.224 1.113 3.235 2.92 4.562 1.553 1.169 2.457 1.82 2.457 2.764 0 .72-.464 1.213-1.275 1.213-.95 0-1.507-.877-1.365-2.405l-2.71.044c-.419 2.852.766 4.515 3.915 4.515 2.758 0 4.195-1.236 4.195-3.706-.003-2.247-1.16-3.147-3.664-4.944zM68.872 7.754h-3.059v13.77h3.06V7.755zM67.365 2.316c-1.18 0-1.738.427-1.738 1.911 0 1.528.554 1.909 1.739 1.909 1.205 0 1.738-.383 1.738-1.909 0-1.414-.533-1.911-1.739-1.911zM79.158 16.56l-2.803-.135c0 2.426-.277 3.212-1.226 3.212-.95 0-1.113-.877-1.113-3.73v-2.67c0-2.765.187-3.639 1.137-3.639.88 0 1.112.83 1.112 3.393l2.778-.178c.187-2.134-.093-3.595-.949-4.425-.627-.608-1.576-.897-2.896-.897-3.104 0-4.379 1.618-4.379 6.154v1.932c0 4.673 1.088 6.178 4.264 6.178 1.344 0 2.27-.27 2.896-.854.902-.814 1.249-2.205 1.18-4.341z"
      fill="#fff"
    />
  </svg>
);

const Choromecast = () => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M22,20h-8v-1h7V5H3v3H2V4h20V20z M2,17.32V20h2.73C4.73,18.52,3.51,17.32,2,17.32z M2,13.75v1.79c2.51,0,4.55,2,4.55,4.46 h1.82C8.36,16.55,5.52,13.75,2,13.75z M2,10.18v1.79c4.52,0,8.18,3.6,8.18,8.03H12C12,14.57,7.52,10.18,2,10.18z"></path>
    </g>
  </svg>
);

type Props = {
  setAsideActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setAsideActive }: Props) => {
  return (
    <nav className="row-span-1 col-span-2 flex items-center border-b border-zinc-800">
      <div className="flex gap-2 items-center w-full justify-between">
        <div className=" flex gap-4 items-center pl-4">
          <button
            onClick={() => setAsideActive((value) => !value)}
            className="rounded-full p-2 hover:bg-zinc-800 active:bg-zinc-600"
          >
            <Menu />
          </button>
          <Logo />
        </div>
        <div className="hidden flex-1 lg:flex lg:ml-4 xl:ml-24 items-center justify-center xl:justify-start">
          <Input
            type="search"
            placeholder="Busca canciones, álbumes, artistas y pódcasts"
            className="w-[480px] font-semibold h-[40px]"
          />
        </div>
        <div className=" text-white gap-4 pr-[20px] md:pr-[50px] lg:pr-[56px] xl:pr-[100px] flex items-center">
          <Choromecast />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                src="https://avatars.githubusercontent.com/u/98718461?v=4"
                alt="user"
                className="w-7 object-cover aspect-square rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-zinc-800 border-none"
            >
              <DropdownMenuLabel className="w-[300px]">
                <div className="flex flex-col items-center w-full gap-2">
                  <div className="flex items-center gap-4 w-full">
                    <img src="https://avatars.githubusercontent.com/u/98718461?v=4" alt="user" className="w-10 h-10 object-cover aspect-square rounded-full"/>
                    <div className="flex flex-col">
                      <p className="text-base">Lautaro</p>
                      <p>lautibunko@gmail.com</p>
                    </div>
                  </div>  
                  <Link to="/#">
                    <p className=" font-normal text-blue-500">
                      Gestionar tu cuenta de Google
                    </p>
                  </Link>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="border-t border-zinc-700"/>
              <DropdownMenuItem>Tu canal</DropdownMenuItem>
              <DropdownMenuItem>Suscribirse a Music Premium</DropdownMenuItem>
              <DropdownMenuItem>Cambiar de cuenta</DropdownMenuItem>
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              <DropdownMenuSeparator className="border-t border-zinc-700"/>
              <DropdownMenuItem>Subir música</DropdownMenuItem>
              <DropdownMenuItem>Historial</DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuItem>
                Términos y Política de Privacidad
              </DropdownMenuItem>
              <DropdownMenuItem>Ayuda</DropdownMenuItem>
              <DropdownMenuItem>Enviar sugerencias</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
