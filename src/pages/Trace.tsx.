// [F20] frontend/src/pages/Trace.tsx — DL1111700
import useApi from "../hooks/useApi";
import { useState } from "react";

export default function Trace() {
  const { req } = useApi();
  const [traceId, setTraceId] = useState("");
  const [traceResult, setTraceResult] = useState<any>(null);

  const handleTrace = async () => {
    if (!traceId.trim()) return alert("Enter a valid Trace ID or hash.");
    const res = await req(`/verify/w1/${traceId}`);
    setTraceResult(res);
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-udo-primary">Trace Document</h1>
      <div className="card flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter document hash"
          value={traceId}
          onChange={(e) => setTraceId(e.target.value)}
          className="border rounded-lg p-2"
        />
        <button onClick={handleTrace} className="btn-primary">Start Trace</button>
      </div>
      {traceResult && (
        <div className="card">
          <h2 className="text-lg font-bold mb-2 text-udo-primary">Trace Result</h2>
          <pre className="text-sm text-gray-600">{JSON.stringify(traceResult, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}
