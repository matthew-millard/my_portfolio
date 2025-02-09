import { ExitIcon } from "@radix-ui/react-icons";
import { Form } from "@remix-run/react";
import { Button } from "../ui";

export default function LogoutForm() {
  return (
    <Form method="POST" action="/logout">
      <Button variant="ghost" size="sm">
        <ExitIcon />
        Log out
      </Button>
    </Form>
  );
}
