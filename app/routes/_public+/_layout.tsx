import { Outlet } from "@remix-run/react";
import { Logo } from "~/components/typography";

export default function PublicLayout() {
  return (
    <div className="bg-muted dark:bg-background flex min-h-dvh w-full flex-col px-4">
      <header>
        <div className="flex h-14 items-center sm:container">
          <Logo />
        </div>
      </header>
      <Outlet />
    </div>
  );
}
