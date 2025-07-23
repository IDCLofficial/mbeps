"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  // Departments
  {
    name: "Department of Budget",
    image: "/images/aboutUs1.png",
    description: "Responsible for the preparation, coordination, and monitoring of the state budget, ensuring alignment with government priorities and fiscal discipline.",
  },
  {
    name: "Department of Economic Planning",
    image: "/images/aboutUs1.png",
    description: "Oversees the formulation and implementation of economic development plans and policies to drive sustainable growth in Imo State.",
  },
  {
    name: "Department of Project Monitoring and Evaluation",
    image: "/images/aboutUs1.png",
    description: "Monitors and evaluates government projects to ensure effective delivery, transparency, and value for money.",
  },
  {
    name: "Department of Research and Statistics",
    image: "/images/aboutUs1.png",
    description: "Conducts research and manages statistical data to support evidence-based policy making and planning.",
  },
  {
    name: "Department of Administration and Finance",
    image: "/images/aboutUs1.png",
    description: "Handles administrative services and financial management for the ministry, ensuring efficient operations and resource allocation.",
  },
  {
    name: "Department of Development Cooperation and Donor Coordination",
    image: "/images/aboutUs1.png",
    description: "Coordinates development cooperation initiatives and manages relationships with donor agencies to maximize support for state projects.",
  },
  // Units & Specialized Programmes
  {
    name: "Digital Planning and Innovation Unit",
    image: "/images/aboutUs1.png",
    description: "Drives digital transformation and innovative planning solutions within the ministry.",
  },
  {
    name: "State Integrated Financial Management Information System (SIFMIS) Unit",
    image: "/images/aboutUs1.png",
    description: "Implements and manages the SIFMIS platform to enhance financial transparency and efficiency.",
  },
  {
    name: "Climate Resilience and Sustainability Desk",
    image: "/images/aboutUs1.png",
    description: "Focuses on integrating climate resilience and sustainability into state planning and projects.",
  },
  {
    name: "Public Investment Management Unit",
    image: "/images/aboutUs1.png",
    description: "Oversees the planning, appraisal, and management of public investments for optimal impact.",
  },
  {
    name: "State Data Coordination Office",
    image: "/images/aboutUs1.png",
    description: "Coordinates data management and sharing across state agencies to support informed decision-making.",
  },
  // Parastatals and Agencies
  {
    name: "Imo State Bureau of Statistics",
    image: "/images/aboutUs1.png",
    description: "The official agency responsible for collecting, analyzing, and disseminating statistical data for Imo State.",
  },
];

export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
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
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-medium mb-4">{active.name}</h2>
        <div className="w-full max-w-xl mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover" />
        </div>
        <p className="text-gray-700 text-sm md:text-[1rem] text-dark-primary-body">{active.description}</p>
      </div>
    </section>
  );
} 