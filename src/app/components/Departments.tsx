"use client"

import { departments } from "../departments/departments";
import { AppLink } from "./AppLink";
import {motion } from "framer-motion"

export const Departments = () => {
    return (
        <motion.section 
            initial={{opacity: 0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 1, ease:"linear"}}
            className="w-full max-w-6xl mx-auto flex flex-col gap-2 py-16 px-4">
            <h2 className="text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-12">Our Departments</h2>
            <div className="flex sm:flex-row items-center flex-wrap gap:4 sm:gap-6 lg:gap-8">
                {departments.map((department, index) => (
                    <div key={index} className="h-[100px] flex-1 bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full
                    flex flex-col justify-center">
                        <h3 className="font-medium text-base md:text-[22px] mb-2 md:mb-3">
                            {department.name}
                        </h3>
                    </div>
                ))}
            </div>
            <AppLink href="/departments" label="View All Departments" variant="primary" className="w-fit mx-auto mt-8 hover:bg-primary-green/80 hover:text-white transition-all duration-300" />
        </motion.section>
    )
}