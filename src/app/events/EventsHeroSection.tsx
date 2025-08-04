import { SubsequentHero } from "../components/Hero";
import { Title } from "../components/Title";

export default function EventsHeroSection() {
  return (
    <SubsequentHero className="bg-[url('/images/gradient.png')]">
      <div className="flex flex-col gap-2 items-center justify-center z-10">
        <Title label="Events"/>
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Upcoming Events</h1>
      </div>
    </SubsequentHero>
  );
} 