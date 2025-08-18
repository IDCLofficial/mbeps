import React from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import getMedia from "./media";
import { Media } from "../../../lib/types";

export default async function MediaPage() {
  const media = await getMedia();
  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Explore Our Gallery"
        subtitle="Discover how the Ministry of Youth Development and Talent Hunt empowers young people and nurtures talent for a brighter future."
        backgroundImage="/images/heroImage.png"
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <MediaGalleryGrid items={media as unknown as Media[]} />
      </section>
      <CTASection 
        heading="Partner with us for a Prosperous Imo"
        subtext="Join us in shaping a transparent, data-driven, and sustainable future for all through effective budgeting and strategic economic planning."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
