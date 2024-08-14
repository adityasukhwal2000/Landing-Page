import "../styles/hero.css";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="main-container section-hero">
      <div className="grid grid-two-cols">
        <div className="hero-left-content">
          <div className="left-content1">
            <p className="small-headings">Hi I am</p>
            <p className="title-headings hero-title">Muhammad Umair</p>
            <h1 className="hero-heading">
              <span>UI & UX</span> <span>Designer</span>
            </h1>
            <p className="para-text hero-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              iste natus voluptate nobis aliquid facilis explicabo sunt tempore
              commodi eligendi. Aliquam, dolorum!
            </p>
          </div>
          <div className="left-btn">
            <Link className=" btn-text myBtn" href="/">
              Hire me
            </Link>
          </div>
        </div>

        <div className="hero-right-image">
          <div className="hero-img">
            <Image
              src="/assets/images/hero_img.png"
              alt="hero picture"
              width={500}
              height={500}
            />
          </div>
          
          <SocialIcons />
         
        </div>
      </div>
    </main>
  );
};

export default Hero;
