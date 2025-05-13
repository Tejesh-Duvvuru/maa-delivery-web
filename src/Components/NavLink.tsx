const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <a
    href={href}
    className="relative text-white hover:text-yellow-200 text-sm sm:text-base font-medium transition-all duration-300 group"
  >
    {text}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default NavLink;
