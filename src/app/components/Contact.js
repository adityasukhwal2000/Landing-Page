import Link from "next/link";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="main-container section-contact">
      <div className="services-content contact-content">
        <h2 className="sub-headings">Lets Design Together</h2>
        <p className="para-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          labore molestias animi consequatur natus exercitationem, quas odit
          dolores! Asperiores debitis aliquam quibusdam!
        </p>
      </div>

      <div className="send-email">
        <div className="input-main">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="contact-btn">
          <Link href="/" className="myBtn">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
