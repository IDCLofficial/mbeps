import Image from "next/image";
import Footer from "../../components/Footer";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";
import CTASection from "@/app/components/CTASection";
import SocialShareBar from "../SocialShareBar";
import newsList from "../newsList";


function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function generateStaticParams() {
  return newsList.map(news => ({ slug: slugify(news.title) }));
}

const latestNews = [
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND EXPANSION TO...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND EXPANSION TO...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND EXPANSION TO...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
];

export default async function NewsDetailPage({params}:{params: {slug:string}}) {
  const {slug}= params;
 console.log(slug)

  const news = newsList.find(item => item.title === decodeURIComponent(slug));
  
  console.log(news)

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">News Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]"> {/* pb-[180px] ensures body does not overlap next section */}
        <NewsHeroSection/>
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image src={'/images/homeImage1.png'} alt="News Hero" width={900} height={400} className="object-cover w-full h-[260px] md:h-[320px]" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{news.title}</h1>
            <SocialShareBar date="May 30, 2025" />
          </div>
          {/* Main Content */}
            <p className="text-gray-700 mb-6">{news.desc}</p>            
        </NewsBodySection>
      </section>
      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div key={idx} className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs">
                <div className="relative w-full h-28">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">{item.title}</div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 3: Footer */}
      <CTASection heading="Ready to Experience the New Imo?" subtext="Discover our vision for an inclusive, empowered, and connected state." buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
} 