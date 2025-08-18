"use client"

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"
import { AppLink } from "./AppLink";
import { NewsPost } from "../../../lib/types";

// Sort newsList by date descending and take top 3

export default function LatestNews({newsList}: {newsList: NewsPost[]}) {
  const topNews = [...newsList].sort((a, b) => new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime()).slice(0, 3);
  return (
    <motion.section 
      initial={{opacity: 0, y:80}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 1, ease:"linear"}}
      className="w-full px-4 md:px-8 py-10 md:py-16 bg-white"
    >
      <h2 className="text-dark-primary text-xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-10">Latest News</h2>
      <motion.div 
        initial={{opacity: 0, y:80}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, ease:"linear"}}
        className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-0 md:px-4 mb-8"
      >
        {topNews.map((item, idx) => (
          <Link href={`/news/${item.fields.title}`} key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col
          hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="relative w-full h-[140px] md:h-[240px]">
              <Image src={`https:${item.fields.featuredImage?.fields.file.url}`} alt={item.fields.title} width={500} height={500} className="object-cover h-full w-full" />
            </div>
            <div className="w-full p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-dark-secondary text-xs md:text-[15px] font-bold mb-2 uppercase leading-snug">{item.fields.title}</h3>
              <p className="text-gray-700 text-base mb-2 md:mb-4">{item.fields.content.content[0].content[0].value}</p>
              <span className="text-xs md:text-[15px] font-bold text-gray-900 mt-auto">{item.sys.createdAt}</span>
            </div>
          </Link>
        ))}
      </motion.div>
      <div className="flex justify-center">
        <AppLink href="/news" label="See More" variant="primary" className="border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] font-medium
        hover:bg-primary-green/80 transition-all duration-300"/>
      </div>
    </motion.section>
  );
} 