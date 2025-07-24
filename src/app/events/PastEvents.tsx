"use client"

import React, { useRef } from "react";
import events from "./eventsList";
import Image from "next/image";
import Link from "next/link";

export default function PastEvents() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="w-full py-10 px-4 md:px-8 flex flex-col">
            <h1 className="text-2xl font-nedium mb-4">Past Events</h1>
            <div className="relative w-full flex items-center">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 z-10 bg-white border rounded-full shadow p-2 text-xl font-bold hover:bg-gray-100"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                    aria-label="Scroll left"
                >
                    &#8592;
                </button>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-8 px-12 py-4 scrollbar-hide w-full justify-center"
                >
                    {events.map((event, idx) => (
                        <div key={event.slug} className="flex-shrink-0 w-80 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center p-4">
                            <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                                <Image src={event.img} alt={event.title} fill className="object-cover rounded" />
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-xs text-gray-500 mb-1">{event.date} | {event.location}</span>
                                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                                <p className="text-sm text-gray-700 mb-2">{event.description}</p>
                                <Link href={`/events/${event.slug}`} className="border border-primary-green text-primary-green text-[14px] px-4 py-2 rounded font-semibold hover:bg-green-50 transition mt-2">More Information</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 z-10 bg-white border rounded-full shadow p-2 text-xl font-bold hover:bg-gray-100"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                    aria-label="Scroll right"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}