import { create } from "zustand";
import axios from "@/axiosConfig";
import { PlayBackState } from "@types/PlayBackState.ts";

type Store = {
  userLog: boolean;
  setUserLog: () => void;
  userData: UserData | null;
  setUserData: () => void;
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
  email: string;
  followers: Followers;
} | null;

export type ExternalUrls = {
  spotify: string;
};

export type Followers = {
  href: null;
  total: number;
};

let userData: UserData;
localStorage.getItem("user_data") !== null
  ? (userData = JSON.parse(localStorage.getItem("user_data")))
  : (userData = null);

const useStore = create<Store>((set) => ({
  userLog: false,
  setUserLog: () => set((state) => ({ userLog: !state.userLog })),
  userData: userData,
  setUserData: async () => {
    try {
      const { data } = await axios("https://api.spotify.com/v1/me");
      console.log(data);
      set((state) => {
        return (state.userData = data);
      });
    } catch (error) {
      console.log(error);
    }
  },
  isPlaying: false,
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  currentSong: {
    id: "",
    duration_ms: 0,
  },
  setCurrentSong: (value) => set(() => ({ currentSong: { ...value } })),
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
