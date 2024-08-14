import Image from "next/image";

const ServiceCard = ({ title, imgUrl, content }) => {
  return (
    <div className="service-cards">
      <div className="card-images">
        <Image src={imgUrl} alt="" width={100} height={100} />
      </div>

      <h2 className="title-headings service-subHeadings">{title}</h2>

      <p className="para-text">{content}</p>
    </div>
  );
};

export default ServiceCard;
