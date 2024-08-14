import "../../styles/service.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="main-container section-service">
      <div className="services-content">
        <h2 className="sub-headings">Services</h2>
        <p className="para-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          labore molestias animi consequatur natus exercitationem, quas odit
          dolores! Asperiores debitis aliquam quibusdam!
        </p>
      </div>

      <div className="grid grid-four-cols">
        <ServiceCard
          imgUrl={"/assets/icons/ui_ux_icon.png"}
          title={"UI/UX"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit veritatis incidunt?"
          }
        />

        <ServiceCard
          imgUrl={"/assets/icons/website_design_icon.png"}
          title={"Web Design"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit veritatis incidunt?"
          }
        />

        <ServiceCard
          imgUrl={"/assets/icons/app_design_icon.png"}
          title={"App Design"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit veritatis incidunt?"
          }
        />

        <ServiceCard
          imgUrl={"/assets/icons/graphic_design_icon.png"}
          title={"Graphic Design"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit veritatis incidunt?"
          }
        />
      </div>
    </section>
  );
};

export default Services;
