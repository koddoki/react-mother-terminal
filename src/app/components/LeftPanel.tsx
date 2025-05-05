import React from "react";
import Folder from "./Folder";

interface LeftPanelProps {
  currentIndex?: number;
  folders: string[];
}

export const LeftPanel: React.FC<LeftPanelProps> = ({
  currentIndex,
  folders,
}) => {
  return (
    <div className="w-[30%] h-full flex flex-col overflow-y-auto">
      <div className="text-green-400 h-[20%] shrink-0">FOLDERS</div>
      {folders.map((name, index) => (
        <Folder
          key={name}
          folderName={name}
          isSelected={index == currentIndex}
        />
      ))}
    </div>
  );
};
