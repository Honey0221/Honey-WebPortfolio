import React from "react";
import SelfPicture from "../img/self-picture.jpg";
import { FaCode, FaServer, FaUsers, FaLightbulb } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="relative py-16 z-10">
      <div className="flex flex-col md:flex-row max-w-[1200px] items-center justify-center mx-auto px-6 text-white">
        <div className="relative z-10 flex justify-center mb-12 md:mb-0 md:mr-16 animate-float">
          <div className="group perspective">
            <div className="relative w-72 h-72 transition-all duration-700 preserve-3d group-hover:my-rotate-y-180">
              <div className="absolute backface-hidden w-full h-full">
                <div className="p-3 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 rounded-xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                  <img
                    src={SelfPicture}
                    alt="프로필"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.3)] overflow-hidden">
                <div className="bg-gradient-to-bl from-indigo-600 via-violet-600 to-purple-600 w-full h-full p-8 flex flex-col items-center justify-center text-center">
                  <div className="shimmer absolute inset-0"></div>
                  <h3 className="text-3xl font-bold mb-3 text-white relative">김지헌</h3>
                  <div className="w-16 h-1 bg-white/50 rounded-full mb-5"></div>
                  <p className="text-md text-gray-100 mb-2">웹 개발자</p>
                  <p className="text-sm text-gray-200 mt-4 italic leading-relaxed">
                    "뜨거운 열정으로 도전하고, 냉철한 이성으로 해결하는 개발자"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center max-w-xl">
          <div className="inline-block mb-8">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">안녕하세요!</h2>
            <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mt-3 rounded-full"></div>
          </div>

          <div className="space-y-7 text-gray-200">
            <div className="flex items-start space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  저는 <span className="text-cyan-300 font-semibold">Java & Spring & React</span>를 좋아하는 개발자입니다. 복잡한 문제를 해결하고 사용자가 즐겁게 사용할 수 있는 웹 서비스를 개발하고 구축하는 것에 큰 보람과 자부심을 느낍니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]">
                <FaServer className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  <span className="text-indigo-300 font-semibold">Tailwind CSS</span>를 이용해 깔끔하고 현대적인 UI를 구현하는 것을 좋아하며, <span className="text-indigo-300 font-semibold">백엔드(Spring, JPA)</span>에도 꾸준히 관심을 가지고 있어 프론트와 백엔드를 균형 있게 다룰 수 있는 개발자로 성장하고자 합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                <FaUsers className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  더조은컴퓨터아카데미에서 <span className="text-blue-300 font-semibold">풀스택 과정(Java, Flutter, AWS)</span>을 수료했습니다. 팀 프로젝트에서 함께 문제를 해결하며 성장하는 과정이 특히 값진 경험이었습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5 transform transition-transform duration-300 hover:translate-x-2 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                <FaLightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  저는 <span className="text-purple-300 font-semibold">함께 일하는 즐거움</span>을 중요하게 생각합니다. 새로운 지식을 배우고 공유하며, 팀원들과 함께 성장할 수 있는 환경에서 일하고 싶습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 장식 요소 */}
      <div className="absolute left-8 top-16 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-70"></div>
      <div className="absolute left-1/3 bottom-12 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-70" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute right-1/4 top-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s' }}></div>
      <div className="absolute right-20 bottom-1/4 w-3 h-3 bg-indigo-500 rounded-full animate-ping opacity-70" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default Profile;
