import "../../styles/about.css";
import SkillsDetails from "./SkillsDetails";
import Image from "next/image";

const About = () => {
  return (
    <section className="main-container section-about ">
      <div className="grid grid-two-cols ">
        <div className="about-img-left ">
          <div className="about-img">
            <Image
              src="/assets/images/hero_img.png"
              alt="hero picture"
              width={300}
              height={350}
            />
          </div>
        </div>

        <div className="about-content">
          <div className="about-title-para">
            <h2 className="sub-headings">About Me</h2>
            <p className="para-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              pariatur consequuntur dolorum nisi unde laudantium ea soluta saepe
              iure, facilis nam, debitis non, dignissimos eveniet! Hic ab quae
              totam sunt?
            </p>
          </div>

          <div className="skills-details">
            <SkillsDetails myClass={"UX"} title={"UX"} />
            <SkillsDetails
              myClass={"website-design"}
              title={"Website Design"}
            />
            <SkillsDetails myClass={"app-design"} title={"App Design"} />
            <SkillsDetails
              myClass={"graphic-design"}
              title={"Graphic Design"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
