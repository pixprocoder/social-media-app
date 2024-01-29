import { themeKey } from "@/constants/storageKey";
import {
  getFromLocalStorage,
  setThemeStatusLocalStorage,
} from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";

export interface IisDarkMode {
  isDarkMode: boolean;
}

const initializeThemeStatus = () => {
  const themeStatus = getFromLocalStorage(themeKey) || "false";
  return {
    isDarkMode: JSON.parse(themeStatus),
  };
};

const initialState: IisDarkMode = initializeThemeStatus();

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      setThemeStatusLocalStorage(themeKey, state.isDarkMode);
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
