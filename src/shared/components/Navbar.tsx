import { NavLink } from "react-router-dom";
import fc from "@/lib/helpers/classes";
import { Button } from "@/shared/components/ui/button";

const routeLinks = [
  {
    routeHref: "/",
    routeName: "Home",
  },
  {
    routeHref: "/video",
    routeName: "Video",
  },
  // {
  //   routeHref: "/login",
  //   routeName: "Login",
  // },
] as const;

export default function Navbar() {
  return (
    <nav className="bg-zinc-800">
      {routeLinks.map((r) => (
        <Button
          variant="link"
          asChild
        >
          <NavLink
            className={fc(`
            inline-block mx-4 my-2
            text-white 
          `)}
            to={r.routeHref}
          >
            {r.routeName}
          </NavLink>
        </Button>
      ))}
    </nav>
  );
}
