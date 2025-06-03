import React from "react";

const Introduction = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 text-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-center">INTRODUCTION</h2>

      <div className="w-full text-base mb-5 bg-[#5555] p-5 rounded-2xl">
        <h5 className="text-2xl font-bold pb-6">개발자의 핵심 가치: 문제 해결 능력</h5>
        <p>
          다양한 문제를 논리적으로 해결하며 성장해 왔습니다. 팀원 간 의견 충돌 시 상대 의견을 경청하고 합의점을 도출해 문제를 해결했습니다. 개발 중 발생한 오류를 빠르게 디버깅해 해결하며 협업의 중요성과 다각적 접근법을 배웠습니다.
        </p>
      </div>

      <div className="w-full text-base mb-5 bg-[#5555] p-5 rounded-2xl">
        <h5 className="text-2xl font-bold pb-6">진로 결정 계기: 사회에 대한 기여와 성장</h5>
        <p>
          대학 전공을 살려 소방공무원을 준비했으나 적성을 느끼지 못해 IT와 프로그래밍에 눈을 돌렸습니다. 기술을 통해 사람에게 실제 가치를 제공할 수 있다는 점에서 동기를 얻었습니다. 개발자로서 사회에 기여하고 성장하기 위해 진로를 전환했습니다.
        </p>
      </div>

      <div className="w-full text-base mb-5 bg-[#5555] p-5 rounded-2xl">
        <h5 className="text-2xl font-bold pb-6">회사에서의 기여: 지속적인 성장과 협업</h5>
        <p>
          문제 해결 능력을 바탕으로 발생 가능한 문제를 사전에 예방하거나 신속히 분석해 해결하겠습니다. 동료 간 의견 차이를 조율하며 합리적인 방향을 제시하고, 기술적 문제는 깊이 있는 분석으로 실용적 해결책을 제시하겠습니다. 이를 통해 시스템의 품질과 팀 협업을 동시에 높이겠습니다.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
