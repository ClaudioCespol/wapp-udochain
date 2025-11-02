// [F15] frontend/src/pages/Home.tsx — DL1111700
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <img src="/assets/logo-udochain.png" alt="UDoChain" className="w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold mb-3 text-udo-primary">Welcome to UDoChain</h1>
      <p className="max-w-lg mb-6 text-gray-600">
        Validate, sign, trace and vote your documents securely with blockchain-level transparency.
      </p>
      <Link to="/dashboard" className="btn-primary">
        Go to Dashboard
      </Link>
    </section>
  );
}
