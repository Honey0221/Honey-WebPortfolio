import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const menuItems = [
    { name: "PROFILE", href: "#profile" },
    { name: "INTRODUCTION", href: "#intro" },
    { name: "CAREER", href: "#career" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <header className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="h-16 md:h-20 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-white">
            HONEY'S PORTFOLIO
          </div>

          <ul className="flex space-x-2 md:space-x-6">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  className={`py-2 px-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:text-white ${activeItem === item.name
                      ? 'text-white'
                      : 'text-gray-300 hover:bg-gray-800/50'
                    }`}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
