import HeroSection from "./HeroSection";
import CommissionerSection from "./CommissionerSection";
import KeyInitiativesSection from "./KeyInitiativesSection";
import TeamGridSection from "./TeamGridSection";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

const commissionerDescription = `Dr. (Rt. Hon.) C.C. Osuala is a distinguished technocrat and scholar with a remarkable blend of academic excellence, international experience, and public service. With three doctorate degrees in General Engineering, Engineering Sciences, and Management from top U.S. universities, as well as a Bachelor’s degree in Law, Dr. Osuala brings a unique perspective to governance and economic planning.
His vision for the Ministry of Budget, Economic Planning & Statistics is rooted in transparency, inclusivity, and innovation. Dr. Osuala is committed to making Imo State’s budgeting process open and accessible, exemplified by his introduction of the state’s first Citizens’ Budget—also translated into Igbo to ensure no one is left behind. He believes in participatory governance, regularly engaging all 655 autonomous communities, civil society, and youth groups to shape budget priorities that reflect the true needs of Imo people. Under his leadership, the ministry has achieved unprecedented budget transparency, earning international recognition and securing significant World Bank grants that have fueled capital projects and improved revenue generation. Dr. Osuala’s goal is to institutionalize citizen-driven budgeting, foster sustainable economic growth, and ensure that Imo State’s development is both inclusive and measurable. His unwavering dedication continues to position the ministry as a model for fiscal responsibility and community empowerment in Nigeria.`;

const initiatives = [
  "SkillUpImo Project: This flagship program has trained thousands of young people in digital skills, providing them with tools like laptops and smartphones to kickstart their tech careers. The initiative has positioned Imo State as a leading digital skills hub in Nigeria.",
  "Broadband Expansion: Under Dr. Amadi&apos;s leadership, efforts have been made to enhance broadband penetration across all local government areas in Imo State, ensuring that even underserved and unserved communities have access to quality telecommunication services.",
  "Collaboration with Federal Initiatives: The Ministry has partnered with federal programs like the Three Million Technical Talent (3MTT) initiative to further empower youths with digital skills, aiming to position Nigeria as a net exporter of tech talent."
];

const teamMembers = Array(6).fill({
  name: "Magreth Nonso",
  position: "Position",
  imgSrc: "/images/team.png" // Use a placeholder or real image if available
});

export default function TeamPage() {
  return (
    <main className="min-h-screen w-full bg-[#f3f8fa] flex flex-col">
      <HeroSection
        heading="Leadership Behind the Digital Imo Agenda"
      />
      <CommissionerSection
        imgSrc="/images/commissioner.png"
        heading="Background and Vision"
        description={commissionerDescription}
      />
      <KeyInitiativesSection
        initiatives={initiatives}
        imgSrc="/images/initiatives.png"
      />
      <TeamGridSection members={teamMembers} />
      <div className="w-full bg-dark-primary text-center py-8 px-4">
        <p className="text-center text-[1rem] font-regular text-white w-[90%] lg:w-[60%] mx-auto">
            Dr. Amadi’s proactive approach and strategic initiatives have significantly contributed to the digital transformation of Imo State, fostering an environment conducive to innovation, entrepreneurship, and inclusive economic growth.
        </p>
      </div>
      <CTASection
        heading="Be part of Imo’s transformation with MBEPS"
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />    
      <Footer />
    </main>
  );
}
