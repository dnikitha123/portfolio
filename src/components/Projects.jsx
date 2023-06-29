/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/projects/123456.png",
      gLink: "https://github.com/dnikitha123/react-ts-usecontext-crud",
      about: 'The project '
    },
    {
      title: "Project 2",
      img: "/projects/12345.png",
      gLink: "https://github.com/dnikitha123/react-redux-ts-book-mgmt",
      about: ''
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/dnikitha123"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <p>
                  {project.about}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
