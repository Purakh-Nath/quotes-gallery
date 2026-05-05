import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/quotes?page=1&limit=20")
      .then((res) => res.json())
      .then((res) => {
        setQuotes(res?.data?.data || []);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="px-6 py-4 border-b border-zinc-800">
        <h1 className="text-lg font-semibold">Quotes Gallery</h1>
      </header>

      <main className="p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <div
              key={q.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition"
            >
              <p className="text-sm leading-relaxed text-zinc-100">
                “{q.content}”
              </p>

              <div className="mt-4">
                <p className="text-sm font-medium text-zinc-300">
                  {q.author}
                </p>

                <div className="text-xs text-zinc-500 mt-2">
                  {q.tags?.length > 0 ? q.tags.join(", ") : "No tags"}
                </div>

                <div className="text-xs text-zinc-600 mt-2">
                  {q.length} characters
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;