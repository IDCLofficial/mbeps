'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeUpTransition } from "../components/PageTransition";
import { SubsequentHero } from "../components/Hero";
import MediaSearchBar from "./MediaSearchBar";

interface MediaHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const MediaHeroSection: React.FC<MediaHeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery: string) => {
    // Implement your search logic here (e.g., filter media, update state, etc.)
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <SubsequentHero className="bg-[url('/images/gradient.png')]">
      <div className="relative z-10 w-[80%] mx-auto flex flex-col items-center justify-end gap-0 h-full px-4 text-center">
        <FadeUpTransition>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        </FadeUpTransition>
        <FadeUpTransition transition={{ delay: 0.15 }}>
          <p className="text-white text-lg md:text-[16px] max-w-2xl drop-shadow-lg">{subtitle}</p>
        </FadeUpTransition>
        <MediaSearchBar
          placeholder="Search"
          onSearch={handleSearch}
        />
      </div>
    </SubsequentHero>
  );
};

export default MediaHeroSection; 