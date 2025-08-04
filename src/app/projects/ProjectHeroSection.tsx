import Image from "next/image";
import { SubsequentHero } from "../components/Hero";
import { Title } from "../components/Title";

export default function ProjectHeroSection() {
  return (
    <SubsequentHero className="bg-[url('/images/projectsHero.png')]"> 
      <div className="relative z-10 flex flex-col gap-2 items-center justify-center w-full h-full">
        <Title label="Projects"/>
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4">See What We Have Done</h1>
      </div>
    </SubsequentHero>
  );
} 