import { create } from "zustand";

type Store = {
  userLog: boolean;
  userData: UserData | undefined;
  setUserLog: () => void;
};

export type UserData = {
  display_name:  string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  images:        string[];
  type:          string;
  uri:           string;
  followers:     Followers;
}

export type ExternalUrls = {
  spotify: string;
}

export type Followers = {
  href:  null;
  total: number;
}

// const userData = localStorage.getItem("user_data")
const prueba = {
  display_name: "lautarobunkowski",
}

const json = JSON.stringify(prueba)

const useStore = create<Store>((set) => ({
  userLog: false,
  userData: JSON.parse(json),
  setUserLog: () => set((state) => ({ userLog: !state.userLog })),
}));

export default useStore;
