import Link from "next/link";
import "../styles/header.css";
import Nav_Options from "./Nav_Options";

const Header = () => {
  return (
    <header>
      <nav className="main-container section-navbar">
        <div className="left">
          <p className="logo">mu</p>
          <p className="logo-text">Mumair</p>
        </div>

        <div className="right">
          <Nav_Options />
          <div className="cv-download">
            <Link className="download-cv myBtn" href="/" download="#">
              Download CV
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
