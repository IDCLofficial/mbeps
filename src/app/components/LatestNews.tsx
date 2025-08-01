import Image from "next/image";
import { AppLink } from "./AppLink";
import newsList from "../news/newsList";
import Link from "next/link";

// Sort newsList by date descending and take top 3
const topNews = [...newsList].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

export default function LatestNews() {
  return (
    <section className="w-full px-4 md:px-8 py-10 md:py-16 bg-white">
      <h2 className="text-dark-primary text-xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-10">Latest News</h2>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-0 md:px-4 mb-8">
        {topNews.map((item, idx) => (
          <Link href={`/news/${item.title}`} key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col
          hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="relative w-full h-[140px] md:h-[240px]">
              <Image src={item.img} alt={item.title} fill className="object-contain w-full" />
            </div>
            <div className="w-full p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-dark-secondary text-xs md:text-[15px] font-bold text-gray-900 mb-2 uppercase leading-snug">{item.title}</h3>
              <p className="text-dark-primary-body text-gray-700 text-base mb-2 md:mb-4">{item.desc}</p>
              <span className="text-dark-tertiary text-xs md:text-[15px] font-bold text-gray-900 mt-auto">{item.date}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <AppLink href="/news" label="See More" variant="primary" className="border border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] font-medium
        hover:bg-primary-green/80 transition-all duration-300"/>
      </div>
    </section>
  );
} 