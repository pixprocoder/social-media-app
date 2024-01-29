/**
 * Title: 'DarkmodeToggle setup by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 29-01-2024
 *
 */

"use client";
// Import Statements
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";
import { toggleThemeMode } from "@/Redux/Slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useEffect, useState } from "react";
const shouldRenderOnServer = typeof window === "undefined";
const DarkmodeToggle = () => {
  // Local State
  const [localThemeState, setLocalThemeState] = useState(false);
  // Redux
  const dispatch = useAppDispatch();

  const themeState = useAppSelector((state) => state.themeSlice.isDarkMode);

  useEffect(() => {
    if (shouldRenderOnServer) {
      return;
    }
    setLocalThemeState(themeState);
  }, [themeState]);

  // Event Handling
  const handleToggleClick = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <span>
      <button onClick={handleToggleClick}>
        {localThemeState ? (
          <BsBrightnessHigh className="text-2xl text-violet-500" />
        ) : (
          <BsMoonStars className="text-2xl text-violet-500" />
        )}
      </button>
    </span>
  );
};

export default DarkmodeToggle;
