import { useState } from "react";
import { useKbdShortcut } from "~/hooks";
import { Logo } from "../typography";
import { CommandTrigger } from "../ui";
import ThemeSwitch from "../ui/ThemeSwitch";

export default function Header() {
  const [isCommandDialogOpen, setIsCommandDialogOpen] = useState(false);
  useKbdShortcut("k", setIsCommandDialogOpen);
  const commandTriggerProps = { isCommandDialogOpen, setIsCommandDialogOpen };

  return (
    <header className="flex h-14 items-center justify-center border-b">
      <Logo />
      <CommandTrigger {...commandTriggerProps} />
      <nav>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
