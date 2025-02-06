import { NavLink } from "@remix-run/react";
import { classNames } from "~/utils";

const links = [
  {
    title: "My account",
    href: "/my-account",
  },
];

export default function NavigationMenu() {
  return (
    <nav className="flex items-center gap-4 text-sm xl:gap-6">
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.title}
          prefetch="intent"
          className={({ isActive }) =>
            classNames(
              "hover:text-foreground/80 text-foreground transition-colors",
              isActive
                ? "hover:decoration-primary/80 underline decoration-primary underline-offset-4"
                : "",
            )
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}
