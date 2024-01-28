"use client";

import { toggleThemeMode } from "@/Redux/Slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";
const DarkmodeToggle = () => {
  // redux
  const dispatch = useAppDispatch();
  const themeState = useAppSelector((state) => state.themeSlice.isDarkMode);
  return (
    <span>
      {themeState ? (
        <button onClick={() => dispatch(toggleThemeMode())}>
          <BsBrightnessHigh className="text-2xl text-violet-500 " />{" "}
        </button>
      ) : (
        <button onClick={() => dispatch(toggleThemeMode())}>
          <BsMoonStars className="text-2xl text-violet-500 " />
        </button>
      )}
    </span>
  );
};

export default DarkmodeToggle;
