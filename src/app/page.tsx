"use client";

import React, { useEffect, useState } from "react";
import { LeftPanel } from "./presentation/components/LeftPanel";
import { RightPanel } from "./presentation/components/RightPanel";
import { FolderContent, RootData } from "./domain/RootData";

export default function Home() {
  const [selectedFolderIndex, setSelectedFolderIndex] = useState<number>(0);
  const [firstVisibleFolderIndex, setFirstVisibleFolderIndex] =
    useState<number>(0);
  const [selectedFolderContent, setSelectedFolderContent] =
    useState<FolderContent | null>(null);
  const [folders, setFolders] = useState<string[]>(["DEFAULT", "VALUES"]);
  const [data, setData] = useState<RootData | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const maxVisible = 4;
      setSelectedFolderIndex((prev) => {
        let newIndex = prev;

        if (event.key === "ArrowUp") {
          newIndex = Math.max(prev - 1, 0);
        } else if (event.key === "ArrowDown") {
          newIndex = Math.min(prev + 1, folders.length - 1);
        }

        setFirstVisibleFolderIndex((currentStart) => {
          if (newIndex < currentStart) {
            return newIndex;
          } else if (newIndex >= currentStart + maxVisible) {
            return newIndex - maxVisible + 1;
          }
          return currentStart;
        });

        return newIndex;
      });
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
      setSelectedFolderContent(data.folders[selectedFolderIndex].content);
    }
  }, [data, selectedFolderIndex]);

  return (
    <div className="h-screen bg-gray-900">
      <div className="w-[94%] h-[5%] ml-[3%] pl-[1%] bg-green-400 text-gray-950">
        PERSONAL TERMINAL
      </div>
      <div className="w-[94%] h-[85%] flex gap-4">
        <LeftPanel
          selectedFolderIndex={selectedFolderIndex}
          firstVisibleFolderIndex={firstVisibleFolderIndex}
          folders={folders}
          maxAmmountVisibleFolders={4}
        />
        <RightPanel
          title={selectedFolderContent?.title}
          content={selectedFolderContent?.text}
        />
      </div>
      <div className="h-[10%] pl-[2%] text-green-400 ">
        UP, DOWN: select folder
      </div>
    </div>
  );
}
