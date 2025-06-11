import React, { JSX } from "react";
import { DiJava } from "react-icons/di";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiTypescript,
  SiJquery,
  SiOracle,
  SiMysql,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiReact,
  SiAmazonaws,
  SiVite,
  SiIntellijidea,
  SiEclipseide,
  SiFlutter,
  SiAndroidstudio,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const frontendSkills: Skill[] = [
  { name: "HTML", icon: <SiHtml5 size={40} /> },
  { name: "CSS (Tailwind)", icon: <SiTailwindcss size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> }, 
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "jQuery", icon: <SiJquery size={40} /> },
  { name: "Ajax", icon: <SiJquery size={40} /> }, 
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Flutter", icon: <SiFlutter size={40} /> },
];

const backendSkills: Skill[] = [
  { name: "Java", icon: <DiJava size={40} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
  { name: "Oracle", icon: <SiOracle size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "MyBatis", icon: <FaTools size={40} /> },
];

const tools: Skill[] = [
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "GitHub", icon: <SiGithub size={40} /> },
  { name: "AWS", icon: <SiAmazonaws size={40} /> },
  { name: "Vite", icon: <SiVite size={40} /> },
  { name: "IntelliJ", icon: <SiIntellijidea size={40} /> },
  { name: "VSCode", icon: <SiVisualstudiocode size={40} /> },
  { name: "Eclipse", icon: <SiEclipseide size={40} /> },
  { name: "Android Studio", icon: <SiAndroidstudio size={40} /> },
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-16 text-center">SKILL & TOOLS</h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {frontendSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="text-blue-400">{skill.icon}</div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Backend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {backendSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="text-green-400">{skill.icon}</div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center">
              <div className="text-red-400">{tool.icon}</div>
              <span className="mt-2 text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
