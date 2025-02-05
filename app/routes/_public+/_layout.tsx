import { Outlet } from "@remix-run/react";
import { Header, Footer } from "~/components/layouts";

export default function PublicLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
