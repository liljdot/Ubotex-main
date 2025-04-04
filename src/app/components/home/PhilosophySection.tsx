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
}

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const Card: React.FC<CardProps> = ({ title, content, icon, colorClassName }) => {
    return (
        <div className={`card ${colorClassName ? colorClassName : "bg-primary"} text-neutral w-full rounded-none p-0`}>
            <div className="card-body items-center text-center gap-3 py-5.5 px-3">
                <figure className="size-6">
                    <Image src={icon} alt="icon" className="w-full h-full" />
                </figure>
                <h2 className="card-title text-base">{title}</h2>
                <p className="text-sm">{content}</p>
            </div>
        </div>
    )
}

const PhilosophySection: React.FC = () => {

    return (
        <>
            <section className={"bg-neutral flex flex-col gap-2 py-15 px-9 " + openSans.className}>
                <Card
                    title="OUR MISSION"
                    content="At Ubotex Limited, we drive corporate success by anticipating and exceeding customer needs through innovation, strategic excellence, and an unwavering commitment to sustainable, exceptional service."
                    icon={targetDartIcon}
                />

                <Card
                    title="OUR MISSION"
                    content="At Ubotex Limited, we drive corporate success by anticipating and exceeding customer needs through innovation, strategic excellence, and an unwavering commitment to sustainable, exceptional service."
                    icon={eyeIcon}
                    colorClassName="bg-[#990100]"
                />

                <Card
                    title="OUR VALUES"
                    content="Ubotex Limited is driven by customer centricity, innovation, excellence, sustainability, competence, operational efficiency, and a vision to lead in distribution and transportation across the South-South region and beyond."
                    icon={trophyIcon}
                    colorClassName="bg-[#3C120F]"
                />
            </section>
        </>
    )
}

export default PhilosophySection;