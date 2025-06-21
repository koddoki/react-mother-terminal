import clsx from "clsx";
import React from "react";

interface FolderProps {
  folderName?: string;
  isSelected?: boolean;
}

const Folder: React.FC<FolderProps> = ({ folderName, isSelected }) => {
  const folderClassNames = clsx("h-[20%] text-white", {
    "bg-white": isSelected,
  });

  const innerDivClassNames = clsx(
    "h-[98%] w-[80%] ml-[10%] pl-[4%] bg-gray-900",
    {
      "border-2 border-solid border-green-400": !isSelected,
    }
  );

  return (
    <div className={folderClassNames}>
      <div className={innerDivClassNames}>{folderName ?? "DEFAULT VALUE"}</div>
    </div>
  );
};

export default Folder;
