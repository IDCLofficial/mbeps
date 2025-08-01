import Image from "next/image";
import { departments } from "../departments/departments";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    

    return (
        <section className="w-full bg-[#1D1D1D] py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
                {/* Header */}
                <h2 className="text-xl md:text-[43px] font-medium text-white">
                    Our Structure
                </h2>
                <p className="text-white text-sm md:text-[1rem] mb-8 md:mb-16 w-full md:w-[40%] mx-auto">
                    The Ministry is divided into specialized departments that collectively drive Imo&apos;s digital agenda
                </p>
                {/* Main Image */}
                <div className="relative w-full h-[180px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8 md:mb-20">
                    <Image
                        src={imgSrc}
                        alt="Ministry Building"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Department Cards Grid */}
                <div className="flex flex-col gap-2 w-full">
                    {/* Top row: 3 departments */}
                    <div className="flex flex-col md:flex-row gap-2 w-full justify-between mb-2">
                        {departments.slice(0, 3).map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200">
                                <h3 className="font-bold text-base md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.name}
                                </h3>
                                <p className="text-dark-secondary-body text-sm md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Bottom row: 2 departments */}
                    <div className="flex flex-col md:flex-row gap-2 w-full justify-center">
                        {departments.slice(3, 5).map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200">
                                <h3 className="font-bold text-base md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.name}
                                </h3>
                                <p className="text-dark-secondary-body text-sm md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
}; 