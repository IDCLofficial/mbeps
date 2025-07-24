"use client"

import React, { useState } from "react";
import MediaGalleryCard from "./MediaGalleryCard";

interface MediaItem {
  image: string;
  title: string;
  isVideo?: boolean;
}

interface MediaGalleryGridProps {
  items: MediaItem[];
}

const MEDIA_PER_PAGE = 9;

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / MEDIA_PER_PAGE);
  const start = page * MEDIA_PER_PAGE;
  const end = start + MEDIA_PER_PAGE;
  const currentItems = items.slice(start, end);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {currentItems.map((item, idx) => (
          <MediaGalleryCard key={idx} image={item.image} title={item.title} isVideo={item.isVideo} />
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="px-4 py-2 rounded bg-gray-200 text-gray-700 disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="px-4 py-2 rounded bg-primary-green text-white disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MediaGalleryGrid; 