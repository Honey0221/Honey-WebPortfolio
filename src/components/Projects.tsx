import React, { JSX, useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineLink,
  AiOutlineCalendar,
} from "react-icons/ai";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiThymeleaf,
  SiGithub,
  SiSpringboot,
  SiSpringsecurity,
  SiVite,
  SiBootstrap,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { FaDatabase, FaJava, FaCode, FaTools, FaAws } from "react-icons/fa";

import HotelImg from "../img/MiniprojectMain.png";
import BBookImg from "../img/TeamprojectMain.png";
import GameImg from "../img/MyprojectMain.png";
import PortfolioImg from "../img/WebportfolioMain.png";

type Project = {
  name: string;
  period: string;
  goals: string[];
  environment: {
    tools: string[];
    frontend: string[];
    backend: string[];
  };
  process: {
    title: string;
    items: string[];
  }[];
  results: {
    items: string[];
  }[];
  retrospective: {
    good: string;
    bad: string;
    improve: string;
    bugfix: string;
    lesson: string | string[];
  };
  link: string;
  techIcons: JSX.Element[];
  image: string;
};

const projectList: Project[] = [
  {
    name: "호텔 운영 관리 시스템",
    period: "2024.11.12. ~ 2024.11.26.",
    goals: [
      "호텔 운영의 효율성을 높이고 관리자의 부담을 줄이기 위한 시스템을 제안",
      "자바 라이브러리만을 사용하여 개발하였고, 주제 선정과 유저 시나리오는 브레인스토밍을 통해 진행",
      "실제 사용자가 필요로 하는 기능들을 최대한 반영하였고, 고객과 관리자가 편리하게 사용할 수 있는 UI와 시스템을 설계",
      "Servlet 구조를 기반으로 HTTP 요청과 응답을 처리하고, MySQL 데이터베이스와의 연동을 통해 데이터를 관리하는 방식으로 구현",
    ],
    environment: {
      tools: ["MySQL", "IntelliJ", "Git"],
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["Java", "Tomcat 서버"],
    },
    process: [
      {
        title: "데이터 모델링 및 페이지 구성",
        items: [
          "프로젝트에 필요한 주요 데이터를 분석하고 구조화하여 테이블 설계",
          "각 페이지마다 레이아웃을 간략하게 구성하고 필요한 기능 구상",
        ],
      },
      {
        title: "객실 예약 페이지 개발",
        items: [
          "관리자 친화적이고 시각적으로 편리한 UI/UX 설계",
          "객실별 상태와 예약 현황을 한눈에 확인할 수 있는 형태로 구현",
        ],
      },
      {
        title: "객실 예약 관련 기능 구현",
        items: [
          "객실별 상태와 예약 현황 확인",
          "객실 예약 시 유효성 검사 후 DB 업데이트",
        ],
      },
    ],
    results: [
      {
        items: [
          "객실 상태 관리: 객실에 문제 발생 시 대응할 수 있도록 '점검중' 상태 추가",
          "객실 갤러리: Swiper 라이브러리를 활용하여 객실별 이미지 슬라이드 제공",
          "예약 현황 조회: 층별, 주간, 월간 단위로 예약 내역 확인, DB 데이터를 활용하여 예약 현황 출력",
        ],
      },
    ],
    retrospective: {
      good:
        "개발 전 데이터 모델링과 페이지 구성을 미리 정리하여 원활하게 개발을 진행할 수 있었습니다.",
      bad:
        "고객 등급에 따른 옵션 선택 기능을 추가하고 싶었으나, 시간 부족으로 구현하지 못했습니다.",
      improve:
        "주어진 시간 내에 세부적인 개발 일정 계획을 세워 효율적으로 작업을 진행해야 합니다.",
      bugfix:
        "중복 예약이 가능한 문제를 로그를 추가하여 디버깅하고, 동일 객실 번호의 예약 기간이 겹치지 않도록 로직 수정하여 해결했습니다.",
      lesson:
        "자바와 부트스트랩에 대한 이해도가 향상되었고, 기획부터 개발까지 혼자 수행하며 문제 해결 능력이 많이 발전했습니다.",
    },
    link: "https://www.canva.com/design/DAGh8bPtQp8/SHcUTKq_L6OpoUokG-a4ew/view",
    techIcons: [
      <FaJava key="java" size={20} className="text-red-500" />,
      <SiMysql key="mysql" size={20} className="text-blue-400" />,
      <SiBootstrap key="bootstrap" size={20} className="text-purple-500" />,
      <FaCode key="servlet" size={20} className="text-gray-300" />,
      <SiGit key="git" size={20} className="text-gray-500" />,
    ],
    image: HotelImg,
  },
  {
    name: "도서 쇼핑몰",
    period: "2024.12.24. ~ 2025.01.24.",
    goals: [
      "사용자의 편리한 소비 경험을 위해 도서 쇼핑몰 사이트를 기획",
      "Spring Boot를 사용하여 개발하였고, 기존 도서 쇼핑몰 사이트를 벤치마킹하여 필요한 기능들을 구상",
      "시각적으로 편안한 디자인을 적용하고, 고객 맞춤형 도서 추천 및 리뷰 시스템을 통해 소비 심리를 유도",
      "Kakao, OpenAI, Telegram Bot 등 다양한 오픈 API들을 활용하여 풍부한 콘텐츠와 확장된 서비스 제공",
    ],
    environment: {
      tools: ["MySQL", "IntelliJ", "Git"],
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Thymeleaf",
        "jQuery",
        "Ajax",
      ],
      backend: ["Spring Boot", "Spring Security", "Lombok", "JPA", "Tomcat 서버"],
    },
    process: [
      {
        title: "담당 역할",
        items: [
          "상품 관련 파트: 상품 찜하기 및 공유, 유튜브 영상 임베딩, 리뷰 및 상품 평가 통계 제공, 리뷰 좋아요·신고 기능 구현, 사용자 활동 기반 도서 추천 시스템",
          "관리자 페이지: 매출액 비교 및 주별·월별 추이 분석, 상품 관리 및 통계 자료 제공, 리뷰·신고 관리 및 클린봇 시스템",
        ],
      },
    ],
    results: [
      {
        items: [
          "로그인 및 상품 구매 여부 확인 후 리뷰 작성 가능",
          "클린봇 기능: OpenAI를 사용해 부정적 내용 자동 분석, 제재된 리뷰에 안내 문구 표시",
          "리뷰 작성 후 상품 평가 자동 업데이트, 중복 좋아요·신고 방지",
          "상품 관리: CRUD, 필터링·정렬·검색 기능, 엑셀 다운로드 지원",
          "텔레그램 봇 연동: 상품 신규 등록 시 관리자에게 자동 알림 발송",
        ],
      },
    ],
    retrospective: {
      good:
        "복잡한 기능(클린봇, 추천 시스템)을 성공적으로 개발하여 만족도가 높았습니다.",
      bad:
        "UI/UX 디자인 완성도가 부족해 사용자 경험이 조금 아쉽게 느껴졌습니다.",
      improve:
        "기능 개발과 시각적 완성도를 동시에 고려하는 워크플로우를 마련해야 합니다.",
      bugfix:
        "스크립트 중복 바인딩 오류를 이벤트 리스너 로직 검토 및 상태 변수 활용으로 해결했습니다.",
      lesson:
        "팀원 간 소통의 중요성을 깨달았고, 테스트 코드 작성의 필요성을 다시금 인지했습니다.",
    },
    link: "https://www.canva.com/design/DAGhgFhA4R4/lDFugDHqd5-S7GrQ4pOY_A/view",
    techIcons: [
      <FaJava key="java" size={20} className="text-red-500" />,
      <SiSpringboot key="spring" size={20} className="text-green-400" />,
      <SiThymeleaf key="thymeleaf" size={20} className="text-green-600" />,
      <SiBootstrap key="bootstrap" size={20} className="text-purple-500" />,
      <SiMysql key="mysql" size={20} className="text-blue-400" />,
      <SiGithub key="github" size={20} className="text-gray-300" />,
    ],
    image: BBookImg,
  },
  {
    name: "보드 게임 플랫폼",
    period: "2025.02.10. ~ 2025.03.07.",
    goals: [
      "전통적인 웹 보드게임의 인기가 하락하는 추세에서 반전을 노리고 기획",
      "Spring Boot를 사용하여 개발하였고, MyBatis를 활용해 데이터 간 매핑 없이 관리",
      "멀티 게임으로 사용자 간 경쟁을 유도하며, AI 모드를 통해 다양한 게임 방식 제공",
      "WebSocket을 활용해 접속자 목록 실시간 확인 및 대기실 채팅과 게임 중 빠른 대화 기능 제공",
    ],
    environment: {
      tools: ["MySQL", "MyBatis", "IntelliJ", "Git", "AWS"],
      frontend: ["HTML", "CSS", "JavaScript", "Thymeleaf", "jQuery", "Ajax"],
      backend: ["Spring Boot", "Spring Security", "Lombok", "WebSocket", "Tomcat 서버"],
    },
    process: [
      {
        title: "메인 화면 구성",
        items: [
          "Swiper 라이브러리를 활용한 배너 배치",
          "좌측, 중앙, 우측 세 가지 패널 레이아웃 구성",
        ],
      },
      {
        title: "로비 좌측 패널 기능",
        items: [
          "유저 프로필 확인",
          "게임 매칭 및 AI 대전 시작 버튼 배치",
          "현재 접속자 목록 표시",
        ],
      },
      {
        title: "로비 중앙 패널 기능",
        items: [
          "관리자 전용 공지사항 작성",
          "유저 공략 및 자유 게시판 제공",
        ],
      },
      {
        title: "로비 우측 패널 기능",
        items: [
          "유저 및 관리자 간 채팅창 제공",
          "귓속말 및 쪽지 기능 확장 가능",
        ],
      },
      {
        title: "게임 화면",
        items: [
          "게임 생성, 규칙, 결과 처리 로직 구현",
          "마지막 착수, 유효한 착수 지점 표시 안내",
          "제한 시간 초과 시 자동 착수 및 자동 턴 넘김 로직 구현",
          "실시간 채팅 및 빠른 대화 버튼 제공",
        ],
      },
    ],
    results: [
      {
        items: [
          "중복 코드 제거를 위한 공통 모듈 분리 및 리팩토링",
          "XML 기반 매핑으로 MyBatis 활용, 효율적인 데이터 조회 구현",
          "오셀로 게임 핵심 로직 구현 및 WebSocket 실시간 데이터 처리",
        ],
      },
    ],
    retrospective: {
      good:
        "공통 모듈 분리로 가독성을 높이는 리팩토링을 진행했고, MyBatis를 효율적으로 활용했습니다.",
      bad:
        "WebSocket 관련 기능 구현 난이도가 높아 일정이 지연된 부분이 있었습니다.",
      improve:
        "WebSocket 로직 흐름을 더 명확히 학습해 유사한 문제 발생을 줄여야 합니다.",
      bugfix:
        "트랜잭션별 try-catch를 추가해 안정성을 강화하고, 에러 발생 시 상세 로그를 남겨 디버깅 시간을 단축했습니다.",
      lesson:
        "오셀로 게임 로직을 깊이 이해하며 WebSocket 기반 실시간 처리의 중요성을 깨달았습니다.",
    },
    link: "https://www.canva.com/design/DAGg2IUk3nw/7tEwjDkB86q2If2hSnVAMg/view",
    techIcons: [
      <FaJava key="java" size={20} className="text-red-500" />,
      <SiSpringboot key="spring" size={20} className="text-green-400" />,
      <SiMysql key="mysql" size={20} className="text-blue-400" />,
      <FaTools key="tools" size={20} className="text-gray-700" />,
      <SiGithub key="github" size={20} className="text-gray-300" />,
      <FaAws key="aws" size={20} className="text-orange-400" />,
    ],
    image: GameImg,
  },
  {
    name: "웹 포트폴리오",
    period: "2025.05.27. ~ 진행중.",
    goals: [
      "백엔드 중심의 프로젝트 경험에서 벗어나 프론트엔드 기술 스택에 대한 이해를 넓히기 위해 SRP 방식으로 제작",
      "나를 소개하는 웹사이트를 직접 구현하는 과정에서 프론트엔드 기술을 스스로 학습하고, 표현력과 구현력을 함께 향상시키는 것을 목표로 기획"
    ],
    environment: {
      tools: ["GitHub", "Vite"],
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: [],
    },
    process: [],
    results: [],
    retrospective: {
      good: "",
      bad: "",
      improve: "",
      bugfix: "",
      lesson: [
        "React의 컴포넌트 기반 개발 방식의 효율성과 유지보수 편리성을 경험하며 코드 구조화의 필요성을 체감했습니다.",
        "나에게 부족한 기술을 스스로 학습하고 적용하는 과정에서 문제 해결 능력과 자기 주도적 학습 태도를 습득했습니다.",
        "백엔드 개발과 달리 프론트엔드는 사용자 경험에 직접적인 영향을 주는 만큼 섬세한 표현과 반응형 설계가 필수적임을 깨달았습니다.",
      ],
    },
    link: "https://wlgjsrns.mycafe24.com",
    techIcons: [
      <SiReact key="react" size={20} className="text-blue-400" />,
      <SiTypescript key="typescript" size={20} className="text-green-600" />,
      <SiTailwindcss key="tailwind" size={20} className="text-purple-500" />,
      <SiGithub key="github" size={20} className="text-gray-300" />,
      <SiVite key="vite" size={20} className="text-blue-400" />,
    ],
    image: PortfolioImg,
  },
];

