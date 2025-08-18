import EventsHeroSection from "./EventsHeroSection";
import EventsListSection from "./EventsListSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import PastEvents from "./PastEvents";
import getEvents from "./eventsList";
import { Events } from "../../../lib/types";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="bg-white">
      <EventsHeroSection />
      <EventsListSection events={events as unknown as Events[]} />
      <PastEvents events={events as unknown as Events[]}/>
      <CTASection 
        heading="Partner with us for a Prosperous Imo"
        subtext="Join us in shaping a transparent, data-driven, and sustainable future for all through effective budgeting and strategic economic planning."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
