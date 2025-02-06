import { useState } from "react";
import { useKbdShortcut } from "~/hooks";
import { Logo } from "../typography";
import { CommandTrigger, HamburgerMenuToggle } from "../ui";
import ThemeSwitch from "../ui/ThemeSwitch";

export default function Header() {
  const [isCommandDialogOpen, setIsCommandDialogOpen] = useState(false);
  useKbdShortcut("k", setIsCommandDialogOpen);
  const commandTriggerProps = { isCommandDialogOpen, setIsCommandDialogOpen };

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div>
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Logo />
            <nav>{/* add navigation links here */}</nav>
          </div>
          <div className="-ml-4 mr-4 md:hidden">
            <HamburgerMenuToggle />
          </div>
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <CommandTrigger {...commandTriggerProps} />
            <nav className="flex items-center gap-0.5">
              <ThemeSwitch />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
