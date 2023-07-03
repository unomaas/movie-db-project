import Head from "next/head";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import MovieSearch from "@/components/MovieSearch/MovieSearch";
import SearchBar from "@/components/MovieSearch/SearchBar";

export default function IndexPage() {
  return (
    <div className="min-h-[calc(100vh-h-16)]">
      <Head>
        <title>Movie DB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="container flex flex-col items-center justify-center px-4 py-10 mx-auto">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Movie Database
        </h1>

        <p className="mt-3 text-xl text-gray-500 sm:text-xl md:text-2xl lg:text-3xl">
          Search for a movie
        </p>

        <MovieSearch />
      </main>
    </div>
  );
} // End IndexPage
