import { Open_Sans } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import constructionCompanyImage from "@/app/assets/construction-company-image.png"
import wineCompanyImage from "@/app/assets/wine-company-image.png"
import hotelCompanyImage from "@/app/assets/hotel-image.png"
import { DomainActionButton } from "../ActionButton";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

interface BusinessCardProps {
    image: StaticImageData
    title: string
    phrase: string
    content: string
    to: string
    textColorClassName?: string
    bgColorClassName?: string
    reversed?: boolean
}

const BusinessCard: React.FC<BusinessCardProps> = ({ image, title, phrase, content, to, textColorClassName, bgColorClassName, reversed }) => {

    return (
        <div className={`card md:card-side ${bgColorClassName ? bgColorClassName : "bg-primary"} ${reversed && "md:flex-row-reverse"} w-full md:w-180 lg:w-220 xl:w-259 max-w-103 md:max-w-180 lg:max-w-220 xl:max-w-259 md:h-93 lg:h-114 xl:h-133 md:items-center rounded-none md:rounded-lg shadow-sm ${reversed ? 'md:right-[4%] lg:right-0' : "md:left-[8%]"}`}>
            {/* mobile only  */}
            <div className="md:hidden">
                <figure className="relative w-full">
                    <Image
                        src={image}
                        alt="Our businesses"
                    />
                </figure>
            </div>

            {/* hidden on mobile  */}
            <div className="hidden md:block relative md:w-70 lg:w-86 xl:w-101 h-full">
                <figure className={`absolute top-[50%] -translate-y-[50%] ${reversed ? "-right-[20%]" : "-left-[20%]"} md:w-90 lg:w-111 xl:w-129 md:h-71 lg:h-86 xl:h-101`}>
                    <Image
                        className=" rounded-lg"
                        src={image}
                        alt="Our businesses"
                    />
                </figure>
            </div>
            <div className={`${bgColorClassName ? bgColorClassName : "bg-primary"} md:w-110 lg:w-134 xl:w-158 text-neutral text-center md:text-left flex flex-col items-center md:items-start px-8 md:px-10 lg:px-14 xl:px-18 py-12.5 md:py-0 rounded-lg ${openSans.className}`}>
                <h2 className="card-title md:text-xl lg:text-3xl xl:text-[43px] font-semibold">{title}</h2>
                <h3 className="text-[0.75rem] md:text-base lg:text-lg xl:text-xl font-semibold pt-2">{phrase}</h3>
                <p className="text-sm/7 xl:text-base/7 md:text-left pt-4">{content}</p>
                <div className="card-actions pt-2.5">
                    <DomainActionButton to={to} className={`${textColorClassName ? textColorClassName : "text-primary"}`}>
                        Explore
                    </DomainActionButton>
                </div>
            </div>
        </div>
    )
}

const ServicesSection: React.FC = () => {

    return (
        <>
            <section id="services" className="bg-neutral flex flex-col pt-15 xl:pt-0 gap-6 md:gap-10 md:px-16 lg:px-26 xl:px-35 overflow-x-hidden">
                <div className="flex flex-col gap-1 md:gap-3 px-10 md:px-0">
                    <h4 className="text-xl md:text-3xl lg:text-5xl xl:text-7xl text-primary font-medium">OUR SERVICES</h4>

                    <p className={"text-sm md:text-base md:font-semibold text-base-content " + openSans.className}>At Ubotex Limited, we are committed to excellence across multiple industries, delivering quality products and services to our customers.</p>
                </div>

                <div className="flex flex-col items-center gap-15 md:gap-20">
                    <BusinessCard
                        image={constructionCompanyImage}
                        title="UBOTEX LTD"
                        phrase="Your Trusted Partner in Quality Building Materials"
                        content="We provide top-quality building materials for strength, durability, and excellence in every project. As a leading distributor, we offer premium cement, durable rods, high-quality ceiling boards, stylish and secure doors, versatile fasteners, vibrant paints, and top-brand zinc for reliable roofing."
                        to="ubotex-ltd"
                        reversed
                    />

                    <BusinessCard
                        image={wineCompanyImage}
                        title="XO WINE STORES LTD"
                        phrase="Indulge in the Finest Selection of Wines & Spirits"
                        content="At XO WINE STORES LTD, every bottle is a journey, crafted with passion, aged to perfection, and selected for those who appreciate the finer things. As part of the Ubotex family, we bring you an exclusive collection of world-class wines, spirits, and champagnes, perfect for celebrations, quiet moments, and everything in between."
                        to="xowine"
                        textColorClassName="text-[#990100]"
                        bgColorClassName="bg-[#990100]"
                    />

                    <BusinessCard
                        image={hotelCompanyImage}
                        title="EVANA HOTELS"
                        phrase="Your Trusted Partner in Quality Building Materials"
                        content="We provide top-quality building materials for strength, durability, and excellence in every project. As a leading distributor, we offer premium cement, durable rods, high-quality ceiling boards, stylish and secure doors, versatile fasteners, vibrant paints, and top-brand zinc for reliable roofing."
                        to="evanahotels"
                        textColorClassName="text-[#3C120F]"
                        bgColorClassName="bg-[#3C120F]"
                        reversed
                    />
                </div>
            </section>
        </>
    )
}

export default ServicesSection;