"use client";
import React, { useEffect, useState } from "react";
import PageTransition from "./PageTransition";
import { Title } from "./Title";
import { motion, useAnimation } from "framer-motion";

interface HeroSlide {
    caption: string;
    subtitle?: string;
    bgImage: string;
}



const heroData: HeroSlide[] = [
    {
        caption: "Empowering Imo’s Growth Through Strategic Planning and Sustainable Development.",
        subtitle: "The Ministry of Budget, Economic Planning, and Statistics serves as the economic backbone of Imo State, guiding inclusive growth, data-driven decisions, and coordinated development planning.",
        bgImage: "/images/homeImage2.jpg"
    },
    {
        caption: "Driving Economic inclusion through strategic planning.",
        bgImage: "/images/governor.png"
    },
    {
        caption: "Transparency, Innovation, and Progress in Fiscal Management",
        subtitle: "Together, we drive sustainable progress.",
        bgImage: "/images/commissioner2.jpg"
    }
];

export const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % heroData.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      controls.start({ x: 0, opacity: 1 });
    }, [currentIndex, controls]);

    const { caption, subtitle, bgImage } = heroData[currentIndex];

    return(
        <div className={`min-h-screen px-4 md:px-[3rem] flex flex-col justify-center bg-cover bg-center`}>
            <motion.div
                key={bgImage}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 3 }}
                className={`absolute inset-0 w-full h-full object-cover z-0 bg-${bgImage} bg-no-repeat bg-cover`}
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10 z-0"></div>
            <div className="relative z-10 py-10">
                <div className="w-full md:w-[60%] flex flex-col gap-2">
                    <PageTransition type="fadeUp">
                        <Title label='Imo State Ministry of Budget, Economic Planning & Statistics'/>
                        <h1 className="text-2xl md:text-[3rem] font-bold text-white leading-tight py-2">{caption}</h1>
                        <p className="text-[1rem] md:text-[1.125rem] font-light leading-[1.5] text-white">
                            {subtitle}
                        </p>
                    </PageTransition>
                </div>
            </div>
        </div>
    )
}

import { ReactNode } from "react";

interface SubsequentHeroProps {
    children: ReactNode,
    className?: string;
}

export const SubsequentHero = ({ children, className }: SubsequentHeroProps) => {
    return (
        <div className="relative h-[350px] md:min-h-[80vh] px-4 md:px-[3rem] py-8 md:py-10 flex flex-col justify-center bg-gradient-to-r from-green-900/20 via-black to-black">
            <div className={`absolute inset-0 bg-cover bg-center z-0 ${className}`}></div>
            {children}
        </div>
    );
}