import React, { useState, useEffect } from "react";
import { BsLightningChargeFill, BsCompass, BsBriefcaseFill } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  summary: string;
  bullets: string[];
  color: string;
}

const ExpandableCard: React.FC<CardProps> = ({ icon, title, summary, bullets, color }) => {
  const [expanded, setExpanded] = useState(false);

  const getColorClass = (type: string) => {
    switch (color) {
      case 'purple':
        return type === 'bg'
          ? 'bg-gradient-to-r from-purple-500 to-indigo-600'
          : type === 'text'
            ? 'text-purple-400'
            : 'shadow-purple-500/30';
      case 'pink':
        return type === 'bg'
          ? 'bg-gradient-to-r from-pink-500 to-rose-500'
          : type === 'text'
            ? 'text-pink-400'
            : 'shadow-pink-500/30';
      case 'red':
        return type === 'bg'
          ? 'bg-gradient-to-r from-red-500 to-orange-500'
          : type === 'text'
            ? 'text-red-400'
            : 'shadow-red-500/30';
      default:
        return type === 'bg'
          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
          : type === 'text'
            ? 'text-blue-400'
            : 'shadow-blue-500/30';
    }
  };

  return (
    <div className={`w-full max-w-[1000px] transition-all duration-700 ease-in-out mb-6 sm:mb-10 hover:scale-[1.01] transform`}>
      <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300">
        {/* 통합 카드 컨테이너 */}
        <div className={`flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-out bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 backdrop-blur-sm ${expanded ? 'md:w-[1000px]' : ''} ${expanded ? 'max-h-none' : 'max-h-[200px]'}`}>
          {/* 메인 카드 */}
          <div className={`transition-all duration-500 ease-out z-10 ${expanded ? 'md:w-[40%]' : 'w-full'}`}>
            <div className={`h-1.5 sm:h-2 ${getColorClass('bg')}`}></div>
            <div className="p-5 sm:p-8 text-white">
              <div className="flex items-center">
                <div className={`p-2 sm:p-3 ${getColorClass('bg')} rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.25)] mr-3 sm:mr-5 transition-all duration-300 ${expanded ? 'scale-110' : 'hover:scale-105'}`}>
                  {icon}
                </div>
                <h5 className="text-xl sm:text-2xl font-bold">{title}</h5>
                {bullets.length > 0 && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className={`ml-auto flex items-center text-xs sm:text-sm font-medium ${getColorClass('text')} focus:outline-none transition-all duration-300 hover:scale-110 hover:opacity-80`}
                  >
                    {expanded ? (
                      <>
                        <span className="hidden xs:inline font-semibold">접기</span>
                        <FaChevronLeft className="ml-0 xs:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    ) : (
                      <>
                        <span className="hidden xs:inline font-semibold">펼치기</span>
                        <FaChevronRight className="ml-0 xs:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="mt-4 sm:mt-5 text-gray-300 leading-relaxed">
                <p className="text-sm sm:text-base">{summary}</p>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          {expanded && (
            <div className="hidden md:block w-[2px] bg-gray-700 self-stretch mx-2">
              <div className={`h-full w-full ${getColorClass('bg')} opacity-20`}></div>
            </div>
          )}

          {/* 확장된 내용 */}
          {expanded && (
            <div className="md:w-[60%] overflow-y-auto md:max-h-[500px] max-h-[300px] transform origin-left animate-expandRight">
              <div className={`h-1.5 sm:h-2 ${getColorClass('bg')} sticky top-0 z-10`}></div>
              <div className="p-5 sm:p-8 text-white">
                <ul className="space-y-3 sm:space-y-5 list-none pl-0">
                  {bullets.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start mb-3 sm:mb-4 animate-slideDown opacity-0" style={{ animationDelay: `${0.3 + idx * 0.1}s`, animationFillMode: 'forwards' }}>
                      <div className={`p-1.5 sm:p-2 ${getColorClass('bg')} rounded-full mr-3 sm:mr-4 mt-0.5 shadow-[0_0_10px_rgba(0,0,0,0.15)] flex-shrink-0`}>
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm sm:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Introduction = () => {
  const cardData: CardProps[] = [
    {
      icon: <BsLightningChargeFill className="w-5 h-5 sm:w-7 sm:h-7 text-white" />,
      title: "문제 해결 능력",
      summary: "논리적 사고를 바탕으로 다양한 문제 상황에 효과적으로 대응합니다.",
      bullets: [
        "팀원 간 의견 충돌 시 경청과 합의점 도출 능력 보유",
        "개발 중 발생한 오류를 빠르게 디버깅하는 분석력",
        "협업의 중요성과 다각적 접근법을 통한 문제 해결"
      ],
      color: "purple"
    },
    {
      icon: <BsCompass className="w-5 h-5 sm:w-7 sm:h-7 text-white" />,
      title: "진로 결정 계기",
      summary: "IT 기술을 통해 실질적인 가치를 창출하고 사회에 기여하고자 개발자 진로를 선택했습니다.",
      bullets: [
        "소방공무원에서 IT 분야로 적성에 맞는 진로 전환",
        "기술을 통한 가치 창출과 사회 기여에 동기 부여",
        "지속적인 성장과 학습을 추구하는 개발자로 발전"
      ],
      color: "pink"
    },
    {
      icon: <BsBriefcaseFill className="w-5 h-5 sm:w-7 sm:h-7 text-white" />,
      title: "회사에서의 기여",
      summary: "문제 해결 능력과 협업을 통해 시스템 품질과 팀 시너지를 동시에 향상시킵니다.",
      bullets: [
        "잠재적 문제를 사전 예방하고 발생한 문제는 신속하게 해결",
        "팀원 간 의견 차이를 조율하며 합리적인 방향 제시",
        "기술적 문제에 대한 깊이 있는 분석과 실용적 해결책 도출"
      ],
      color: "red"
    }
  ];

  useEffect(() => {
    // 컴포넌트 마운트 시 스타일 추가
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    styleElement.setAttribute('data-animation-styles', 'true');
    document.head.appendChild(styleElement);

    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      const styleToRemove = document.querySelector('style[data-animation-styles]');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="relative py-16 sm:py-20 md:py-24 z-10 w-full px-4">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">INTRODUCTION</h2>
          <div className="h-1 sm:h-1.5 w-32 sm:w-44 md:w-56 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-2 sm:mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-4 sm:mt-6 md:mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">저의 역량과 경험, 가치관을 소개합니다</p>
        </div>

        <div className="flex flex-col items-center">
          {cardData.map((card, index) => (
            <ExpandableCard
              key={index}
              icon={card.icon}
              title={card.title}
              summary={card.summary}
              bullets={card.bullets}
              color={card.color}
            />
          ))}
        </div>
      </div>

      {/* 배경 효과들 */}
      <div className="absolute top-0 -left-4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
    </div>
  );
};

const animationStyles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s cubic-bezier(0.26, 0.86, 0.44, 0.985) forwards;
  }
  
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slideDown {
    animation: slideDown 0.4s cubic-bezier(0.26, 0.86, 0.44, 0.985) forwards;
  }
  
  @keyframes expandRight {
    from { max-width: 0; opacity: 0; }
    to { max-width: 650px; opacity: 1; }
  }
  .animate-expandRight {
    animation: expandRight 0.5s cubic-bezier(0.26, 0.86, 0.44, 0.985) forwards;
  }
  
  /* 스크롤바 스타일링 */
  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: rgba(31, 41, 55, 0.5);
    border-radius: 10px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: rgba(107, 114, 128, 0.5);
    border-radius: 10px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: rgba(156, 163, 175, 0.5);
  }
`;

export default Introduction;
