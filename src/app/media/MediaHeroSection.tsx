'use client';

import React from "react";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";
import { FadeUpTransition } from "../components/PageTransition";

interface MediaHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const MediaHeroSection: React.FC<MediaHeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative w-full h-[380px] md:h-[420px] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 w-full flex flex-col items-center justify-end gap-0 h-full px-4">
        <FadeUpTransition>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        </FadeUpTransition>
        <FadeUpTransition transition={{ delay: 0.15 }}>
        <p className="text-white text-lg md:text-[16px] max-w-2xl drop-shadow-lg">{subtitle}</p>
        </FadeUpTransition>
        <SearchBar
          placeholder="Search"
          value=""
          onChange={() => {}}
          onSearch={() => {}}
        />
      </div>
    </section>
  );
};

export default MediaHeroSection; 