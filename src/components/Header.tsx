import React from "react";

const Header = () => {
  const menuItems = [
    { name: "PROFILE", href: "#profile" },
    { name: "INTRODUCTIONS", href: "#introductions" },
    { name: "CAREER", href: "#career" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur z-10 h-16">
      <nav className="max-w-4xl mx-auto px-4 h-full flex justify-between items-center">
        <div className="text-2xl font-bold">KIM JI HEON PORTFOLIO</div>
        <ul className="flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-white hover:text-gray-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
