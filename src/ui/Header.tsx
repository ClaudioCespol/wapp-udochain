// [F13] frontend/src/ui/Header.tsx — DL1111700
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const nav: [string, string][] = [
    ["Home", "/"],
    ["Dashboard", "/dashboard"],
    ["Validate", "/validate"],
    ["Sign", "/sign"],
    ["Vote", "/vote"],
    ["Trace", "/trace"]
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow-sm">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <img src="/assets/logo-udochain.png" alt="UDoChain Logo" className="h-8" />
        <ul className="flex gap-6 text-sm font-medium">
          {nav.map(([label, to]) => (
            <li key={to}>
              <Link
                to={to}
                className={`${
                  pathname === to ? "text-udo-primary border-b-2 border-udo-primary" : "text-gray-600 hover:text-udo-primary"
                } pb-1 transition`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
