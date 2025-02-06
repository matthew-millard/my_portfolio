import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <Link to="/" className="group inline-flex leading-none" prefetch="intent">
      <span className="font-light transition-transform duration-300 ease-in-out group-hover:-skew-x-12 group-hover:text-primary">
        Not
      </span>
      <span className="font-semibold transition-transform duration-300 ease-in-out group-hover:-skew-x-12 group-hover:text-primary">
        ably
      </span>
    </Link>
  );
}
