import { departments } from "../departments/departments";
import { AppLink } from "./AppLink";

export const Departments = () => {
    return (
        <section className="w-full max-w-6xl mx-auto flex flex-col gap-2 py-16 px-4">
            <h2 className="text-xl md:text-[43px] font-medium text-center mb-8 md:mb-12">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                {departments.map((department, index) => (
                    <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full
                    flex flex-col justify-center">
                        <h3 className="font-medium text-lg md:text-[22px] mb-2 md:mb-3">
                            {department.name}
                        </h3>
                    </div>
                ))}
            </div>
            <AppLink href="/departments" label="View All Departments" variant="primary" className="w-fit mx-auto mt-8 hover:bg-primary-green/80 hover:text-white transition-all duration-300" />
        </section>
    )
}