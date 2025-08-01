"use client"

import Image from "next/image";
import { Title } from "./Title";
import { AppLink } from "./AppLink";
import PageTransition from "./PageTransition";
import {motion} from "framer-motion"

interface AboutSectionProps {
    title: string;
    subtitle: string;
    image1: string;
    image2: string;
}

export default function AboutSection({title, subtitle, image1, image2}: AboutSectionProps) {
  return (
    <section className={`relative w-full py-12 md:py-20 bg-[url('/images/gradient.png')] bg-no-repeat bg-cover shadow-lg overflow-hidden`}>
      <div className="flex flex-col gap-8 items-center w-full md:w-[90%] mx-auto">
        {/* Left: Text Content */}
          
        <motion.div 
          initial={{opacity:0, y:40}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1, ease:"easeInOut" }}
          className="flex flex-col md:flex-row items-center h-full justify-between w-full gap-6 md:gap-0">
            <div className="flex flex-col gap-2 w-full md:w-auto">
                <Title label={title}/>
                <h2 className="text-xl md:text-3xl lg:text-[43px] font-bold text-white leading-tight mb-4">
                    Our Mandate — Ministry<br/>
                    of Budget, Economic <br className="hidden md:block"/>
                    <span className="text-green-400"> Planning & Statistics</span>
                </h2>
            </div>
            <div className="relative rounded-lg overflow-hidden w-full md:w-[70%] h-[180px] md:h-[280px] md:hidden">
              <Image src={image1} alt="Mandate 1" fill className="object-cover" />
            </div>
            <div className="w-full md:w-auto">
                <p className="text-gray-200 text-base mb-6 max-w-lg text-justify">
                    {subtitle}
                </p>
                <AppLink href="/about-us" label="Learn More" variant="secondary" className="border border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] font-medium
                hover:bg-primary-green/80 hover:text-white transition-all duration-300"/>
            </div>
        </motion.div>
        {/* Right: Images */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full justify-start">
              <div className="relative rounded-lg overflow-hidden w-full md:w-[70%] h-[180px] md:h-[300px] max-md:hidden">
                  <Image src={image1} alt="Mandate 1" fill className="object-fit" />
              </div>
              <div className="relative rounded-lg overflow-hidden w-full md:w-[30%] h-[180px] md:h-[300px] flex items-center justify-center">
                  <Image src={image2} alt="Mandate 2" fill className="object-fit" />
              </div>
          </div>
      </div>
    </section>
  );
}
