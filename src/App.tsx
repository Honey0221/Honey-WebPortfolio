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

  // 애니메이션 및 글로벌 스타일 추가
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-app-styles', 'true');
    styleElement.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradientShift 15s ease infinite;
      }
      
      .section-transition {
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .glassmorphism {
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
      }
      
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(styleElement);

    // 관찰자를 통한 섹션 애니메이션 처리
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('translate-y-0');
          entry.target.classList.remove('translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => {
      const styleToRemove = document.querySelector('style[data-app-styles]');
      if (styleToRemove) {
        styleToRemove.remove();
      }
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      id="scroll-container"
      className="h-screen overflow-y-scroll scroll-smooth select-none scrollbar-hide"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <Header />
      <section
        id="profile"
        className="min-h-screen flex items-center justify-center animate-gradient bg-gradient-to-br from-gray-900 via-blue-900/20 to-indigo-900/30 relative overflow-hidden py-20 sm:py-10 md:py-0"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-32 right-[15%] w-56 sm:w-80 h-56 sm:h-80 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/4 right-[20%] w-36 sm:w-56 h-36 sm:h-56 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(30, 58, 138, 0.05)" fillOpacity="1" d="M0,288L48,261.3C96,235,192,181,288,176C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="section-content z-10 w-full">
          <Profile />
        </div>
      </section>
      <section
        id="intro"
        className="min-h-screen flex items-center justify-center animate-gradient bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 relative overflow-hidden py-20 sm:py-10 md:py-0"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute top-20 right-[15%] w-48 sm:w-72 h-48 sm:h-72 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-32 left-[10%] w-56 sm:w-80 h-56 sm:h-80 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/3 left-[40%] w-40 sm:w-56 h-40 sm:h-56 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(76, 29, 149, 0.05)" fillOpacity="1" d="M0,64L48,74.7C96,85,192,107,288,144C384,181,480,235,576,245.3C672,256,768,224,864,197.3C960,171,1056,149,1152,165.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="section-content z-10 w-full">
          <Introduction />
        </div>
      </section>
      <section
        id="career"
        className="min-h-screen flex items-center justify-center animate-gradient bg-gradient-to-br from-gray-900 via-indigo-900/20 to-blue-900/20 relative overflow-hidden py-20 sm:py-10 md:py-0"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute top-10 left-[20%] w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-[10%] w-60 sm:w-80 h-60 sm:h-80 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(30, 64, 175, 0.05)" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,192C672,203,768,181,864,154.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="section-content z-10 w-full">
          <Career />
        </div>
      </section>
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center animate-gradient bg-gradient-to-br from-indigo-950 via-blue-950 to-cyan-950/70 relative overflow-hidden py-20 sm:py-10 md:py-0"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute top-10 right-[15%] w-56 sm:w-72 h-56 sm:h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-40 left-[10%] w-64 sm:w-80 h-64 sm:h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(6, 182, 212, 0.05)" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,96C672,96,768,160,864,165.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="section-content z-10 w-full">
          <Skills />
        </div>
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center animate-gradient bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden py-20 sm:py-10 md:py-0"
      >
        <div className="section-content z-10 w-full">
          <Projects />
        </div>
      </section>
      <FloatingIcons />
    </div>
  );
}

export default App;
