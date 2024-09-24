import { Frown, Undo2 } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="page flex flex-col items-center justify-center">
      <Frown size={100} className="text-primary mb-8" />
      <h1 className="text-primary text-center text-5xl font-bold">
        404 Not Found
      </h1>
      <p className="text-center text-lg">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-8 flex items-center gap-2 hover:underline">
        <Undo2 />
        Go back to the home page
      </Link>
    </main>
  );
}
