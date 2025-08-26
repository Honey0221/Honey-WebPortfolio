import React, { useEffect } from "react";
import { FaGraduationCap, FaLaptopCode, FaTrophy } from "react-icons/fa";

const Career = () => {
  // 컴포넌트 마운트 시 스타일 추가
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-career-styles', 'true');
    styleElement.textContent = `
      @keyframes slideInLeft {
        from { 
          opacity: 0;
          transform: translateX(-30px);
        }
        to { 
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from { 
          opacity: 0;
          transform: translateX(30px);
        }
        to { 
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-slide-left {
        animation: slideInLeft 0.8s cubic-bezier(0.26, 0.86, 0.44, 0.985) forwards;
      }
      
      .animate-slide-right {
        animation: slideInRight 0.8s cubic-bezier(0.26, 0.86, 0.44, 0.985) forwards;
      }
      
      .animate-delay-300 {
        animation-delay: 300ms;
      }
      
      .career-card-hover {
        transition: all 0.3s ease;
      }
      
      .career-card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
      }
      
      .career-bullet {
        position: relative;
      }
      
      .career-bullet::before {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        left: 0;
        top: 0.625rem;
        transition: all 0.3s ease;
      }
      
      .career-card-hover:hover .career-bullet::before {
        transform: scale(1.2);
      }
    `;
    document.head.appendChild(styleElement);

    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      const styleToRemove = document.querySelector('style[data-career-styles]');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="relative py-16 sm:py-20 md:py-24 z-10 w-full px-4">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">CAREER</h2>
          <div className="h-1 sm:h-1.5 w-32 sm:w-44 md:w-56 mx-auto bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mt-2 sm:mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-4 sm:mt-6 md:mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">교육 및 경력 사항을 소개합니다</p>
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-12">
          {/* 아카데미 경력 카드 1 */}
          <div className="w-full max-w-3xl animate-slide-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="career-card-hover overflow-hidden flex flex-col rounded-xl shadow-[0_10px_25px_rgba(34,197,94,0.15)] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 backdrop-blur-sm">
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <div className="p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 text-white">
                <div className="flex items-start">
                  <div>
                    <span className="text-xs sm:text-sm text-green-300 font-medium">2025.06.18 - 2025.08.18</span>
                    <h4 className="font-bold text-xl sm:text-2xl mt-1 text-green-100">심화_생성형 AI 활용 백엔드 아키텍쳐 실전 프로젝트</h4>
                    <p className="text-sm sm:text-base text-green-200 mt-1">더조은컴퓨터아카데미 구로캠퍼스</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-green-200 mb-3 flex items-center">
                      <FaLaptopCode className="mr-2 text-green-400" />
                      학습 내용
                    </h5>
                    <ul className="space-y-2 sm:space-y-3 text-gray-300">
                      <li className="pl-3 career-bullet before:bg-green-400 text-sm sm:text-base">
                        백엔드 기술: Java(Spring Boot, JPA), Python(Django) 기반 서버 개발 및 PostgreSQL, MongoDB 연동 작업 수행
                      </li>
                      <li className="pl-3 career-bullet before:bg-green-400 text-sm sm:text-base">
                        프론트엔드 기술: React, Redux를 활용한 컴포넌트 기반 UI 설계 및 상태 관리 구현
                      </li>
                      <li className="pl-3 career-bullet before:bg-green-400 text-sm sm:text-base">
                        데이터 전처리 및 차원 축소: Numpy와 Pandas를 활용한 데이터프레임 구성 및 전처리 수행, Scikit-Learn 기반의 PCA·LDA 기법을 활용한 차원 축소 및 Matplotlib을 활용한 데이터 시각화 실습
                      </li>
                      <li className="pl-3 career-bullet before:bg-green-400 text-sm sm:text-base">
                        머신 러닝 및 딥러닝 모델링: PyTorch를 활용한 지도/비지도 학습 모델 구성 및 성능 평가 수행
                      </li>
                      <li className="pl-3 career-bullet before:bg-green-400 text-sm sm:text-base">
                        인프라 환경: AWS(EC2)를 활용한 클라우드 서버 운영 경험 및 Docker를 이용한 컨테이너 기반 애플리케이션 배포 경험
                      </li>
                      <li className="pl-3 career-bullet before:bg-green-400 text-sm sm:text-base">
                        프로젝트 경험: 기업 여론 분석 시스템(PM 역할 담당)
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <h5 className="text-base sm:text-lg font-semibold text-green-200 mb-3 flex items-center">
                      <FaTrophy className="mr-2 text-yellow-400" />
                      수상 사항
                    </h5>
                    <ul className="space-y-2 sm:space-y-3 text-gray-300">
                      <li className="pl-3 career-bullet before:bg-yellow-400 text-sm sm:text-base">
                        <span className="font-medium text-yellow-300">성적 우수상</span> <br />
                        위 사람은 ≪심화_생성형 AI 활용 백엔드 아키텍쳐 실전 프로젝트≫ 과정을 진행함에 있어 성적이 우수하고 타의 모범이 되었기에 이 증서를 수여합니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 아카데미 경력 카드 2 */}
          <div className="w-full max-w-3xl animate-slide-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="career-card-hover overflow-hidden flex flex-col rounded-xl shadow-[0_10px_25px_rgba(30,58,138,0.15)] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 backdrop-blur-sm">
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 text-white">
                <div className="flex items-start">
                  <div>
                    <span className="text-xs sm:text-sm text-blue-300 font-medium">2024.09.23 - 2025.04.07</span>
                    <h4 className="font-bold text-xl sm:text-2xl mt-1 text-blue-100">MSA기반 플러터 활용 Java 프론트엔드 백엔드 풀스택 웹(앱)개발</h4>
                    <p className="text-sm sm:text-base text-blue-200 mt-1">더조은컴퓨터아카데미 인천캠퍼스</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-blue-200 mb-3 flex items-center">
                      <FaLaptopCode className="mr-2 text-blue-400" />
                      학습 내용
                    </h5>
                    <ul className="space-y-2 sm:space-y-3 text-gray-300">
                      <li className="pl-3 career-bullet before:bg-blue-400 text-sm sm:text-base">
                        백엔드 기술: 자바 프로그래밍과 다양한 라이브러리를 활용하여 백엔드 서버를 구축하고 Spring Framework 및 JPA를 이용한 웹 애플리케이션 개발
                      </li>
                      <li className="pl-3 career-bullet before:bg-blue-400 text-sm sm:text-base">
                        데이터베이스 활용: Oracle DB와 JDBC, MySQL을 활용한 데이터 관리 및 연동
                      </li>
                      <li className="pl-3 career-bullet before:bg-blue-400 text-sm sm:text-base">
                        프론트엔드 기술: HTML, CSS, JavaScript, React, jQuery, JSP & Servlet를 활용한 웹 화면 설계 및 구현
                      </li>
                      <li className="pl-3 career-bullet before:bg-blue-400 text-sm sm:text-base">
                        반응형 웹 및 UI/UX 개발: 다양한 디바이스 환경에 맞는 반응형 웹 제작
                      </li>
                      <li className="pl-3 career-bullet before:bg-blue-400 text-sm sm:text-base">
                        팀 협업 및 버전 관리: Git & GitHub를 활용한 협업 및 프로젝트 관리 실무 경험
                      </li>
                      <li className="pl-3 career-bullet before:bg-blue-400 text-sm sm:text-base">
                        비동기 처리 및 성능 최적화: Ajax 및 Restful API를 활용한 효율적인 데이터 처리
                      </li>
                      <li className="pl-3 career-bullet before:bg-blue-400 text-sm sm:text-base">
                        클라우드 및 서버 운영: AWS 클라우드 서비스를 활용한 프로젝트 배포 및 리눅스 서버 운영
                      </li>
                      <li className="pl-3 career-bullet before:bg-blue-400 text-sm sm:text-base">
                        팀 프로젝트 경험: 도서 쇼핑몰 프로젝트
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <h5 className="text-base sm:text-lg font-semibold text-blue-200 mb-3 flex items-center">
                      <FaTrophy className="mr-2 text-yellow-400" />
                      수상 사항
                    </h5>
                    <ul className="space-y-2 sm:space-y-3 text-gray-300">
                      <li className="pl-3 career-bullet before:bg-yellow-400 text-sm sm:text-base">
                        <span className="font-medium text-yellow-300">최우수상</span> <br />
                        위 사람은 ≪국민 평생 직업능력 개발법≫ 제 15조 및 고용보험법 제31조 제2항에 따라 위의 직업능력개발훈련과정을 수료함에 있어 각 항목별 평가에서 가장 우수한 성적을 획득하여 타의 모범이 되어 이 증서를 수여합니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 대학교 경력 카드 */}
          <div className="w-full max-w-3xl animate-slide-left opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="career-card-hover overflow-hidden flex flex-col rounded-xl shadow-[0_10px_25px_rgba(76,29,149,0.15)] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 backdrop-blur-sm">
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
              <div className="p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 text-white">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.25)] mr-4 sm:mr-5 transition-all duration-300 hover:scale-105">
                    <FaGraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-purple-300 font-medium">2013.03 - 2020.03</span>
                    <h4 className="font-bold text-xl sm:text-2xl mt-1 text-purple-100">청운대학교</h4>
                    <p className="text-sm sm:text-base text-purple-200 mt-1">건축설비소방학과</p>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mt-2 text-gray-300">
                  <li className="pl-3 career-bullet before:bg-purple-400 text-sm sm:text-base">
                    2015.08 - 소방안전관리자 1급 (한국소방안전협회) 취득
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 배경 효과들 */}
      <div className="absolute -top-10 -left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </div>
  );
};

export default Career;
