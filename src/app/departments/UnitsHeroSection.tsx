import { Title } from "../components/Title";

export default function UnitsHeroSection() {
  return (
    <section className="relative w-full h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-green-900/80 to-black/80">
      <div className="absolute inset-0 bg-[url('/images/gradient.png')] bg-cover bg-center opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Title label="Departments"/>
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center leading-tight">Departments Driving Our Vision</h1>
      </div>
    </section>
  );
} 