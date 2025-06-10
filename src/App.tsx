import React, { useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FloatingIcons from "./components/FloatingIcons";
import Introduction from "./components/Introduction";
import Career from "./components/Career";

function App() {
  // 모바일 환경에서 브라우저 높이 관련 이슈 처리
  useEffect(() => {
    // 실제 뷰포트 높이에 맞게 --vh 커스텀 속성 설정
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  // 모바일에서 스크롤 처리를 위한 터치 이벤트 핸들러
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const container = document.getElementById('scroll-container');
      if (container) {
        container.style.scrollSnapType = 'none';
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const container = document.getElementById('scroll-container');
      if (container) {
        container.style.scrollSnapType = 'y mandatory';
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      id="scroll-container"
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth select-none"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <Header />
      <section
        id="profile"
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-indigo-900/30 relative overflow-hidden py-20 sm:py-10 md:py-0"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-[10%] w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-32 right-[15%] w-56 sm:w-72 h-56 sm:h-72 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/4 right-[20%] w-36 sm:w-48 h-36 sm:h-48 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <Profile />
      </section>
      <section
        id="intro"
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 relative overflow-hidden py-20 sm:py-10 md:py-0"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-[15%] w-48 sm:w-64 h-48 sm:h-64 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-32 left-[10%] w-56 sm:w-72 h-56 sm:h-72 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/3 left-[40%] w-40 sm:w-56 h-40 sm:h-56 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <Introduction />
      </section>
      <section
        id="career"
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 py-20 sm:py-10 md:py-0"
      >
        <Career />
      </section>
      <section
        id="skills"
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 to-blue-950 py-20 sm:py-10 md:py-0"
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-20 sm:py-10 md:py-0"
      >
        <Projects />
      </section>
      <FloatingIcons />
    </div>
  );
}

export default App;
