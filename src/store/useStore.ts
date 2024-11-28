import { create } from "zustand";

interface UserState {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setUser: (user: any) => void;
  clearUser: () => void;
}

export const useStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: true }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
