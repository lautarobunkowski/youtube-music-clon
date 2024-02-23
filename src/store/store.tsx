import { create } from "zustand";

type Store = {
  userLog: boolean;
  setUserLog: () => void;
};

const useStore = create<Store>((set) => ({
  userLog: false,
  setUserLog: () => set((state) => ({ userLog: !state.userLog })),
}));

export default useStore;
