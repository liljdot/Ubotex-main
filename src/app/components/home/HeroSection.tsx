import blueprintBG from "@/app/assets/blueprint-bg.png"
import wineStoreImage from "@/app/assets/wine-store-image.png"
import hotelImage from "@/app/assets/hotel-image.png"
import constructionImage from "@/app/assets/construction-image.png"
import ActionButton from "../ActionButton"
import { Open_Sans } from "next/font/google"
import Image, { StaticImageData } from "next/image"

const openSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ["latin"]
})

const CardImage: React.FC<{image: StaticImageData}> = ({image}) => {

    return (
        <figure className="flex shrink-0 w-51 h-39 md:w-93 md:h-100 bg-cover md:bg-center md:hover:bg-left-top bg-no-repeat md:hover:w-143 transition-all ease-in-out duration-300" style={{backgroundImage: `url(${image.src})`}}>
            
        </figure>
    )
}

const HeroSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral flex flex-col gap-9">
                <div className="flex flex-col items-center gap-5 bg-contain bg-no-repeat px-12 pt-19" style={{ backgroundImage: `url(${blueprintBG.src})` }}>
                    <h1 className="text-primary text-3xl text-center">
                        More Than Business,
                        <br />
                        A Legacy of Excellence
                    </h1>

                    <p className={`text-primary text-[0.75rem] text-center ${openSans.className}`}>
                        From quality building materials to exceptional hospitality and fine wines, Ubotex Limited turns aspirations into reality. Whether you're constructing, unwinding, or celebrating, we deliver excellence at every step.
                    </p>

                    <div className="flex flex-row justify-center">
                        <ActionButton to="" className="bg-primary text-neutral text-[0.625rem]">Explore</ActionButton>
                    </div>
                </div>

                <div className="flex md:justify-center flex-row gap-2 overflow-x-scroll md:overflow-visible">
                    <CardImage image={constructionImage}/>
                    <CardImage image={hotelImage}/>
                    <CardImage image={wineStoreImage}/>
                </div>
            </section>
        </>
    )
}

export default HeroSection