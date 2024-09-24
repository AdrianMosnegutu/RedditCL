import Link from "next/link";
import { FaReddit } from "react-icons/fa6";
import SearchBar from "./SearchBar";

export default function Navigation() {
  return (
    <nav className="bg-card fixed top-0 z-50 flex w-full items-center border-b px-8 py-4 shadow-sm">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2">
        <FaReddit size={32} className="text-primary" />
        <h1 className="text-3xl font-bold">
          Reddit<em className="text-primary not-italic">CL</em>
        </h1>
      </Link>

      <SearchBar />
    </nav>
  );
}
