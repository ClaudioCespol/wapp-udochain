// [F16] frontend/src/pages/Dashboard.tsx — DL1111700
import { Link } from "react-router-dom";

export default function Dashboard() {
  const modules = [
    { title: "Validate", desc: "Upload files and verify authenticity.", link: "/validate" },
    { title: "Sign", desc: "Digitally sign your documents.", link: "/sign" },
    { title: "Vote", desc: "Create and manage blockchain votes.", link: "/vote" },
    { title: "Trace", desc: "Track document traceability.", link: "/trace" }
  ];

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {modules.map((m) => (
        <Link key={m.link} to={m.link} className="card hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2 text-udo-primary">{m.title}</h2>
          <p className="text-sm text-gray-600">{m.desc}</p>
        </Link>
      ))}
    </section>
  );
}
