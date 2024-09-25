"use client";

import { useEffect } from "react";
import { BiError } from "react-icons/bi";
import { IoRefresh } from "react-icons/io5";

interface Props {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error("Error boundary caught an error:", error);
  }, [error]);

  return (
    <main className="page flex flex-col items-center justify-center gap-16">
      <div className="flex items-center gap-8">
        <BiError size={150} className="text-primary" />
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-primary">{error.name}</h1>
          <p className="text-lg">
            {error.message || "An unexpected error occurred."}
          </p>
        </div>
      </div>
      <button className="group flex items-center gap-4" onClick={reset}>
        <IoRefresh size={24} />
        <span className="group-hover:underline">Try again</span>
      </button>
    </main>
  );
}
