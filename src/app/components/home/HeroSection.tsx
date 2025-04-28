import blueprintBG from "@/app/assets/blueprint-bg.png"
import wineStoreImage from "@/app/assets/wine-store-image.png"
import hotelImage from "@/app/assets/hotel-image.png"
import constructionImage from "@/app/assets/construction-image.png"
import { Open_Sans } from "next/font/google"
import { StaticImageData } from "next/image"
import TargetButton from "../TargetButton"

const openSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ["latin"]
})

const CardImage: React.FC<{ image: StaticImageData }> = ({ image }) => {

    return (
        <figure className="flex shrink-0 w-51 h-39 sm:w-60 sm:h-50 md:w-60 md:h-50 lg:w-84 lg:h-72 xl:w-93 xl:h-100 bg-cover md:bg-center md:hover:bg-left-top bg-no-repeat md:hover:w-64 lg:hover:w-100 xl:hover:w-143 transition-all ease-in-out duration-300" style={{ backgroundImage: `url(${image.src})` }}>

        </figure>
    )
}

const HeroSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral flex flex-col gap-9 md:gap-0">
                <div className="flex flex-col items-center gap-5 md:gap-8 lg:gap-10 bg-contain bg-no-repeat px-12 md:px-24 lg:px-32 xl:px-75.5 pt-19 md:pt-28 lg:pt-37.5" style={{ backgroundImage: `url(${blueprintBG.src})` }}>
                    <h1 className="text-primary text-3xl md:text-4xl lg:text-7xl md:font-semibold text-center">
                        More Than Business,
                        <br />
                        A Legacy of Excellence
                    </h1>

                    <p className={`text-primary text-[0.75rem] md:text-base lg:max-w-153 text-center ${openSans.className}`}>
                        From quality building materials to exceptional hospitality and fine wines, Ubotex Limited turns aspirations into reality. Whether you're constructing, unwinding, or celebrating, we deliver excellence at every step.
                    </p>

                    <div className="flex flex-row justify-center">
                        <TargetButton targetId="services" className="bg-primary text-neutral">Explore</TargetButton>
                    </div>
                </div>

                <div className="md:bg-[url(/gradient-bg.svg)] bg-cover bg-no-repeat flex md:justify-center flex-row gap-2 md:gap-4 md:py-5 lg:py-10 xl:py-20 overflow-x-scroll md:overflow-visible">
                    <CardImage image={constructionImage} />
                    <CardImage image={hotelImage} />
                    <CardImage image={wineStoreImage} />
                </div>
            </section>
        </>
    )
}

export default HeroSection