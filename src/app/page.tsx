import { AppLink } from "@/app/components/AppLink";
import { Hero } from "@/app/components/Hero";
import { Title } from "@/app/components/Title";
import Image from "next/image";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
import LatestNews from "@/app/components/LatestNews";
import FeaturedPartners from "@/app/components/FeaturedPartners";
import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import Advertisement from "@/app/components/Advertisement";
import Publications from "./components/Publications";
import { Departments } from "./components/Departments";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Hero
        // title="Imo State Ministry of Budget, Economic Planning & Statistics" 
        // caption="Empowering Imo’s Growth Through Strategic Planning and Sustainable Development." 
        // subtitle="The Ministry of Budget, Economic Planning, and Statistics serves as the economic backbone of Imo State, guiding inclusive growth, data-driven decisions, and coordinated development planning." 
      />
      <AboutSection 
        title="About Us"
        subtitle="The Imo State Ministry of Budget, Economic Planning, and Statistics is committed to providing a transparent and effective budgeting system while strengthening economic planning and data reliability across the state."
        image1="/images/homeImage1.jpg"
        image2="/images/homeImage2.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.png" 
        title="About The Commissioner" 
      />
      <Departments />
      <section className="w-full flex flex-col gap-2">
        <QuickLinks />
        <Publications />
        {/* <Advertisement /> */}
        <LatestNews />
      </section>
      <Stats />
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Partnering for a Prosperous Imo"
        subtext="Join us in shaping a transparent, data-driven, and sustainable future for all through effective budgeting and strategic economic planning."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
