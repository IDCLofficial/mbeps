"use client";
import React, { useEffect, useState } from "react";
import PageTransition from "./PageTransition";
import { Title } from "./Title";
import { motion } from "framer-motion";

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
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroData.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(interval);
    }, []);

    const { caption, subtitle, bgImage } = heroData[current];

    return(
        <div
            className={`min-h-screen px-4 md:px-[3rem] flex flex-col justify-center bg-cover bg-center`}
        >
            <motion.img
                key={bgImage}
                src={bgImage}
                alt="hero"
                className="absolute inset-0 w-full h-full object-fit z-0"
                initial={{ scale: .90}}
                animate={{ scale: 1}}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 z-0"></div>
            <div className="relative z-10 py-10">
                <div className="w-full md:w-[60%] flex flex-col gap-2">
                    <PageTransition type="fadeUp">
                        <Title label='Imo State Ministry of Budget, Economic Planning & Statistics'/>
                        <h1 className="text-2xl md:text-[3rem] font-bold text-white leading-tight">{caption}</h1>
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