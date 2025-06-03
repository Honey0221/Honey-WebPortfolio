import React, { useState } from "react";
import { AiOutlineMail, AiOutlineArrowUp, AiFillGithub } from "react-icons/ai";
import { SiKakaotalk } from "react-icons/si";

const FloatingIcons = () => {
  const [tooltip, setTooltip] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("wlgjsrns@gmail.com");
    setTooltip(true);
    setTimeout(() => setTooltip(false), 2000);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const container = document.getElementById("scroll-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-20">
      <div className="relative flex items-center">
        <button
          onClick={copyEmail}
          className="bg-gray-600 p-3 rounded-full shadow-lg hover:bg-gray-500 transition"
        >
          <AiOutlineMail size={24} className="text-white" />
        </button>

        {tooltip && (
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 flex items-center">
            <div className="bg-black bg-opacity-80 text-white text-sm py-1 px-2 rounded w-[190px]">
              이메일이 복사 되었습니다.
            </div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-black ml-[-1px]" />
          </div>
        )}
      </div>

      <a
        href="https://github.com/Honey0221"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-600 p-3 rounded-full shadow-lg hover:bg-gray-500 transition"
      >
        <AiFillGithub size={24} className="text-white" />
      </a>

      <a
        href="https://open.kakao.com/o/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 p-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
      >
        <SiKakaotalk size={24} className="text-white" />
      </a>

      <button
        onClick={scrollToTop}
        className="bg-gray-600 p-3 rounded-full shadow-lg hover:bg-gray-500 transition"
      >
        <AiOutlineArrowUp size={24} className="text-white" />
      </button>
    </div>
  );
};

export default FloatingIcons;
