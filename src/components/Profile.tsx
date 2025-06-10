import React from "react";
import SelfPicture from "../img/self-picture.jpg";
import { FaCode, FaServer, FaUsers, FaLightbulb } from "react-icons/fa";

// 추가 스타일을 위한 스타일 문자열
const customStyles = `
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
`;

// 스타일 요소 생성 및 추가 함수
const addStyles = () => {
  if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);
  }
};

const Profile = () => {
  // 컴포넌트 마운트 시 스타일 추가
  React.useEffect(() => {
    addStyles();
    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      if (typeof document !== 'undefined') {
        const styleElement = document.querySelector('style[data-custom-styles]');
        if (styleElement) {
          styleElement.remove();
        }
      }
    };
  }, []);

  return (
    <div className="relative py-20 overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="flex flex-col md:flex-row max-w-[1200px] items-center justify-center mx-auto px-6 text-white">
        <div className="relative z-10 flex justify-center mb-12 md:mb-0 md:mr-16">
          <div className="group perspective">
            <div className="relative w-64 h-64 transition-all duration-500 preserve-3d group-hover:my-rotate-y-180">
              <div className="absolute backface-hidden w-full h-full">
                <div className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-xl">
                  <img
                    src={SelfPicture}
                    alt="프로필"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-bl from-indigo-600 to-purple-600 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold mb-3">김지헌</h3>
                <p className="text-sm text-gray-200">웹(앱) 개발자</p>
                <p className="text-sm text-gray-200 mt-4">
                  "뜨거운 열정으로 도전하고, 냉철한 이성으로 해결하는 개발자"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center max-w-xl">
          <div className="inline-block mb-6">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-cyan-400">김지헌</h2>
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-indigo-500 mt-2"></div>
          </div>

          <div className="space-y-6 text-gray-200">
            <div className="flex items-start space-x-4 transform transition-transform hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  문제 해결 능력을 바탕으로 <span className="text-cyan-300 font-semibold">React와 TypeScript</span>를 활용해 사용자 경험을 고려한 웹 애플리케이션을 개발합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-transform hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 flex items-center justify-center">
                <FaServer className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  <span className="text-indigo-300 font-semibold">TailwindCSS</span>를 이용해 모던하고 깔끔한 스타일링을 선호하며, 백엔드(Spring, JPA)와의 원활한 API 통신에도 익숙합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-transform hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center">
                <FaUsers className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  더조은컴퓨터아카데미에서 <span className="text-blue-300 font-semibold">풀스택 과정(Java, Flutter, AWS)</span>을 수료하고 팀 프로젝트를 수행하면서 협업 능력과 문제 해결 능력을 습득했습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-transform hover:translate-x-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center">
                <FaLightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  협업 경험과 지속적인 학습을 기반으로 <span className="text-purple-300 font-semibold">시스템 품질 향상과 팀 시너지</span>를 동시에 이끌어낼 수 있는 개발자가 되겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 장식 요소 */}
      <div className="absolute left-4 top-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute right-10 bottom-20 w-3 h-3 bg-indigo-500 rounded-full animate-ping"></div>
      <div className="absolute left-1/4 bottom-10 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
      <div className="absolute right-1/3 top-20 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default Profile;
