import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./Button";

export default function HamburgerMenuToggle() {
  return (
    <Button variant="outline" size="icon">
      <HamburgerMenuIcon />
      <span className="sr-only">Toggle Menu</span>
    </Button>
  );
}
