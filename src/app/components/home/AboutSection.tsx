import { Open_Sans } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import innImage from "@/app/assets/inn-image.png";
import materialsImage from "@/app/assets/materials-image.png"
import wineryImage from "@/app/assets/winery-image.png"
import cementSiloImage from "@/app/assets/cement-silo-image.png"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const ImageCard: React.FC<{ image: StaticImageData }> = ({ image }) => {

    return (
        <figure className="relative flex shrink-0 w-47.5 md:w-60 lg:w-80 xl:w-113 h-35 md:h-50 lg:h-65 xl:h-83">
            <Image fill src={image.src} alt="Our businesses image" className="md:rounded-lg"/>
        </figure>
    )
}

const AboutSection: React.FC = () => {

    return (
        <>
            <section id="about" className="bg-neutral flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-22.5 xl:py-40">
                <div className="flex flex-col gap-3 md:gap-5 lg:gap-8 xl:gap-11 px-11 md:px-16 lg:px-24 xl:px-37.5">
                    <h3 className="text-primary text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold">
                        EXCELLENCE, SUSTAINABILTY, HOSPITALITY
                    </h3>

                    <p className={"text-base-content text-sm/7 md:text-base/9 text-justify md:font-semibold " + openSans.className}>
                        Incorporated on September 17, 2002, under Nigerian law, Ubotex Limited was founded to distribute cement, building materials, and provide transport haulage services. With a share capital of ₦5,000,000, Ubong Bassey Obot holds the majority stake, alongside Ekaete Ubong Obot and Ubong Ubong Obot.
                        <br />
                        Committed to excellence, our experienced management team drives our success in a competitive market. We prioritize staff development and national integration while maintaining a strong track record of reliable service. Over the years, we have expanded our operations to include a hotel and a wine shop, further diversifying our business portfolio. Today, Ubotex Limited is a household name in cement distribution, transportation, hospitality, and retail, guided by a vision for quality and efficiency.
                    </p>
                </div>

                <div className="flex flex-row gap-2 md:gap-3 lg:gap-4 xl:gap-5 overflow-x-scroll">
                    <ImageCard image={innImage}/>
                    <ImageCard image={materialsImage}/>
                    <ImageCard image={wineryImage}/>
                    <ImageCard image={cementSiloImage}/>
                </div>
            </section>
        </>
    )
}

export default AboutSection;