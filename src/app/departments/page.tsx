import UnitsHeroSection from "./UnitsHeroSection";
import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Budget, Planning and Monitoring Departments",
  description: "Budget, planning, monitoring and evaluation and international cooperation departments of the Imo State Ministry of Budget, Economic Planning and Statistics.",
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
