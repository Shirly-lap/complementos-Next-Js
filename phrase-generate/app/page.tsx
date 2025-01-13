import { useState } from 'react';

export default function Home() {
  const [phrase, setPhrase] = useState<string>('');

  const fetchPhrase = async () => {
    const res = await fetch('/api/generate-phrase');
    const data = await res.json();
    setPhrase(data.phrase);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Phrase Generator</h1>
      <p className="text-xl mb-4">{phrase || 'Click the button to generate a phrase!'}</p>
      <button
        onClick={fetchPhrase}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Phrase
      </button>
    </div>
  );
}
