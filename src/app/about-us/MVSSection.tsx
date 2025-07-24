import { MVSCard } from "./MVSCard"

const mvs = [
    {
        title: "Our Mission",
        description: "To provide a transparent and effective budgeting system while strengthening economic planning and data reliability across the state."
    },
    {
        title: "Our Vision",
        description: "To be the leading state institution in fiscal responsibility, economic coordination, and development tracking."
    },
    {
        title: "Our Statute",
        description: "Guided by state and federal legal frameworks for public finance, planning, and statistical reporting."
    }
]   

export const MVSSection = () => {
    return(
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-8 py-20 justify-center items-center w-full bg-[#F1F1F1]">
            {mvs.map((mvs, index) => (
                <MVSCard key={index} title={mvs.title} description={mvs.description} />
            ))}
        </div>
    )
}