type TitleProps = {
    label: string;
}

export const Title = ({ label }: TitleProps) => {
    return(
        <h1 className="max-w-max text-center text-[14px] lg:text-2xl font-medium bg-white rounded-[2rem] px-[1rem] py-[0.5rem] text-wrap">
            {label}
        </h1>
    )
}
