interface MVSCardProps {
    title: string;
    description: string;
}

export const MVSCard = ({title, description}: MVSCardProps) => {
    return(
        <div className={`bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full h-[200px]`}>
            <h3 className="font-medium text-lg md:text-[22px] mb-2 md:mb-3">
                {title}
            </h3>
            <p className="text-dark-primary-body text-sm md:text-[1rem]">
                {description}
            </p>
        </div>
    )
}