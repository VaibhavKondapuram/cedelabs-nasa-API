// src/App.js

import React from "react";
import AboutMe from /components/AboutMe
import Contact from /components/Contact
import myProjects from /components/myProjects
import Navbar from /components/Navbar
import Skills from /components/Skills
import Testimonials from /components/Testimonials

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}