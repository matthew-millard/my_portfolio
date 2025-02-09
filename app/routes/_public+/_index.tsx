import { LoaderFunctionArgs } from "@remix-run/node";
import { requireAnonymous } from "~/.server/auth";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAnonymous(request);
  return null;
}

export default function IndexRoute() {
  return <main>Index route</main>;
}
