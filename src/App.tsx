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
        className="snap-start h-screen flex items-center justify-center bg-gray-500"
      >
        <Profile />
      </section>
      <section
        id="introduction"
        className="snap-start h-screen flex items-center justify-center bg-gray-200"
      >
        <Introduction />
      </section>
      <section
        id="career"
        className="snap-start h-screen flex items-center justify-center bg-gray-800"
      >
        <Career />
      </section>
      <section
        id="skills"
        className="snap-start h-screen flex items-center justify-center bg-gray-700"
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="snap-start min-h-screen flex items-center justify-center bg-[#353535]"
      >
        <Projects />
      </section>
      <FloatingIcons />
    </div>
  );
}

export default App;
