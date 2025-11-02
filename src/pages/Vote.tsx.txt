// [F19] frontend/src/pages/Vote.tsx — DL1111700
import { useState } from "react";
import useApi from "../hooks/useApi";

export default function Vote() {
  const { req } = useApi();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);
  const [result, setResult] = useState<any>(null);

  const handleVote = async () => {
    if (!question.trim() || options.some((o) => !o.trim())) return alert("Please fill all fields.");
    const payload = { question, options };
    const res = await req("/wallet/w2", "POST", payload);
    setResult(res);
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-udo-primary">Create Vote</h1>
      <div className="card flex flex-col gap-3">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border rounded-lg p-2"
        />
        {options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const copy = [...options];
              copy[i] = e.target.value;
              setOptions(copy);
            }}
            className="border rounded-lg p-2"
          />
        ))}
        <button
          onClick={() => setOptions([...options, ""])}
          className="btn-primary"
          type="button"
        >
          Add Option
        </button>
        <button onClick={handleVote} className="btn-primary">Register Vote</button>
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
