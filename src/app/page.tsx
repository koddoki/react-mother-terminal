"use client";

import React, { useEffect, useState } from "react";
import { LeftPanel } from "./components/LeftPanel";
import { RightPanel } from "./components/RightPanel";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const folders = ["PERSONAL", "SHARED", "AUDIO", "UTILITY"];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else if (event.key === "ArrowDown") {
        setCurrentIndex((prev) => Math.min(prev + 1, folders.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [folders.length]);

  return (
    <div className="h-screen bg-gray-900 container">
      <div className="w-[94%] h-[5%] mb-[5%] bg-green-400 text-gray-950">
        <span>PERSONAL TERMINAL</span>
      </div>
      <div className="w-[94%] h-[80%] flex gap-4">
        <LeftPanel currentIndex={currentIndex} folders={folders} />
        <RightPanel />
      </div>
      <div className="h-[10%]"></div>
    </div>
  );
}
