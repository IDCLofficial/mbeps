"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Departments", href: "/departments" },
    { label: "Projects", href: "/projects" },
    { label: "Media", href: "/media" },
    { label: "Events", href: "/events" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact-us" }
];

interface NavLinksProps {
    mobile?: boolean;
    onClickLink?: () => void;
}

const NavLinks = ({ mobile = false, onClickLink }: NavLinksProps) => {
    const pathname = usePathname();
    return (
        <nav>
            <ul className={mobile ? "flex flex-col gap-6 mt-10" : "flex items-center gap-8 list-none p-0 m-0"}>
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className={`hover:text-tertiary-green transition-colors duration-200 ${pathname.split("/")[1] === link.href.split("/")[1] ? "text-tertiary-green" : mobile ? "text-white text-lg font-semibold" : "text-white "}`}
                            onClick={onClickLink}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks; 