// 프로젝트 모달 컴포넌트
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // 웹 포트폴리오인지 확인
  const isPortfolio = project.name === "웹 포트폴리오";

  // 회고가 문자열인지 배열인지 확인하는 함수
  const renderLesson = () => {
    if (Array.isArray(project.retrospective.lesson)) {
      return (
        <ul className="list-disc ml-5 text-gray-700">
          {project.retrospective.lesson.map((item, idx) => (
            <li key={idx} className="mb-2">{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-gray-700">{project.retrospective.lesson}</p>;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-30">
      <div className="bg-gray-800 text-white w-11/12 md:w-3/4 lg:w-1/2 h-[90vh] flex flex-col rounded-lg relative">
        {/* 헤더 영역 */}
        <div className="px-8 py-4 flex-shrink-0 bg-gradient-to-r from-gray-900 to-gray-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
          >
            <AiOutlineClose size={24} />
          </button>
          <h3 className="text-3xl font-bold mb-1">{project.name}</h3>
          <p className="text-sm text-gray-400 flex items-center">
            <AiOutlineCalendar className="inline mr-1" />
            {project.period}
          </p>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="px-8 pt-4 pb-4 overflow-y-auto flex-1 bg-gray-100 text-black">
          {/* 프로젝트 이미지 영역 */}
          <div className="mb-6 flex justify-center">
            <img
              src={project.image}
              alt={project.name}
              className="w-full max-w-xl rounded-lg shadow-md"
            />
          </div>

          {/* 목표 및 소개 영역 */}
          <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              프로젝트 목표·소개
            </h4>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              {project.goals.map((goal, gidx) => (
                <li key={gidx}>{goal}</li>
              ))}
            </ul>
          </div>

          {/* 개발 환경 영역 */}
          <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              개발 환경
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-700 mb-2">개발 도구</h5>
                <ul className="list-disc ml-5">
                  {project.environment.tools.map((tool, tidx) => (
                    <li key={tidx}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-700 mb-2">프론트엔드</h5>
                <ul className="list-disc ml-5">
                  {project.environment.frontend.map((fe, fid) => (
                    <li key={fid}>{fe}</li>
                  ))}
                </ul>
              </div>
              {project.environment.backend.length > 0 && (
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-2">백엔드</h5>
                  <ul className="list-disc ml-5">
                    {project.environment.backend.map((be, bid) => (
                      <li key={bid}>{be}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 개발 과정 영역 - 프로세스가 있을 때만 표시 */}
          {project.process.length > 0 && (
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
                개발 과정
              </h4>
              {project.process.map((step, sidx) => (
                <div key={sidx} className="mb-4 bg-gray-50 p-4 rounded-lg">
                  <h5 className="text-xl font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h5>
                  <ul className="list-disc ml-5 space-y-1 text-gray-700">
                    {step.items.map((item, iidx) => (
                      <li key={iidx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 수행 결과물 영역 - 결과물이 있을 때만 표시 */}
          {project.results.length > 0 && (
            <div className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
                주요 기능
              </h4>
              {project.results.map((res, ridx) => (
                <div key={ridx} className="mb-4">
                  <ul className="list-disc ml-5 space-y-1 text-gray-700">
                    {res.items.map((item, iidx) => (
                      <li key={iidx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 프로젝트 회고 영역 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
              프로젝트 회고
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.retrospective.good && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">잘한 점</h5>
                  <p className="text-gray-700">{project.retrospective.good}</p>
                </div>
              )}
              {project.retrospective.bad && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-700 mb-2">아쉬운 점</h5>
                  <p className="text-gray-700">{project.retrospective.bad}</p>
                </div>
              )}
              {project.retrospective.improve && (
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-700 mb-2">개선할 점</h5>
                  <p className="text-gray-700">{project.retrospective.improve}</p>
                </div>
              )}
              {project.retrospective.bugfix && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">오류 해결</h5>
                  <p className="text-gray-700">{project.retrospective.bugfix}</p>
                </div>
              )}
              <div className="md:col-span-2 bg-indigo-50 p-4 rounded-lg">
                <h5 className="font-semibold text-indigo-700 mb-2">느낀 점</h5>
                {renderLesson()}
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 영역 - 웹 포트폴리오가 아닐 때만 버튼 표시 */}
        <div className="px-8 py-6 flex-shrink-0 bg-gradient-to-r from-gray-700 to-gray-900">
          <div className="flex justify-center">
            {!isPortfolio && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 flex items-center"
              >
                <AiOutlineLink className="mr-2" />
                프로젝트 보러가기
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
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

  const openModal = (idx: number) => {
    setSelected(idx);
    setOpen(true);
  };

  const closeModal = () => {
    setSelected(null);
    setOpen(false);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {projectList.map((proj, idx) => (
            <div
              key={proj.name}
              className="relative bg-[#5555] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition w-[300px] h-[400px]"
              onClick={() => isMobile && openModal(idx)}
            >
              <div className="flex flex-col justify-center h-full">
                <div className="h-[256px] w-full">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-20 flex items-center justify-center bg-[#5555]">
                  <h3 className="text-2xl font-bold text-white">{proj.name}</h3>
                </div>

                <div className="p-4 flex flex-wrap justify-center gap-3 bg-[#5555]">
                  {proj.techIcons.map((iconElem, i) => (
                    <div
                      key={i}
                      className="text-white bg-white flex items-center justify-center rounded-full w-8 h-8"
                    >
                      {iconElem}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-[#5555] flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(idx);
                  }}
                  className="px-4 py-2 border-[2px] border-white rounded text-white hover:bg-white hover:text-[#000] hover:font-semibold mr-4"
                >
                  자세히보기
                </button>
                {proj.name !== "웹 포트폴리오" && !isMobile && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 border-[2px] border-white rounded text-white hover:bg-white hover:text-[#000] hover:font-semibold"
                  >
                    링크이동
                  </a>
                )}
              </div>

              {open && selected === idx && (
                <ProjectModal project={proj} onClose={closeModal} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
