import { Title } from "./Title";

interface HeroProps {
    title: string;
    caption: string;
    subtitle: string;
}

export const Hero = ({title, caption, subtitle}: HeroProps) => {
    return(
        <div className={`min-h-screen px-4 md:px-[3rem] flex flex-col justify-center bg-[url('/images/heroImage.jpg')] bg-cover bg-center`}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-0"></div>
            <div className="relative z-10 py-10">
                <div className="w-full md:w-[60%] flex flex-col gap-2">
                    <Title label={title}/>
                    <h1 className="text-2xl md:text-[3rem] font-bold text-white leading-tight">{caption}</h1>
                    <p className="text-[1rem] md:text-[1.2rem] font-light leading-[1.5] text-white">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}