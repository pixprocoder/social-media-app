import { themeKey } from "@/constants/storageKey";
import {
  getFromLocalStorage,
  setThemeStatusLocalStorage,
} from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

export interface IisDarkMode {
  isDarkMode: boolean;
}

const themeStatus = getFromLocalStorage(themeKey) || "false";
const initialState: IisDarkMode = {
  isDarkMode: JSON.parse(themeStatus),
};

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
