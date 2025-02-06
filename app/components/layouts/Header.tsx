import { useState } from "react";
import { useKbdShortcut } from "~/hooks";
import { CommandTrigger } from "../ui";

export default function Header() {
  const [isCommandDialogOpen, setIsCommandDialogOpen] = useState(false);
  useKbdShortcut("k", setIsCommandDialogOpen);
  const commandTriggerProps = { isCommandDialogOpen, setIsCommandDialogOpen };

  return (
    <header className="flex h-14 items-center justify-center border-b">
      <CommandTrigger {...commandTriggerProps} />
    </header>
  );
}
