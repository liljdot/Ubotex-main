import blueprintBG from "@/app/assets/blueprint-bg.png"
import ActionButton from "../ActionButton"
import { Open_Sans } from "next/font/google"
import Image from "next/image"

const openSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ["latin"]
})

const cardImage: React.FC<{image: string}> = ({image}) => {

    return (
        <figure className="w-51 h-39">
            <Image src={image} alt="our businesses" className="w-full h-full" placeholder="blur"/>
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

                <div className="flex flex-row"></div>
            </section>
        </>
    )
}

export default HeroSection