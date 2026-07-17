import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import "./App.css";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education/>
      <Contact/>
      
    </>
  );
}

export default App;