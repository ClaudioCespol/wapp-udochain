// [F17] frontend/src/pages/Validate.tsx — DL1111700
import { useState } from "react";
import useApi from "../hooks/useApi";

export default function Validate() {
  const { uploadForm } = useApi();
  const [file, setFile] = useState<File | null>(null);
  const [options, setOptions] = useState({
    gps: false,
    bioid: false,
    blockchain: false,
    privatePdf: false
  });
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select a file first.");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("options", JSON.stringify(options));
    const res = await uploadForm("/upload", formData);
    setResult(res);
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-udo-primary">Validate Documents</h1>
      <form onSubmit={handleSubmit} className="card flex flex-col gap-4">
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <label><input type="checkbox" onChange={() => setOptions(o => ({ ...o, gps: !o.gps }))}/> Include GPS</label>
        <label><input type="checkbox" onChange={() => setOptions(o => ({ ...o, bioid: !o.bioid }))}/> Include Bio ID</label>
        <label><input type="checkbox" onChange={() => setOptions(o => ({ ...o, blockchain: !o.blockchain }))}/> Save on Blockchain</label>
        <label><input type="checkbox" onChange={() => setOptions(o => ({ ...o, privatePdf: !o.privatePdf }))}/> Generate Private PDF</label>
        <button type="submit" className="btn-primary">Validate</button>
      </form>
      {result && (
        <div className="card">
          <h2 className="text-lg font-bold mb-2 text-udo-primary">Result</h2>
          <pre className="text-sm text-gray-600">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}
