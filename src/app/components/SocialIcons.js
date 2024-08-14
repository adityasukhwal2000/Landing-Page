import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <div className="icons">
        <Link href="#">
          <FaFacebook className="icon-reacts" />
        </Link>
      </div>
      <div className="icons">
        <Link href="#">
          <FaTwitter className="icon-reacts" />
        </Link>
      </div>

      <div className="icons">
        <Link href="#">
          <FaInstagram className="icon-reacts" />
        </Link>
      </div>

      <div className="icons">
        <Link href="#">
          <FaLinkedin className="icon-reacts" />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;
