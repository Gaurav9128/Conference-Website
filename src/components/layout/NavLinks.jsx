import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/AboutPage",
  },
  {
    title: "Call for Special Session",
    href: "/special-session",
  },
  {
    title: "Conference Track",
    href: "/conference-Tracks",
  },
  {
    title: "Partners",
    href: "/PartnersPublication",
  },
  {
    title: "Committee",
    href: "/committee",
  },
  {
    title: "Speakers",
    href: "/keynote",
  },
  {
    title: "Sponsorship",
    href: "/sponsorship",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-10">
      {links.map((item) => (
        <li key={item.title}>
          {item.href.startsWith("/") ? (
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `text-[16px] font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "text-[#24439B]"
                    : "text-slate-700 hover:text-[#24439B]"
                }`
              }
            >
              {item.title}
            </NavLink>
          ) : (
            <a
              href={item.href}
              className="text-[16px] font-medium text-slate-700 hover:text-[#24439B] transition-all duration-300 whitespace-nowrap"
            >
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;