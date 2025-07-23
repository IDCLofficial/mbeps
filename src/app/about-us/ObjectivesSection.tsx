export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Guide Inclusive Growth",
            description: "Promote equitable and inclusive economic growth across Imo State by ensuring that development initiatives benefit all communities and demographics."
        },
        {
            title: "Enable Data-Driven Decision Making",
            description: "Collect, analyze, and disseminate reliable statistical data to inform government policies, resource allocation, and strategic planning."
        },
        {
            title: "Coordinate Development Planning",
            description: "Lead the formulation and implementation of coordinated development plans that align with the state’s long-term vision and priorities."
        },
        {
            title: "Ensure Transparent and Accountable Budgeting",
            description: "Develop and manage annual budgets with a focus on transparency, fiscal responsibility, and optimal use of public resources."
        },
        {
            title: "Foster Sustainable Economic Development",
            description: "Design and execute strategies that support sustainable economic growth, job creation, and improved quality of life for Imo State residents."
        },
        {
            title: "Strengthen Stakeholder Collaboration",
            description: "Engage with government agencies, private sector, civil society, and development partners to achieve shared economic and social objectives."
        }
    ];

    const coreValues = [
        "Integrity",
        "Efficiency",
        "Collaboration",
        "Innovation",
        "Inclusiveness"
    ];

    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        MBEPS objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <h3 className="font-medium text-lg md:text-[22px] mb-2 md:mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-sm md:text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <span className="font-medium text-base md:text-lg text-dark-primary-body">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 