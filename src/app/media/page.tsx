"use client"

import React, { useState } from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { Media } from "../../../data/media";

interface MediaItem {
  image: string;
  title: string;
  isVideo?: boolean;
}

const mediaItems: MediaItem[] = [];

export default function MediaPage() {
  const [searchResults, setSearchResults] = useState<typeof Media>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearchResults = (results: typeof Media, query: string) => {
    // Only update state if values have actually changed to prevent infinite loops
    if (searchQuery !== query || JSON.stringify(searchResults) !== JSON.stringify(results)) {
      setSearchResults(results);
      setSearchQuery(query);
    }
  };
  
  // Determine which items to display
  // Show search results if there's a query and results, otherwise show all items
  const displayItems = searchQuery.trim() !== "" && searchResults.length > 0 ? searchResults : (mediaItems.length > 0 ? mediaItems : Media);
  
  if (mediaItems.length === 0) {
    return (
      <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Digital Stories of Impact"
        subtitle="Explore our gallery of photos, videos, and press releases capturing our journey toward a digitally empowered Imo State."
        backgroundImage="/images/heroImage.png"
        onSearchResults={handleSearchResults}
      />
      <MediaGalleryGrid items={displayItems} />
      <CTASection 
        heading="Ready to Experience the New Imo?" 
        subtext="Discover our vision for an inclusive, empowered, and connected state." 
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
    )
  }
  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Digital Stories of Impact"
        subtitle="Explore our gallery of photos, videos, and press releases capturing our journey toward a digitally empowered Imo State."
        backgroundImage="/images/heroImage.png"
        onSearchResults={handleSearchResults}
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <MediaGalleryGrid items={displayItems} />
      </section>
      <CTASection 
        heading="Ready to Experience the New Imo?" 
        subtext="Discover our vision for an inclusive, empowered, and connected state." 
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
