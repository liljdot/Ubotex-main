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
}

const BusinessCard: React.FC<BusinessCardProps> = ({ image, title, phrase, content, to, textColorClassName, bgColorClassName }) => {

    return (
        <div className="card bg-base-100 w-full max-w-103 rounded-none shadow-sm">
            <figure className="relative w-full">
                <Image
                    src={image}
                    alt="Our businesses"
                />
            </figure>
            <div className={`${bgColorClassName ? bgColorClassName : "bg-primary"} text-neutral text-center flex flex-col items-center px-8 py-12.5 ${openSans.className}`}>
                <h2 className="card-title font-semibold">{title}</h2>
                <h3 className="text-[0.75rem] font-semibold pt-2">{phrase}</h3>
                <p className="text-sm/7 pt-4">{content}</p>
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
            <section className="bg-neutraln flex flex-col pt-15 gap-6">
                <div className="flex flex-col gap-1 px-10">
                    <h4 className="text-xl text-primary font-medium">OUR SERVICES</h4>

                    <p className={"text-sm text-base-content " + openSans.className}>At Ubotex Limited, we are committed to excellence across multiple industries, delivering quality products and services to our customers.</p>
                </div>

                <div className="flex flex-col items-center gap-15">
                    <BusinessCard
                        image={constructionCompanyImage}
                        title="UBOTEX LTD"
                        phrase="Your Trusted Partner in Quality Building Materials"
                        content="We provide top-quality building materials for strength, durability, and excellence in every project. As a leading distributor, we offer premium cement, durable rods, high-quality ceiling boards, stylish and secure doors, versatile fasteners, vibrant paints, and top-brand zinc for reliable roofing."
                        to="ubotexltd"
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
                    />
                </div>
            </section>
        </>
    )
}

export default ServicesSection;