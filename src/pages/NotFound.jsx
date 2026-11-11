import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="wrap section min-h-[60svh]">
      <h1 className="display max-w-[12ch]">Nothing here.</h1>
      <p className="lead mt-8">The page you followed has moved or never existed.</p>
      <Link to="/" className="button mt-10">
        Back to the start
      </Link>
    </section>
  );
}
