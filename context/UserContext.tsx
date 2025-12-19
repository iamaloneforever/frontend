"use client";
import { create } from "zustand";

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id:1,
    name:"amir",
    email: "amir",
    avatar: "./"
  },
  isAuthenticated: false,

  login: (userData) => {
    set({
      user: userData,
      isAuthenticated: true,
    });
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },

  updateUser: (userData) => {
    set((state) => {
      if (!state.user) return state;
      return {
        user: {
          ...state.user,
          ...userData,
        },
      };
    });
  },
}));

