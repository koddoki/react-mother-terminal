import React from "react";
import Folder from "./Folder";

interface LeftPanelProps {
  selectedFolderIndex: number;
  firstVisibleFolderIndex: number;
  folders: string[];
  maxAmmountVisibleFolders?: number;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({
  selectedFolderIndex: currentIndex,
  firstVisibleFolderIndex,
  folders,
  maxAmmountVisibleFolders = 4,
}) => {
  const showArrowUp = firstVisibleFolderIndex > 0;
  const showArrowDown =
    firstVisibleFolderIndex + maxAmmountVisibleFolders < folders.length;
  const visibleFolders = folders.slice(
    firstVisibleFolderIndex,
    firstVisibleFolderIndex + maxAmmountVisibleFolders
  );

  return (
    <div className="w-[30%] h-full">
      <div className="relative h-[18%]">
        <div className="absolute bottom-0 left-0 text-green-400 pl-[15%]">
          FOLDERS
        </div>
      </div>
      <div className="h-[75%]">
        <div className="text-white text-center h-[10%]">
          {showArrowUp ? "^" : "-"}
        </div>
        {visibleFolders.map((name, index) => {
          const realIndex = firstVisibleFolderIndex + index;
          return (
            <Folder
              key={name}
              folderName={name}
              isSelected={realIndex === currentIndex}
            />
          );
        })}
        <div className="text-white text-center h-[10%]">
          {showArrowDown ? "v" : "-"}
        </div>
      </div>
    </div>
  );
};
