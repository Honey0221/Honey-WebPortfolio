import { JSX } from "react";
import { DiJava } from "react-icons/di";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiTypescript,
  SiJquery,
  SiMysql,
  SiSpringboot,
  SiGit,
  SiReact,
  SiAmazonaws,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiRedis,
  SiRedux,
  SiDocker,
  SiDjango,
  SiCss3,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const frontendSkills: Skill[] = [
  { name: "HTML", icon: <SiHtml5 size={40} /> },
  { name: "CSS", icon: <SiCss3 size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> }, 
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "jQuery", icon: <SiJquery size={40} /> },
  { name: "Ajax", icon: <SiJquery size={40} /> }, 
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Redux", icon: <SiRedux size={40} /> },
];

const backendSkills: Skill[] = [
  { name: "Java", icon: <DiJava size={40} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "Django", icon: <SiDjango size={40} /> },
  { name: "FastAPI", icon: <FaTools size={40} /> },
  { name: "MyBatis", icon: <FaTools size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Redis", icon: <SiRedis size={40} /> },
];

const tools: Skill[] = [
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "AWS", icon: <SiAmazonaws size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
];

const Skills = () => {
  return (
    <div className="relative py-16 sm:py-20 md:py-24 z-10 w-full px-4">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">SKILLS</h2>
          <div className="h-1 sm:h-1.5 w-32 sm:w-44 md:w-56 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mt-2 sm:mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-4 sm:mt-6 md:mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">개발에 사용하는 기술 스택과 도구들을 소개합니다</p>
        </div>
        <div className="mb-16 sm:mb-20">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} className="group flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 w-full max-w-[140px] sm:max-w-[160px]" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mb-3">{skill.icon}</div>
                  <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300 text-center font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className="group flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 w-full max-w-[140px] sm:max-w-[160px]" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-green-400 group-hover:text-green-300 transition-colors duration-300 mb-3">{skill.icon}</div>
                  <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300 text-center font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
              {tools.map((tool, index) => (
                <div key={tool.name} className="group flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 w-full max-w-[140px] sm:max-w-[160px]" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-red-400 group-hover:text-red-300 transition-colors duration-300 mb-3">{tool.icon}</div>
                  <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300 text-center font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 배경 효과들 */}
      <div className="absolute top-0 -left-4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Skills;
