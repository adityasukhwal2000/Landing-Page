import Link from "next/link";

const Nav_Options = () => {
  return (
    <ul className="nav-options">
      <li>
        <Link href="#">Home</Link>
      </li>
      <li>
        <Link href="#">About Me</Link>
      </li>
      <li>
        <Link href="#">Services</Link>
      </li>
      <li>
        <Link href="#">Projects</Link>
      </li>
      <li>
        <Link href="#">Testimonials</Link>
      </li>
      <li>
        <Link href="#">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav_Options;
