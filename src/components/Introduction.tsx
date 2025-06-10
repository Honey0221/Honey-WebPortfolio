import React, { useState } from "react";
import { BsLightningChargeFill, BsCompass, BsBriefcaseFill, BsChevronRight, BsChevronLeft } from "react-icons/bs";

// 애니메이션 스타일을 위한 스타일 요소 
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
    to { max-width: 66.666667%; opacity: 1; }
  }
  .animate-expandRight {
    animation: expandRight 0.5s cubic-bezier(0.26, 0.86, 0.44, 0.985) forwards;
  }
`;

// 스타일 요소 생성 및 추가 함수
const addStyles = () => {
  if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);
  }
};

// 타입 정의
interface CardProps {
  icon: React.ReactNode;
  title: string;
  summary: string;
  bullets: string[];
  gradientFrom: string;
  gradientTo: string;
}

// 확장 가능한 카드 컴포넌트
const ExpandableCard: React.FC<CardProps> = ({ icon, title, summary, bullets, gradientFrom, gradientTo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`w-full transition-all duration-700 ease-in-out mb-8`}>
      <div className="relative overflow-hidden">
        {/* 통합 카드 컨테이너 */}
        <div className={`flex flex-col md:flex-row rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-out bg-gradient-to-br from-gray-800 to-gray-900`}>
          {/* 메인 카드 */}
          <div className={`transition-all duration-500 ease-out z-10 ${expanded ? 'md:w-1/3' : 'w-full'}`}>
            <div className={`h-2 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}></div>
            <div className="p-6 text-white">
              <div className="flex items-center">
                <div className={`p-2 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-lg shadow-lg mr-4 transition-transform duration-300 ${expanded ? 'scale-110' : ''}`}>
                  {icon}
                </div>
                <h5 className="text-xl font-bold">{title}</h5>
                {bullets.length > 0 && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className={`ml-auto flex items-center text-sm font-medium text-${gradientFrom} hover:underline focus:outline-none transition-all duration-300 hover:scale-105`}
                  >
                    {expanded ? (
                      <>
                        <span>접기</span>
                        <BsChevronLeft className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>펼치기</span>
                        <BsChevronRight className="ml-1" />
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="mt-4 text-gray-300 leading-relaxed">
                <p>{summary}</p>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          {expanded && (
            <div className="hidden md:block w-px bg-gray-700 self-stretch mx-0.5">
              <div className={`h-full w-full bg-gradient-to-b from-${gradientFrom} to-${gradientTo} opacity-20`}></div>
            </div>
          )}

          {/* 확장된 내용 */}
          {expanded && (
            <div className="md:w-2/3 overflow-hidden transform origin-left animate-expandRight">
              <div className={`h-2 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}></div>
              <div className="p-8 text-white">
                <h5 className="text-lg font-medium mb-5 animate-slideDown opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>주요 역량</h5>
                <ul className="space-y-4 list-none pl-0">
                  {bullets.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start mb-3 animate-slideDown opacity-0" style={{ animationDelay: `${0.3 + idx * 0.1}s`, animationFillMode: 'forwards' }}>
                      <div className={`p-1.5 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-full mr-3 mt-0.5`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>{point}</span>
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
  // 컴포넌트 마운트 시 스타일 추가
  React.useEffect(() => {
    addStyles();
    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      if (typeof document !== 'undefined') {
        const styleElement = document.querySelector('style[data-animation-styles]');
        if (styleElement) {
          styleElement.remove();
        }
      }
    };
  }, []);

  // 카드 내용 데이터
  const cardData: CardProps[] = [
    {
      icon: <BsLightningChargeFill className="w-6 h-6 text-white" />,
      title: "문제 해결 능력",
      summary: "논리적 사고를 바탕으로 다양한 문제 상황에 효과적으로 대응합니다.",
      bullets: [
        "팀원 간 의견 충돌 시 경청과 합의점 도출 능력 보유",
        "개발 중 발생한 오류를 빠르게 디버깅하는 분석력",
        "협업의 중요성과 다각적 접근법을 통한 문제 해결"
      ],
      gradientFrom: "purple-400",
      gradientTo: "pink-500"
    },
    {
      icon: <BsCompass className="w-6 h-6 text-white" />,
      title: "진로 결정 계기",
      summary: "IT 기술을 통해 실질적인 가치를 창출하고 사회에 기여하고자 개발자 진로를 선택했습니다.",
      bullets: [
        "소방공무원에서 IT 분야로 적성에 맞는 진로 전환",
        "기술을 통한 가치 창출과 사회 기여에 동기 부여",
        "지속적인 성장과 학습을 추구하는 개발자로 발전"
      ],
      gradientFrom: "pink-500",
      gradientTo: "red-500"
    },
    {
      icon: <BsBriefcaseFill className="w-6 h-6 text-white" />,
      title: "회사에서의 기여",
      summary: "문제 해결 능력과 협업을 통해 시스템 품질과 팀 시너지를 동시에 향상시킵니다.",
      bullets: [
        "잠재적 문제를 사전 예방하고 발생한 문제는 신속하게 해결",
        "팀원 간 의견 차이를 조율하며 합리적인 방향 제시",
        "기술적 문제에 대한 깊이 있는 분석과 실용적 해결책 도출"
      ],
      gradientFrom: "red-500",
      gradientTo: "purple-400"
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">INTRODUCTION</h2>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-2"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">저의 역량과 경험, 가치관을 소개합니다</p>
        </div>

        <div className="flex flex-col">
          {cardData.map((card, index) => (
            <ExpandableCard
              key={index}
              icon={card.icon}
              title={card.title}
              summary={card.summary}
              bullets={card.bullets}
              gradientFrom={card.gradientFrom}
              gradientTo={card.gradientTo}
            />
          ))}
        </div>
      </div>

      {/* 배경 요소 */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Introduction;
