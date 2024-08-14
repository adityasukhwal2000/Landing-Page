import "../styles/footer.css";
import Nav_Options from "./Nav_Options";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer>
      <section className="main-container footer-top">
        <div className="left">
          <p className="logo">mu</p>
          <p className="logo-text">Mumair</p>
        </div>

        <div className="right">
          <Nav_Options />
        </div>
        <SocialIcons />
      </section>

      <section className="right-reserved">
        <div className="main-container">
          © 2023 <span>Mumair</span> All Rights Reserved , Inc.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
