"use client"

import { useState } from "react";
import Image from "next/image";
import { departments } from "./departments";

export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full mx-auto flex flex-col md:flex-row gap-8 py-16 px-4 md:px-8">
      {/* Tabs */}
      <div className="w-full md:w-2/6 border-r pr-4">
        <ul className="space-y-2">
          {departments.map((dept, idx) => (
            <li key={dept.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded border ${activeIdx === idx ? 'bg-green-600 text-white' : 'bg-white text-black border-transparent'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1 px-10">
        <h2 className="text-2xl md:text-4xl font-medium mb-4">{active.name}</h2>
        <div className="w-full max-w-xl mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover h-[300px]" />
        </div>
        <p className="text-gray-700 text-sm md:text-[1rem] text-dark-primary-body">{active.description}</p>
      </div>
    </section>
  );
} 