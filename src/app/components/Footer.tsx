import Image from "next/image";
import Link from "next/link";

const info = {
    logo: "/logo.png",
    ministry: "Budget, Economic Planning & Statistics",
    description: "The Imo State Ministry of Budget, Economic Planning & Statistics is dedicated to driving sustainable development and inclusive growth in Imo State. The ministry leads the formulation of transparent budgets, strategic economic plans, and reliable statistical data to guide policy decisions, ensure fiscal responsibility, and improve the quality of life for all citizens.",
    quickLinks: [
        {
            label: "Projects",
            href: "/" 
        },
        {
            label: "News",
            href: "/news"
        },
        {
            label: "Units",     
            href: "/units"
        },
        {
            label: "Events",
            href: "/events"
        },
        {
            label: "Media",
            href: "/media"
        },
        {
            label: "Contact Us",        
            href: "/contact-us"
        },
    ],
    newsletter: [
        {
            label: "Signup to Our Newsletter",          
            href: "/"
        },
        {
            label: "Subscribe",
            href: "/"
        },
    ],
    contact: [
        {
            label: "+2349130270514",
            href: "/"
        },
        {
            label: "Info@mbeps.im.gov.ng",
            href: "/"
        },  
        {
            label: "Block 6, 3rd floor, State Secretarait, Port Harcourt Road , Owerri",
            href: "/"
        },
    ]
}

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-10 px-4 lg:px-18">
            <div className="mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 pb-8">
                {/* Logo and Description */}
                <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-2">
                    <Image src={info.logo} alt="Imo State Logo" width={40} height={40} />
                    <span className="font-semibold text-sm text-gray-900 leading-tight">
                    Imo State Ministry<br />
                    of {info.ministry}
                    </span>
                </div>
                <p className="text-xs text-gray-600 max-w-xs">
                    {info.description}
                </p>
                </div>
                {/* Quick Links */}
                <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
                <div className="flex flex-col flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
                    {info.quickLinks.map((link) => (
                        <Link href={link.href} className="hover:underline" key={link.label}>{link.label}</Link>
                    ))}
                </div>
                </div>
                {/* Newsletter and Contact */}
                <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">{info.newsletter[0].label}</h4>
                <form className="flex mb-3">
                    <input
                    type="email"
                    placeholder="Myemail@gmail.com"
                    className="border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r text-sm font-medium">{info.newsletter[1].label}</button>
                </form>
                <div className="text-xs text-gray-700 space-y-1 flex flex-col">
                    {info.contact.map((item) => (
                        <Link href={item.href} key={item.label}>{item.label}</Link>
                    ))}
                </div>
                </div>
            </div>
            <div className="border-t border-gray-200 text-center py-3 text-xs text-gray-500">Imo State Government</div>
        </footer>
    );
} 