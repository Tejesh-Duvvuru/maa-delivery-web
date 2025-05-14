import { Link } from "react-router";

interface NavLinkProps {
  path: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ path, text }) => (
  <Link
    to={path}
    className="relative text-white hover:text-yellow-200 text-sm sm:text-base font-medium transition-all duration-300 group"
  >
    {text}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default NavLink;
