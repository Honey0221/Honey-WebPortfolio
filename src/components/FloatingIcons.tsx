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
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-20">
      <div className="relative flex items-center">
        <button
          onClick={copyEmail}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full shadow-lg hover:shadow-lg hover:shadow-cyan-500/30 transition duration-300 transform hover:scale-110"
        >
          <AiOutlineMail size={24} className="text-white" />
        </button>

        {tooltip && (
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 flex items-center">
            <div className="bg-black bg-opacity-80 text-white text-sm py-1 px-2 rounded w-[170px]">
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
        className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-lg hover:shadow-indigo-500/30 transition duration-300 transform hover:scale-110"
      >
        <AiFillGithub size={24} className="text-white" />
      </a>

      <a
        href="https://open.kakao.com/o/soVkNRzh"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-full shadow-lg hover:shadow-lg hover:shadow-yellow-400/30 transition duration-300 transform hover:scale-110"
      >
        <SiKakaotalk size={24} className="text-white" />
      </a>

      <button
        onClick={scrollToTop}
        className="bg-gradient-to-r from-pink-500 to-red-600 p-3 rounded-full shadow-lg hover:shadow-lg hover:shadow-pink-500/30 transition duration-300 transform hover:scale-110"
      >
        <AiOutlineArrowUp size={24} className="text-white" />
      </button>
    </div>
  );
};

export default FloatingIcons;
