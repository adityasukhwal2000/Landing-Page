"use client";

import { useState } from "react";

const NavMenu = ({ filterProject, projectList }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <nav className="projects-options">
      <ul className="projects-options-btn">
        {projectList.map((currElem, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                filterProject(currElem);
                handleClick(index);
              }}
              className={activeIndex === index ? "active" : ""}
            >
              {currElem}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
