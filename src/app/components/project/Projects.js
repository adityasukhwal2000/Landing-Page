"use client";

import "../../styles/projects.css";
import ProjectData from "./projectAPI";
import NavMenu from "./NavMenu";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const uniqueList = [
  "All",
  ...new Set(
    ProjectData.map((currElem) => {
      return currElem.category;
    })
  ),
];

const Projects = () => {
  const [projectData, setProjectData] = useState(ProjectData);

  const [projectList, setProjectList] = useState(uniqueList);

  const filterProject = (category) => {
    if (category === "All") {
      setProjectData(ProjectData);
      return;
    }

    const updatedList = ProjectData.filter((currElem) => {
      return currElem.category === category;
    });
    setProjectData(updatedList);
  };

  return (
    <section className="main-container section-projects">
      <div className="services-content project-content">
        <h2 className="sub-headings">My Projects</h2>
        <p className="para-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          labore molestias animi consequatur natus exercitationem, quas odit
          dolores! Asperiores debitis aliquam quibusdam!
        </p>
      </div>

      <NavMenu filterProject={filterProject} projectList={projectList} />
      <ProjectCard projectData={projectData} />
    </section>
  );
};

export default Projects;
