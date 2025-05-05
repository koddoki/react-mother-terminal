import React from "react";

interface FolderProps {
  folderName?: string;
  isSelected?: boolean;
}

const Folder: React.FC<FolderProps> = ({ folderName, isSelected }) => {
  const folderClassNames = isSelected
    ? "h-[20%] bg-white flex items-center justify-center shrink-0"
    : "h-[20%] text-white flex items-center justify-center shrink-0";
  const innerDivClassNames = isSelected
    ? "h-[98%] w-[90%] p-2 bg-gray-900 text-white"
    : "h-[98%] w-[90%] p-2 bg-gray-900 border-solid border-green-400 border-2 text-white";
  return (
    <div className={folderClassNames}>
      <div className={innerDivClassNames}>{folderName ?? "DEFAULT VALUE"}</div>
    </div>
  );
};

export default Folder;
