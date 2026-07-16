import React from "react";
import "./skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiC,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React JS", icon: <FaReact />, color: "#61DAFB" },
    { name: "Java", icon: <FaJava />, color: "#f89820" },
    { name: "Node JS", icon: <FaNodeJs />, color: "#3C873A" },
    { name: "Figma", icon: <FaFigma />, color: "#A259FF" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "C", icon: <SiC />, color: "#00599C" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h1>My Skills</h1>

        <p>
          Technologies and tools that I use to design and build modern,
          responsive web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;