import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FloatingIcons from "./components/FloatingIcons";
import Introduction from "./components/Introduction";
import Career from "./components/Career";

function App() {
  return (
    <div
      id="scroll-container"
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth select-none"
    >
      <Header />
      <section
        id="profile"
        className="snap-start h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-indigo-900/30 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-[10%] w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-32 right-[15%] w-72 h-72 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/4 right-[20%] w-48 h-48 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <Profile />
      </section>
      <section
        id="intro"
        className="snap-start h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-[15%] w-64 h-64 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-32 left-[10%] w-72 h-72 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/3 left-[40%] w-56 h-56 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <Introduction />
      </section>
      <section
        id="career"
        className="snap-start h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <Career />
      </section>
      <section
        id="skills"
        className="snap-start h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 to-blue-950"
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="snap-start min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <Projects />
      </section>
      <FloatingIcons />
    </div>
  );
}

export default App;
