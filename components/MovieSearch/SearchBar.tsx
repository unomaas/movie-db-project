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
      className="flex items-center w-screen max-w-lg mt-10"
    >
      <Input
        type="text"
        className="w-full h-10 px-4 py-2 text-lg text-gray-700 bg-gray-200 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="Search for a movie"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />

      <Button type="submit" className="h-10 ml-2">
        Search
      </Button>
    </form>
  );
}
