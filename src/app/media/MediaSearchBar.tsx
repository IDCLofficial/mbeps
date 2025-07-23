"use client"

import React, { useState } from "react";

interface MediaSearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const MediaSearchBar: React.FC<MediaSearchBarProps> = ({ placeholder = "Search", onSearch }) => {
  const [query, setQuery] = useState("");
  // The error is likely due to passing an event handler (onSearch) from a server component to this client component.
  // To debug, let's add a console.log to see when the component renders and when handleSubmit is called.
  React.useEffect(() => {
    console.log("MediaSearchBar mounted. onSearch prop:", typeof onSearch);
  }, [onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form className="flex w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-8 py-2 rounded-r font-semibold"
      >
        Search
      </button>
    </form>
  );
};

export default MediaSearchBar; 