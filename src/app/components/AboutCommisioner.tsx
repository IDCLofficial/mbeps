"use client"
import Image from "next/image";
import {motion} from "framer-motion"

interface AboutCommisionerProps {
    imgSrc: string;
    title: string;
}

export default function AboutCommisioner({imgSrc, title}: AboutCommisionerProps) {
  return (
    <section className="w-full bg-[#f3f8fa] py-12 md:py-20 flex justify-center">
        <motion.div 
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 1, ease:"linear"}}
            className="flex flex-col lg:flex-row items-center gap-8 md:gap-18 w-full px-4 md:px-[3rem]">
            {/* Left: Commissioner Image */}
            <div className="bg-white rounded-xl shadow-lg flex-shrink-0 w-full lg:w-auto flex justify-center">
                <div className="relative w-full h-[350px] lg:w-[500px] lg:h-[500px]">
                    <Image
                    src={imgSrc}
                    alt="Commissioner"
                    fill
                    className="object-cover h-full rounded-xl w-full"
                    sizes="(max-width: 768px) 220px, 320px"
                    />
                </div>
            </div>
            {/* Right: Text Content */}
            <div className="flex-1 w-full md:w-auto mt-6 md:mt-0">
                <h2 className="text-xl md:text-2xl lg:text-[43px] font-bold text-dark-primary mb-4">{title}</h2>
                <p className="text-dark-primary-body text-base mb-4">
                    Rt. Hon. Anselem Anyanwu Ezechinyere is a distinguished technocrat and public servant serving as the Commissioner for Budget, Economic Planning and Statistics in Imo State. With extensive experience in both private sector and government roles, he brings a unique perspective to governance and economic planning.
                </p>
                <p className="text-dark-primary-body text-base mb-6 text-justify">
                    His vision for the Ministry of Budget, Economic Planning & Statistics is rooted in transparency, inclusivity, and innovation. Hon. Anyanwu is committed to making Imo State&apos;s budgeting process open and accessible, exemplified by his introduction 
                    of the state&apos;s first Citizens&apos; Budget—also translated into Igbo to ensure no one is left behind. He believes in participatory governance, regularly engaging with communities, civil society, and youth groups to shape budget priorities that reflect the true needs of Imo people.
                    Under his leadership, the ministry has achieved unprecedented budget transparency, earning international recognition and securing significant World Bank grants that have fueled capital projects and improved revenue generation.
                    Hon. Anyanwu&apos;s goal is to institutionalize citizen-driven budgeting, foster sustainable economic growth, and ensure that Imo State&apos;s development is both inclusive and measurable. His dedication continues to position the ministry as a model for fiscal responsibility and community empowerment in Nigeria.
                </p>
            </div>
        </motion.div>
    </section>
  );
} 