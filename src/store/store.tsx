import { create } from "zustand";
import axios from "@/axiosConfig";
import { PlayBackState } from "@types/PlayBackState.ts";

type Store = {
  userLog: boolean;
  setUserLog: () => void;
  userData: UserData | undefined;
  isPlaying: boolean;
  setIsPlaying: () => void;
  currentSong: CurrentSong;
  setCurrentSong: (value: CurrentSong) => void;
  isShowPlayer: boolean;
  setIsShowerPlayer: () => void;
  playbackState: null | PlayBackState;
  setPlaybackState: () => void;
};

export type CurrentSong = {
  id: string;
  duration_ms?: number;
};

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
    duration_ms: 0,
  },
  setCurrentSong: (value) => set((state) => ({ currentSong: { ...value } })),
  isShowPlayer: false,
  setIsShowerPlayer: () =>
    set((state) => ({ isShowPlayer: !state.isShowPlayer })),
  playbackState: null,
  setPlaybackState: async () => {
    try {
      const { data } = await axios("https://api.spotify.com/v1/me/player");
      if (data === "") return;

      set((state) => {
        console.log(data);
        return (state.playbackState = data);
      });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStore;
