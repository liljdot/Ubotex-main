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
        <figure className="relative flex shrink-0 w-47.5 h-35">
            <Image fill src={image.src} alt="Our businesses image"/>
        </figure>
    )
}

const AboutSection: React.FC = () => {

    return (
        <>
            <section id="about" className="bg-neutral flex flex-col gap-6">
                <div className="flex flex-col gap-3 px-11">
                    <h3 className="text-primary text-xl font-semibold">
                        EXCELLENCE, SUSTAINABILTY, HOSPITALITY
                    </h3>

                    <p className={"text-base-content text-sm " + openSans.className}>
                        Incorporated on September 17, 2002, under Nigerian law, Ubotex Limited was founded to distribute cement, building materials, and provide transport haulage services. With a share capital of ₦5,000,000, Ubong Bassey Obot holds the majority stake, alongside Ekaete Ubong Obot and Ubong Ubong Obot.
                        Committed to excellence, our experienced management team drives our success in a competitive market. We prioritize staff development and national integration while maintaining a strong track record of reliable service. Over the years, we have expanded our operations to include a hotel and a wine shop, further diversifying our business portfolio. Today, Ubotex Limited is a household name in cement distribution, transportation, hospitality, and retail, guided by a vision for quality and efficiency.
                    </p>
                </div>

                <div className="flex flex-row gap-2 overflow-x-scroll">
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