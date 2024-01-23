import { NavLink } from "react-router-dom";
import fc from "@/lib/helpers/classes";

const routeLinks = [
  {
    routeHref: "/",
    routeName: "Home",
  },
  {
    routeHref: "/video",
    routeName: "Video",
  },
  {
    routeHref: "/login",
    routeName: "Login",
  },
] as const;

export default function Navbar() {
  return (
    <div>
      {routeLinks.map((r) => (
        <NavLink
          className={fc(`
            inline-block mx-4 my-4
          `)}
          to={r.routeHref}
        >
          {r.routeName}
        </NavLink>
      ))}
    </div>
  );
}
