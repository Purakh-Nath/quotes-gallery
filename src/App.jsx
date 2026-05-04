import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-sm max-w-sm w-full">
        <h1 className="text-xl font-semibold tracking-tight">
          Tailwind Setup
        </h1>

        <button className="mt-4 w-full bg-white text-black py-2 rounded-lg hover:bg-zinc-200 transition">
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;