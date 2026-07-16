import React from "react";
import "./projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Job Portal",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
      description:
        "A responsive job portal where users can search jobs, apply online, and recruiters can post job openings.",
      tech: ["React", "Node.js", "MongoDB", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Website",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
      description:
        "An online shopping website with product listings, shopping cart, user authentication, and secure checkout.",
      tech: ["React", "JavaScript", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Notes Website",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800",
      description:
        "A note-taking application where users can create, edit, delete, and organize notes with a clean interface.",
      tech: ["React", "Firebase", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h1>My Projects</h1>

        <p>
          Here are some of my featured projects that showcase my frontend and
          full-stack development skills.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a href={project.github}>
                    <FaGithub /> GitHub
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;