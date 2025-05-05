import React from "react";

interface RightPanelProps {
  title?: string;
  content?: string;
}

export const RightPanel: React.FC<RightPanelProps> = ({ title, content }) => {
  return (
    <div className="h-full w-[70%]">
      <div className="h-20%">
        <div className="bg-green-700 h-[8%] mt-[4%] border-2 border-solid border-white text-white">
          {title ?? "Default"}
        </div>
        <div className="bg-gray-900 h-[8%] border-2 border-solid border-green-400 text-white"></div>
      </div>

      <div className="bg-gray-900 h-full border-2 border-solid border-green-400 text-white">
        {content ?? "Default"}
      </div>
    </div>
  );
};
