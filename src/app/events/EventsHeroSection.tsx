import { SubsequentHero } from "../components/Hero";

export default function EventsHeroSection() {
  return (
    <SubsequentHero className="bg-[url('/images/gradient.png')]">
      <div className="flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Upcoming Events</h1>
      </div>
    </SubsequentHero>
  );
} 