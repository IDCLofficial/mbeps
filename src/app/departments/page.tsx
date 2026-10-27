import UnitsHeroSection from "./UnitsHeroSection";
import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Departments",
  description: "Departments and units of the Ministry of Budget & Economic Planning, Imo State Government.",
  path: "/departments",
});


export default function UnitsPage() {
  return (
    <div className="bg-white">
      <UnitsHeroSection />
      <UnitsTabsSection />
      <CTASection heading="Be part of Imo’s transformation with MBEPS" buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
