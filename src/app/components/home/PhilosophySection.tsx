import { Open_Sans } from "next/font/google";
import targetDartIcon from "@/app/assets/target-dart-icon.png"
import eyeIcon from "@/app/assets/eye-icon.png"
import trophyIcon from "@/app/assets/trophy-icon.png"
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
    title: string
    content: string
    icon: StaticImageData
    colorClassName?: string
    className?: string
}

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const Card: React.FC<CardProps> = ({ title, content, icon, colorClassName, className }) => {
    return (
        <div className={`card ${colorClassName ? colorClassName : "bg-primary"} text-neutral w-full max-w-90 md:grow-1 lg:w-90.5 lg:h-131.5 rounded-none md:rounded-lg p-0 ` + className}>
            <div className="card-body items-center text-center gap-3 lg:gap-5 py-5.5 lg:py-27.5 px-3">
                <figure className="size-6 lg:size-20.5">
                    <Image src={icon} alt="icon" className="w-full h-full" />
                </figure>
                <h2 className="card-title text-base lg:text-[40px] lg:font-semibold">{title}</h2>
                <p className="text-sm lg:text-base/7 grow-0">{content}</p>
            </div>
        </div>
    )
}

const PhilosophySection: React.FC = () => {

    return (
        <>
            <section className={"bg-neutral flex flex-col md:flex-row items-center md:items-stretch lg:items-center justify-center gap-2 lg:gap-7 py-15 md:py-10 px-9 lg:px-0 md:my-10 lg:my-20 xl:my-40 " + openSans.className}>
                <Card
                    title="OUR MISSION"
                    content="At Ubotex Limited, we drive corporate success by anticipating and exceeding customer needs through innovation, strategic excellence, and an unwavering commitment to sustainable, exceptional service."
                    icon={targetDartIcon}
                    className="lg:mb-44"
                />

                <Card
                    title="OUR MISSION"
                    content="Our business vision is to be a leading mayor distributor, transporter amongst others in the South – South and beyond."
                    icon={eyeIcon}
                    colorClassName="bg-[#990100]"
                />

                <Card
                    title="OUR VALUES"
                    content="Ubotex Limited is driven by customer centricity, innovation, excellence, sustainability, competence, operational efficiency, and a vision to lead in distribution and transportation across the South-South region and beyond."
                    icon={trophyIcon}
                    colorClassName="bg-[#3C120F]"
                    className="lg:mt-44"
                />
            </section>
        </>
    )
}

export default PhilosophySection;