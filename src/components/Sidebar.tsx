import React from 'react';

interface SidebarProps {
  addToSidebarItemsRef: (el: HTMLLIElement | null, index: number) => void;
  scrollToSection: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ addToSidebarItemsRef, scrollToSection }) => {
  const sectionNames = ['소개', '기술', '교육', '프로젝트', '내 정보'];

  return (
    <nav className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
      <ul className="space-y-6">
        {sectionNames.map((label, index) => (
          <li
            key={index}
            ref={(el) => addToSidebarItemsRef(el, index)}
            onClick={() => scrollToSection(index)}
            className="flex items-center cursor-pointer group relative transition-transform duration-300 hover:-translate-x-1"
          >
            <div className="w-3 h-3 bg-gray-500 rounded-full transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-125"></div>
            <span className="absolute right-6 bg-gray-800 text-white px-3 py-1 rounded-md opacity-0 transform translate-x-2 transition-all duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-0">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar; 