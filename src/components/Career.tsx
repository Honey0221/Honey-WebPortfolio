import React from "react";

const Career = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 text-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-center text-white ">CAREER</h2>
      <div className="flex items-center justify-center flex-col">
        <div className="w-full overflow-hidden flex flex-col rounded-2xl bg-white relative justify-between group">
          <div className="p-5 flex flex-col gap-3">
            <span className="text-sm">2024.09.23 - 2025.04.07</span>
            <h4 className="font-bold text-2xl flex flex-col gap-1">
              더조은컴퓨터아카데미
              <span className="text-sm">
                MSA기반 플러터 활용 Java 프론트엔드 백엔드 풀스택 웹(앱)개발
              </span>
            </h4>
            <ul className="text-base">
              <li className="pl-2.5 mb-1 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                자바 프로그래밍과 다양한 라이브러리를 활용하여 백엔드 서버를 구축하고 Spring Boot 및 JPA를 이용한 웹 애플리케이션 개발
              </li>
              <li className="pl-2.5 mb-1 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                데이터베이스 활용: Oracle DB와 JDBC, MySQL를 활용한 데이터 관리 및 연동
              </li>
              <li className="pl-2.5 mb-1 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                프론트엔드 개발: HTML, CSS, JavaScript, React, jQuery, JSP & Thymeleaf를 활용한 UI 설계 및 구현
              </li>
              <li className="pl-2.5 mb-1 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                모바일 앱 개발: Flutter 및 Dart를 활용한 모바일 앱 UI 및 기능 개발
              </li>
              <li className="pl-2.5 mb-1 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                팀 협업 및 버전 관리: Git과 GitHub를 활용한 협업 및 프로젝트 관리 실무 경험
              </li>
              <li className="pl-2.5 mb-1 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                비동기 처리 및 성능 최적화: Ajax 및 Restful API를 활용한 효율적인 데이터 처리
              </li>
              <li className="pl-2.5 mb-1 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                클라우드 및 서버 운영: AWS 클라우드 서비스를 활용한 프로젝트 배포 및 리눅스 서버 운영
              </li>
              <li className="pl-2.5 mb-1 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                팀 프로젝트 경험: 도서 쇼핑몰 프로젝트 진행
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col rounded-2xl bg-white relative justify-between group mt-6 w-full">
          <div className="p-5 flex flex-col gap-3">
            <span className="text-sm">2013.03 - 2020.03</span>
            <h4 className="font-bold text-2xl flex flex-col gap-1">
              청운대학교
              <span className="text-sm">건축설비소방학과</span>
            </h4>
            <ul className="text-base">
              <li className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-[#A6A6A6] before:block before:rounded-full before:left-0 before:top-[0.625rem]">
                2015.08 - 소방안전관리자 1급 (한국소방안전협회) 취득
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
