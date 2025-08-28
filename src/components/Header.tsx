import React, { useState, useEffect, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const menuItems = [
    { name: "PROFILE", href: "#profile" },
    { name: "INTRODUCTION", href: "#intro" },
    { name: "CAREER", href: "#career" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
  ];

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (!scrollContainer) {
      return;
    }
    
    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      
      setScrolled(currentScrollY > 50);

      // 스크롤 방향에 따른 헤더 표시/숨김 로직
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // 현재 스크롤 위치에 따라 활성 메뉴 설정
      const sections = menuItems.map(item => document.querySelector(item.href));
      const current = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current !== -1) {
        setActiveItem(menuItems[current].name);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 모바일 메뉴 상태 변경 시 헤더 표시
  useEffect(() => {
    if (mobileMenuOpen) {
      setIsVisible(true);
    }
  }, [mobileMenuOpen]);

  // 메뉴 클릭 시 스크롤 이동 처리
  const handleMenuClick = (href: string) => {
    const scrollContainer = document.getElementById('scroll-container');
    const targetElement = document.querySelector(href) as HTMLElement;
    
    if (scrollContainer && targetElement) {
      const targetOffset = targetElement.offsetTop;
      scrollContainer.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  };

  // 모바일 메뉴 항목 클릭 시 메뉴 닫기
  const handleMobileMenuClick = (href: string) => {
    handleMenuClick(href);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`font-SUIT-Bold fixed left-0 w-full transition-all duration-300 ease-in-out z-50 ${
        scrolled || mobileMenuOpen ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{
        top: isVisible ? '0' : '-100px',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <nav className="h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              JI HEON PORTFOLIO
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full shadow-lg">
                Beta
              </div>
            </div>
          </div>

          {/* 모바일 메뉴 토글 버튼 */}
          <button
            className="block lg:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {mobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>

          {/* 데스크탑 메뉴 */}
          <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <button
                  onClick={() => handleMenuClick(item.href)}
                  className={`py-2 px-3 rounded-lg text-base font-medium transition-all duration-300 hover:text-white ${activeItem === item.name
                    ? 'text-white'
                    : 'text-gray-300 hover:bg-gray-800/50'
                    }`}
                >
                {item.name}
                  {activeItem === item.name && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></span>
                  )}
                </button>
            </li>
          ))}
        </ul>
      </nav>

        {/* 모바일 메뉴 */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? 'max-h-[400px] opacity-100 py-4 pb-6'
            : 'max-h-0 opacity-0 py-0'
            }`}
        >
          <ul className="flex flex-col space-y-4 pb-4">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <button
                  onClick={() => handleMobileMenuClick(item.href)}
                  className={`block w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${activeItem === item.name
                    ? 'bg-gray-800/80 text-white'
                    : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
                    }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
