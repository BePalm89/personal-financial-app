import { useState, useEffect } from "react";

export type ScreenSize = "sm" | "md" | "lg";

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreeSize] = useState<ScreenSize>("lg");

  useEffect(() => {
    function getScreenSize(): ScreenSize {
      if (window.innerWidth < 600) return "sm";
      if (window.innerWidth < 1024) return "md";
      return "lg";
    }

    function handleResize() {
      setScreeSize(getScreenSize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
