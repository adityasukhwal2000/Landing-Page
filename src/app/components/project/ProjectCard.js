import Link from "next/link";

const ProjectCard = ({ projectData }) => {
  return (
    <section className="project-filter grid grid-three-cols">
      {projectData.map((currElem) => {
        const { id, name, description, image } = currElem;

        return (
            <div className="projects" key={id} >
              <div>
                <Link href="/"><img
                  src={image}
                  alt={`This is ${name} pic`}
                  className="card-media"
                /></Link>
              </div>
              <div>
                <p className="project-subHeading">{name}</p>
                <p className="small-headings">{description}</p>
              </div>
            </div>
        );
      })}
    </section>
  );
};

export default ProjectCard;
