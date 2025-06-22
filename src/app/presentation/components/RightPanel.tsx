import React from "react";

interface RightPanelProps {
  title?: string;
  content?: string;
}

export const RightPanel: React.FC<RightPanelProps> = ({ title, content }) => {
  return (
    <div className=" h-full w-[70%]">
      <div className="h-[7%] pl-[2%] mt-[5%] mb-[1%] border-2 border-solid border-white bg-green-700 text-white">
        {title ?? "Default"}
      </div>
      <div className="h-[7%] pl-[2%] mb-[1%] border-2 border-solid border-white bg-green-700 text-white"></div>

      <div className="h-[4%] bg-green-400"></div>
      <div className="h-[75%] pl-[2%] border-2 border-solid border-green-400 bg-gray-900 text-white">
        {content ?? "Default"}
      </div>
    </div>
  );
};
