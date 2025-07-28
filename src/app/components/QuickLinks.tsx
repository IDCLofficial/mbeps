import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Departments",
    desc: "Explore our departments.",
    img: "/images/homeImage1.jpg",
    href: "/departments"
  },
  {
    title: "Projects",
    desc: "Discover our impactful initiatives.",
    img: "/images/homeImage2.jpg",
    href: "/projects"
  },
  {
    title: "News",
    desc: "Stay updated with the latest news.",
    img: "/images/homeImage3.jpg",
    href: "/news"
  },
  {
    title: "Events",
    desc: "Check out our upcoming events.",
    img: "/images/gradient.png",
    href: "/events"
  },
];

export default function QuickLinks() {
  return (
    <section className="w-full p-4 md:p-8 py-10 md:py-16 bg-white">
      <h2 className="text-dark-primary text-xl md:text-[3xl] lg:text-[43px] font-medium text-center mb-8 md:mb-12">Quick Links</h2>
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-0 md:px-4">
        {links.map((link, idx) => (
          <div key={link.title} className="bg-white flex flex-col items-center h-full relative">
            <div className="relative w-full h-[140px] md:h-[200px] z-0">
              <Image src={link.img} alt={link.title} fill className="object-cover" />
            </div>
            <Link href={link.href} className="flex-1 flex flex-col justify-between relative p-4 md:p-6 bg-white -mt-[30px] md:-mt-[30px] w-[90%] h-[120px] md:h-[180px] mx-auto shadow-md
            hover:scale-105 transition-all duration-300 cursor-pointer">
              <div>
                <h3 className={`text-dark-secondary text-xl md:text-lg font-bold mb-2`}>{link.title}</h3>
                <p className="text-dark-primary-body text-base md:text-[1rem] mb-4 md:mb-6">{link.desc}</p>
              </div>
              <span className="self-end bg-green-700 hover:bg-green-800 text-white w-8 max-h-8 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 