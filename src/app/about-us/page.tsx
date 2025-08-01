import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { CommissionerSection } from "./CommissionerSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import TeamGridSection from "./TeamGridSection";
import { AppLink } from "../components/AppLink";

const teamMembers = Array(4).fill({
    name: "Magreth Nonso",
    position: "Position",
    imgSrc: "/images/team.png" // Use a placeholder or real image if available
  });

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Budget, Economic Planning & Statistics"/>
            <AboutSection 
                aboutText="The Imo State Ministry of Budget, Economic Planning and Statistics plays a critical role in shaping the economic direction of the state. Our core mandate is to drive inclusive and sustainable development by coordinating strategic planning, formulating state budgets, monitoring and evaluating government projects, and producing accurate data for evidence-based decision-making. We work closely with local and international partners to align our development goals with global best practices."
                imgSrc="/images/homeImage1.jpg" 
                altText="Ministry of Budget, Economic Planning and Statistics conference event" 
            />
            <MVSSection />
            <ObjectivesSection />
            <TeamGridSection members={teamMembers} />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Be part of Imo’s transformation with MBEPS"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}