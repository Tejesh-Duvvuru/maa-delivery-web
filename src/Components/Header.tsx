import NavLink from "./NavLink";
import { Link } from "react-router";
const Header: React.FC = () => (
  <header className="bg-gradient-to-r from-green-900 to-green-600 text-white p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center shadow-xl sticky top-0 z-10">
    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 mb-3 sm:mb-0">
      <Link to="/">
        {" "}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white animate-pulse">
          MAA DELIVERY
        </h1>
      </Link>
    </div>
    <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
      <NavLink path="/service" text="Services" />
      <NavLink path="/Franchise" text="Franchise" />
      <NavLink path="/partners" text="Partners" />
      <NavLink path="/contact" text="Contact us" />
      <NavLink path="/about" text="About" />
      <NavLink path="/profile" text="Profile" />
    </div>
  </header>
);
export default Header;
