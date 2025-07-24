import Image from "next/image";
import { AppLink } from "./AppLink";

const links = [
  {
    title: "Youth Empowerment",
    desc: "Explore our comprehensive range of services.",
    img: "/images/homeImage1.jpg",
    href: "/initiatives/youth-empowerment"
  },
  {
    title: "Talent Hunt",
    desc: "Discover our impactful initiatives.",
    img: "/images/homeImage3.jpg",
    href: "/initiatives/talent-hunt"
  },    
  {
    title: "Youth Civic Engagement",
    desc: "Stay updated with the latest news.",
    img: "/images/homeImage2.jpg",
    href: "/initiatives/youth-civic-engagement"
  },
  {
    title: "Local Youth Development Officers (YDOs)",
    desc: "Who we are and what we stand for.",
    img: "/images/gradient.png",
    href: "/initiatives/YDOs"
  },
];

export default function Publications() {
  return (
    <section className="w-full p-4 md:p-8 py-10 md:py-16 bg-white">
      <h2 className="text-dark-primary text-xl md:text-[3xl] lg:text-[43px] font-medium text-center mb-8 md:mb-12">Budget Reports and Documents</h2>
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-0 md:px-4">
        {links.map((link, idx) => (
          <div key={link.title} className="bg-white flex flex-col items-center h-full relative cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-[140px] md:h-[200px] z-0">
              <Image src={link.img} alt={link.title} fill className="object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between items-end p-2 md:p-4 bg-white mx-auto shadow-md">
                <div>
                  <h3 className={`text-dark-secondary text-base font-bold mb-2`}>{link.title}</h3>
                  <p className="text-dark-primary-body text-[1rem] mb-4 md:mb-6">{link.desc}</p>
                </div>
                <AppLink href={link.href} label="Download" variant="secondary" className="border border-1 border-primary-green text-[14px] px-[10px] py-[6px] rounded-[3.4px] 
                font-medium hover:bg-primary-green hover:text-white transition-all duration-300 w-max" download />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 