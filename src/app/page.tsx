"use client";

import React, { useEffect, useState } from "react";
import { LeftPanel } from "./presentation/components/LeftPanel";
import { RightPanel } from "./presentation/components/RightPanel";
import { FolderContent, RootData } from "./domain/RootData";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentFolderContent, setCurrentFolderContent] =
    useState<FolderContent | null>(null);
  const [folders, setFolders] = useState<string[]>(["DEFAULT", "VALUES"]);
  const [data, setData] = useState<RootData | null>(null);

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

  useEffect(() => {
    fetch("/folders.json")
      .then((res) => {
        if (!res.ok) throw new Error("Your JSON is very cagado");
        return res.json();
      })
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (data?.folders) {
      setFolders(data.folders.map((folder) => folder.name));
    }
  }, [data]);

  useEffect(() => {
    if (data?.folders) {
      setCurrentFolderContent(data.folders[currentIndex].content);
    }
  }, [data, currentIndex]);

  return (
    <div className="h-screen bg-gray-900 container">
      <div className="w-[94%] h-[5%] mb-[5%] bg-green-400 text-gray-950">
        <span>PERSONAL TERMINAL</span>
      </div>
      <div className="w-[94%] h-[80%] flex gap-4">
        <LeftPanel currentIndex={currentIndex} folders={folders} />
        <RightPanel
          title={currentFolderContent?.title}
          content={currentFolderContent?.text}
        />
      </div>
      <div className="h-[10%]"></div>
    </div>
  );
}
