import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { useKbdShortcut } from "~/hooks";
import { classNames } from "~/utils";
import { LogoutForm } from "../forms";
import { Logo } from "../typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  CommandTrigger,
  HamburgerMenuToggle,
} from "../ui";
import Drawer from "./Drawer";

export const navLinks = [
  {
    title: "My account",
    href: "/my-account",
  },
];

export default function Header() {
  const [isCommandDialogOpen, setIsCommandDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useKbdShortcut("k", setIsCommandDialogOpen);
  const commandTriggerProps = { isCommandDialogOpen, setIsCommandDialogOpen };
  const drawerProps = { isDrawerOpen, setIsDrawerOpen };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <div className="mr-12">
            <Logo />
          </div>
          <nav className="flex items-center gap-4 text-sm xl:gap-6">
            {navLinks.map((link) => (
              <NavLink
                to={link.href}
                key={link.title}
                prefetch="intent"
                className={({ isActive }) =>
                  classNames(
                    "text-foreground transition-colors hover:text-foreground/80",
                    isActive
                      ? "underline decoration-primary underline-offset-4 hover:decoration-primary/80"
                      : "",
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="-ml-4 mr-4 md:hidden">
          <HamburgerMenuToggle {...drawerProps} />
          <Drawer {...drawerProps} />
        </div>
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <CommandTrigger {...commandTriggerProps} />
          <nav className="hidden items-center gap-x-2 md:flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
            <LogoutForm />
          </nav>
        </div>
      </div>
    </header>
  );
}
