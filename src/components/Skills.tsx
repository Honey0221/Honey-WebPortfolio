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
  SiSpring,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiReact,
  SiAmazonaws,
  SiFlutter,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const frontendSkills: Skill[] = [
  { name: "HTML5", icon: <SiHtml5 size={30} /> },
  { name: "CSS (Tailwind)", icon: <SiTailwindcss size={30} /> },
  { name: "JavaScript", icon: <SiJavascript size={30} /> }, 
  { name: "TypeScript", icon: <SiTypescript size={30} /> },
  { name: "jQuery", icon: <SiJquery size={30} /> },
  { name: "React", icon: <SiReact size={30} /> },
  { name: "Flutter", icon: <SiFlutter size={30} /> },
];

const backendSkills: Skill[] = [
  { name: "Java", icon: <DiJava size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={30} /> },
  { name: "Spring", icon: <SiSpring size={30} /> },
  { name: "Oracle", icon: <SiOracle size={30} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "AWS", icon: <SiAmazonaws size={40} /> },
  { name: "AJAX", icon: <SiJquery size={30} /> }, 
];

const tools: Skill[] = [
  { name: "Git", icon: <SiGit size={30} /> },
  { name: "GitHub", icon: <SiGithub size={30} /> },
  { name: "MyBatis", icon: <FaTools size={30} /> },
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">SKILL & TOOLS</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
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
        <h3 className="text-2xl font-semibold mb-4">Backend</h3>
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
        <h3 className="text-2xl font-semibold mb-4">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center">
              <div className="text-white">{tool.icon}</div>
              <span className="mt-2 text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
