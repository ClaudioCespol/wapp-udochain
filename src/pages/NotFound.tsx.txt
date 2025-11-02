// [F23] frontend/src/pages/NotFound.tsx — DL1111700
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-4xl font-bold text-udo-primary mb-2">404</h1>
      <p className="text-gray-600 mb-4">Page not found.</p>
      <Link to="/" className="btn-primary">Back Home</Link>
    </section>
  );
}
