import { LoaderFunctionArgs } from "@remix-run/node";
import { requireAnonymous } from "~/.server/auth";
import { SignUpForm } from "~/components/forms";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAnonymous(request);
  return null;
}

export default function SignupRoute() {
  return (
    <main className="flex flex-grow justify-center py-12 sm:py-36">
      <SignUpForm />
    </main>
  );
}
