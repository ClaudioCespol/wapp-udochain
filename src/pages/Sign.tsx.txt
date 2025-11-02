// [F18] frontend/src/pages/Sign.tsx — DL1111700
import { useState } from "react";
import useApi from "../hooks/useApi";

export default function Sign() {
  const { req } = useApi();
  const [hash, setHash] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleSign = async () => {
    if (!hash) return alert("Enter the file hash to sign.");
    const res = await req("/wallet/w1", "POST", { finalHash: hash });
    setResult(res);
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-udo-primary">Sign Document</h1>
      <div className="card flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter final hash"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          className="border rounded-lg p-2"
        />
        <button onClick={handleSign} className="btn-primary">Sign on Wallet1</button>
      </div>
      {result && (
        <div className="card">
          <h2 className="text-lg font-bold mb-2 text-udo-primary">Result</h2>
          <pre className="text-sm text-gray-600">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}
