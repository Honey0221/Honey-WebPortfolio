import React from "react";
import SelfPicture from "../img/self-picture.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] items-center justify-center mx-auto px-6 py-8 text-white">
      <div className="flex justify-center mb-8 md:mb-0 md:mr-12">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-70 blur group-hover:opacity-100 transition duration-300 -z-10"></div>
          <img
            src={SelfPicture}
            alt="프로필"
            className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center max-w-xl">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-200 to-indigo-200 bg-clip-text text-transparent">김지헌</h2>
        <div className="space-y-4 text-gray-200">
          <p className="text-lg leading-relaxed border-l-4 border-cyan-500 pl-4">
            문제 해결 능력을 바탕으로 <span className="text-cyan-300 font-semibold">React와 TypeScript</span>를 활용해 사용자 경험을 고려한 웹 애플리케이션을 개발합니다.
          </p>
          <p className="text-lg leading-relaxed border-l-4 border-indigo-500 pl-4">
            <span className="text-indigo-300 font-semibold">TailwindCSS</span>를 이용해 모던하고 깔끔한 스타일링을 선호하며, 백엔드(Spring, JPA)와의 원활한 API 통신에도 익숙합니다.
          </p>
          <p className="text-lg leading-relaxed border-l-4 border-blue-500 pl-4">
            더조은컴퓨터아카데미에서 <span className="text-blue-300 font-semibold">풀스택 과정(Java, Flutter, AWS)</span>을 수료하고 팀 프로젝트를 수행하면서 협업 능력과 문제 해결 능력을 습득했습니다.
          </p>
          <p className="text-lg leading-relaxed border-l-4 border-purple-500 pl-4">
            협업 경험과 지속적인 학습을 기반으로 <span className="text-purple-300 font-semibold">시스템 품질 향상과 팀 시너지</span>를 동시에 이끌어낼 수 있는 개발자가 되겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
