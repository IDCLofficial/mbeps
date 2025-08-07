import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import TeamGridSection from "./TeamGridSection";

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Budget, Economic Planning & Statistics"/>
            <AboutSection 
                aboutText="The Imo State Ministry of Budget, Economic Planning and Statistics plays a critical role in shaping the economic direction of the state. Our core mandate is to drive inclusive and sustainable development by coordinating strategic planning, formulating state budgets, monitoring and evaluating government projects, and producing accurate data for evidence-based decision-making. We work closely with local and international partners to align our development goals with global best practices."
                imgSrc="/images/homeImage2.jpg" 
                altText="Ministry of Budget, Economic Planning and Statistics conference event" 
            />
            <MVSSection />
            <TeamGridSection />
            <ObjectivesSection />
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