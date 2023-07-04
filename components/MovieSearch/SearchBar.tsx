"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
} // End SearchBarProps

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  }; // End handleSubmit

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex w-screen max-w-lg items-center"
    >
      <Input
        type="text"
        className="h-10 w-full rounded-md border border-transparent bg-gray-200 px-4 py-2 text-lg text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
        placeholder="Search for a movie"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />

      <Button type="submit" className="ml-2">
        Search
      </Button>
    </form>
  );
} // End SearchBar
