import React from "react";

const Profile = () => {
  return (
    <div className="flex max-w-[1200px] items-center justify-center mx-auto px-4 text-white">
      <div className="flex justify-center mr-8">
        <img
          src="https://via.placeholder.com/150"
          alt="프로필"
          className="w-40 h-40 rounded-full border-4 border-gray-600"
        />
      </div>
      <div className="flex flex-col items-start jsutify-center">
        <h2 className="text-4xl font-bold mb-4 text-center">김지헌</h2>
        <span className="text-lg leading-relaxed">
          문제 해결 능력을 바탕으로 <span className="text-gray-800 font-semibold">React와 TypeScript</span>를 활용해 사용자 경험이 뛰어난 웹 애플리케이션을 개발합니다.
        </span>
        <span className="text-lg leading-relaxed">
         <span className="text-gray-800 font-semibold">TailwindCSS</span>를 이용해 빠르고 깔끔한 스타일링을 선호하며, 백엔드(Spring, JPA)와의 원활한 API 통신에도 익숙합니다.
        </span>
        <span className="text-lg leading-relaxed">
          더조은컴퓨터아카데미에서 <span className="text-gray-800 font-semibold">풀스택 과정(Java, Flutter, AWS)</span> 수료 후 팀 프로젝트(도서 쇼핑몰)를 성공적으로 완수했습니다.
        </span>
        <span className="text-lg leading-relaxed">
          협업 경험과 지속적인 학습으로 시스템 품질 향상과 팀 시너지를 동시에 이끌어내겠습니다.
        </span>
      </div>
    </div>
  );
};

export default Profile;
