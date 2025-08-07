'use client';

import React, { useState } from "react";
import { FadeUpTransition } from "../components/PageTransition";
import { SubsequentHero } from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { Title } from "../components/Title";
import { Media } from "../../../data/media";

interface MediaHeroSectionProps {
  title: string;
  subtitle: string;
  onSearchResults?: (results: typeof Media, query: string) => void;
}

const MediaHeroSection: React.FC<MediaHeroSectionProps> = ({ title, subtitle, onSearchResults }) => {
  const [query, setQuery] = useState("");

  // Filter media items as the user types and notify parent
  React.useEffect(() => {
    if (query.trim() === "") {
      if (onSearchResults) onSearchResults([], "");
      return;
    }
    
    // Filter media items based on query
    const results = Media.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    
    if (onSearchResults) onSearchResults(results, query);
  }, [query, onSearchResults]);

  return (
    <SubsequentHero className="bg-[url('/images/gradient.png')]">
      <div className="relative z-10 w-[80%] mx-auto flex flex-col items-center justify-end gap-0 h-full px-4 text-center">
        <Title label="Media" />
        <FadeUpTransition>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        </FadeUpTransition>
        <FadeUpTransition transition={{ delay: 0.15 }}>
          <p className="text-white text-lg md:text-[16px] max-w-2xl drop-shadow-lg">{subtitle}</p>
        </FadeUpTransition>
        <SearchBar placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value) } onSearch={(e) => e.preventDefault()} />
      </div>
    </SubsequentHero>
  );
};

export default MediaHeroSection; 