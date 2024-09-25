"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (query) {
      router.push(`/search/?q=${query}`);
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="absolute left-[calc(50%-12rem)] flex items-center gap-2"
    >
      <Input
        id="search"
        name="search"
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-96 outline-none transition-colors ease-out focus:border-accent-foreground"
      />
      <Button
        variant="ghost"
        type="submit"
        className="aspect-square rounded-full p-0"
      >
        <IoIosSearch size={24} />
      </Button>
    </form>
  );
}
