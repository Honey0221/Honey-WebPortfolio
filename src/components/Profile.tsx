import React, { useEffect, useState } from "react";
import SelfPicture from "../img/self-picture.png";
import { FaCode, FaServer, FaUsers, FaLightbulb } from "react-icons/fa";

const Profile = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 환경 감지
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // 프로필 카드 클릭 핸들러
  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  // 컴포넌트 마운트 시 스타일 추가
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-profile-styles', 'true');
    styleElement.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .perspective {
        perspective: 1000px;
      }
      
      .preserve-3d {
        transform-style: preserve-3d;
      }
      
      .backface-hidden {
        backface-visibility: hidden;
      }
      
      .my-rotate-y-180 {
        transform: rotateY(180deg);
      }
      
      .group:hover .group-hover\\:my-rotate-y-180 {
        transform: rotateY(180deg);
      }
      
      .shimmer {
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.1) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        background-size: 200% 100%;
        animation: shimmer 3s infinite;
      }
      
      @keyframes shimmer {
        0% { background-position: -100% 0; }
        100% { background-position: 200% 0; }
      }
      
      .text-keep-all {
        word-break: keep-all;
        overflow-wrap: break-word;
      }
    `;
    document.head.appendChild(styleElement);

    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      const styleToRemove = document.querySelector('style[data-profile-styles]');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full pt-4 xs:pb-6 sm:py-12 md:py-16 z-10 px-4">
      <div className="flex flex-col lg:flex-row max-w-[1200px] items-center justify-center mx-auto text-white">
        <div className="relative z-10 flex justify-center mb-20 sm:mb-20 lg:my-0 lg:mr-16 animate-float">
          <div className={`${isMobile ? "" : "group"} perspective`}>
            <div
              className={`relative w-52 h-52 xs:w-60 xs:h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 transition-all duration-700 preserve-3d 
                          ${isMobile ? (isFlipped ? "my-rotate-y-180" : "") : "group-hover:my-rotate-y-180"}`}
              onClick={handleCardClick}
            >
              <div className="absolute backface-hidden w-full h-full">
                <div className="p-2 xs:p-3 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 rounded-xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                  <img
                    src={SelfPicture}
                    alt="프로필 사진"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.3)] overflow-hidden">
                <div className="bg-gradient-to-bl from-indigo-600 via-violet-600 to-purple-600 w-full h-full p-4 xs:p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                  <div className="shimmer absolute inset-0"></div>
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-white relative">김지헌</h3>
                  <div className="w-10 xs:w-12 sm:w-16 h-1 bg-white/50 rounded-full mb-2 xs:mb-3 sm:mb-5"></div>
                  <p className="text-xs xs:text-sm sm:text-md text-gray-100 mb-1 xs:mb-2">웹 개발자</p>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1 xs:mt-2 sm:mt-4 italic leading-relaxed">
                    "뜨거운 열정으로 도전하고, 냉철한 이성으로 해결하는 개발자"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center lg:items-start justify-center max-w-xl">
          <div className="inline-block mb-6 sm:mb-8 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">안녕하세요!</h2>
            <div className="h-1 sm:h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mt-2 sm:mt-3 rounded-full"></div>
          </div>

          <div className="space-y-5 sm:space-y-7 text-gray-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-keep-all">
                  저는 개발이 즐겁고 배움에 열정적인 <span className="text-cyan-300 font-semibold">신입 웹 개발자</span>입니다. 코딩을 하면서 새로운 기능을 개발하고 어려운 문제를 해결해 나가는 과정이 정말 재미있습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]">
                <FaServer className="w-5 h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-keep-all">
                  <span className="text-indigo-300 font-semibold">React</span>와 <span className="text-indigo-300 font-semibold">Tailwind CSS</span>를 활용한 웹 개발에 흥미를 느끼고 있으며, 백엔드 기술인 <span className="text-indigo-300 font-semibold">Java</span>와 <span className="text-indigo-300 font-semibold">Spring</span>도 함께 공부하고 있습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                <FaUsers className="w-5 h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-keep-all">
                  최근 더조은컴퓨터아카데미에서 <span className="text-blue-300 font-semibold">풀스택 과정</span>을 수료했습니다. 학원에서 진행한 팀 프로젝트는 제게 큰 자신감을 주었고, 실제 개발 환경에서 어떻게 협업하는지 배울 수 있었습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                <FaLightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-keep-all">
                  꾸준히 <span className="text-purple-300 font-semibold">개발 공부</span>하며 첫 직장에서 많은 것을 배우고 싶습니다. 아직 모르는 부분이 많지만 긍정적인 마음가짐으로 도전하고, 동료들과 함께 성장하는 개발자가 되고 싶습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-8 top-16 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-70"></div>
      <div className="absolute left-1/3 bottom-12 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-70 hidden sm:block" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute right-1/4 top-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-ping opacity-70 hidden sm:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute right-20 bottom-1/4 w-3 h-3 bg-indigo-500 rounded-full animate-ping opacity-70" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default Profile;
