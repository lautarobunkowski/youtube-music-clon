import { create } from "zustand";

type Store = {
  userLog: boolean;
  setUserLog: () => void;
  userData: UserData | undefined;
  isPlaying: boolean;
  setIsPlaying: () => void;
  currentSong: CurrentSong
  setCurrentSong: (value:CurrentSong) => void;
};

export type CurrentSong = {
  id: string,
  duration_ms?: number
}

export type UserData = {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: string[];
  type: string;
  uri: string;
  followers: Followers;
};

export type ExternalUrls = {
  spotify: string;
};

export type Followers = {
  href: null;
  total: number;
};

// const userData = localStorage.getItem("user_data")
const prueba = {
  display_name: "lautarobunkowski",
};

const json = JSON.stringify(prueba);

const useStore = create<Store>((set) => ({
  userLog: false,
  setUserLog: () => set((state) => ({ userLog: !state.userLog })),
  userData: JSON.parse(json),
  isPlaying: false,
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  currentSong: {
    id: "",
    duration_ms: 0
  },
  setCurrentSong: (value) => set((state) => ({currentSong: {...value}}))
}));

export default useStore;
