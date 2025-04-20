import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const About: React.FC = () => {
    interface SubSectionProps {
        title?: string;
        children?: React.ReactNode;
    }

    const SubSection: React.FC<SubSectionProps> = ({ title, children }) => {
        return (
            <div className="flex flex-col gap-4 xl:gap-7.5 text-base-content ">
                <h2 className="text-2xl xl:text-3xl">{title}</h2>
                <div className={"text-sm/7 md:text-base/10 md:text-justify " + openSans.className}>{children}</div>
            </div>
        )
    }

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <section
                        className="
                            flex flex-col 
                            gap-6 xl:gap-23
                            items-center
                            pt-19 md:pt-28 lg:pt-37.5
                            pb-9 xl:pb-27">

                        <h1 className="text-primary text-6xl/20 xl:text-[109px] text-center">
                            ABOUT US
                        </h1>

                        <div
                            className="
                                flex flex-col
                                text-center
                                gap-15 xl:gap-40
                                px-7.5 xl:px-34">
                            <SubSection title="Our Legacy of Excellence">
                                Founded on September 17, 2002, UBOTEX LIMITED is a proudly Nigerian company built on a foundation of quality, reliability, and innovation. What started as a cement distribution and building materials supply business has grown into a diversified enterprise, spanning construction, transportation, hospitality, and luxury retail. Our commitment to excellence has made us a trusted name in Nigeria’s construction industry, ensuring the supply of top-grade cement, ceiling boards, rods, nails, Cameroon zinc, and more. With a strong logistics network, we efficiently transport and distribute building materials across the country.
                            </SubSection>

                            <SubSection title="Expanding Horizons">
                                UBOTEX LIMITED’s drive for excellence led to the expansion into the hospitality and lifestyle sector, giving birth to Evana Hotels, a premium hospitality brand that redefines luxury and comfort. Through world-class services, elegant accommodations, and exceptional guest experiences, Evana Hotels has become a beacon of excellence in the industry.
                                Our passion for refined living also inspired the launch of XO Wine Stores, an exclusive retail brand offering a curated selection of the finest wines. XO Wine Stores is dedicated to bringing the best international and local wine collections to discerning customers, ensuring a superior tasting experience.
                            </SubSection>

                            <SubSection title="Our Commitment">
                                With excellence as our watchword, we are dedicated to delivering unmatched quality across all our businesses. Our management team, composed of experienced professionals from various sectors, drives our success by continuously innovating and adapting to market needs. We believe that corporate success lies in identifying and exceeding customer expectations while maintaining integrity, efficiency, and reliability.
                            </SubSection>

                            <SubSection title="Our Vision">
                                To be a leading force in cement distribution, transportation, construction, hospitality, and luxury retail—expanding our reach across South-South Nigeria and beyond.
                            </SubSection>

                            <SubSection title="Our Mission">
                                At UBOTEX LIMITED, we are committed to sustainable business practices, consistently delivering exceptional service through innovation, motivated professionals, and cutting-edge facilities. Our goal is to remain an industry leader, setting new standards for excellence in every sector we operate. 
                                <br />
                                Welcome to UBOTEX LIMITED—where strength, luxury, and quality meet.
                            </SubSection>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default About;