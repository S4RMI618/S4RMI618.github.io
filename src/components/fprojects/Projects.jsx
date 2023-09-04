import React from "react";
import ProjectItem from "./ProjectItem";
import DigitalClockImg from "../../assets/images/DC.png";
import RickAndMortyImg from "../../assets/images/RaM.png";
import projects from "../../data/projects.js";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-center text-4xl font-bold text-indigo-800/90">
        Projects
      </h1>
      <p className="text-center py-8">
        This is the place where you can explore and view the projects I have
        completed. From web development, you'll find a diverse range of works
        that showcase my skills and passion for creating innovative solutions.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
      {projects.map((item, idx) => (
        <ProjectItem
          key = {idx}
          img = {item.img}
          title = {item.title}
          dev = {item.dev}
          hv = {item.hv}
          hc = {item.hc}
        />
      ))}
      </div>
    </div>
  );
};

export default Projects;
