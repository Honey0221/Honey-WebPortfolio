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
                  저는 웹 개발을 통해 사람들의 불편을 줄이고 <span className="text-cyan-300 font-semibold">가치를 전달하고자 하는 신입 개발자</span>입니다. 문제 해결 과정에서 끈기 있게 도전하며, 협업 속에서 소통을 중시하는 태도를 가지고 있습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]">
                <FaServer className="w-5 h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-keep-all">
                  주요 기술 스택은 <span className="text-indigo-300 font-semibold">Java, Spring Boot, MySQL </span> 기반의 백엔드와 <span className="text-indigo-300 font-semibold">React, JavaScript,Tailwind CSS</span>를 활용한 프론트엔드입니다. 또한 <span className="text-indigo-300 font-semibold">Docker</span>와 <span className="text-indigo-300 font-semibold">AWS</span> 환경에서 배포 경험을 쌓았습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                <FaUsers className="w-5 h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-keep-all">
                  팀 프로젝트에서는 <span className="text-blue-300 font-semibold">기업 여론 분석 플랫폼</span>의 PM을 맡아 전체 개발 과정을 계획하고 팀원 간의 협업을 이끌었습니다. <br />또한 <span className="text-blue-300 font-semibold">도서 쇼핑몰, 보드게임 플랫폼</span> 등 다양한 프로젝트를 통해 기획부터 구현, 배포까지 경험했습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                <FaLightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-keep-all">
                  앞으로는 실무에서 배우는 경험을 바탕으로 <span className="text-purple-300 font-semibold">AI와 웹 기술을 접목한 서비스 개발</span>에 도전하고 싶습니다. <br />이를 위해 작은 업무부터 책임감을 가지고 임하고, 새로운 기술을 배워 적용하는 과정을 즐기며 팀과 함께 성과를 만들어가는 개발자로 빠르게 성장하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 장식 효과 */}
      <div className="absolute left-8 top-16 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-70"></div>
      <div className="absolute left-1/3 bottom-12 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-70 hidden sm:block" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute right-1/4 top-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-ping opacity-70 hidden sm:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute right-20 bottom-1/4 w-3 h-3 bg-indigo-500 rounded-full animate-ping opacity-70" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute left-[5%] bottom-1/3 w-4 h-4 bg-teal-500 rounded-full animate-ping opacity-50 hidden sm:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute right-[30%] top-20 w-2 h-2 bg-rose-500 rounded-full animate-ping opacity-60 hidden sm:block" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute left-[40%] top-1/4 w-2 h-2 bg-amber-500 rounded-full animate-ping opacity-50 hidden sm:block" style={{ animationDelay: '1.2s' }}></div>
    </div>
  );
};

export default Profile;