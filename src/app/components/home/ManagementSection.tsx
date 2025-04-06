import { Open_Sans } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import elderUbongImage from "@/app/assets/elder-ubong-image.png";
import mrsEkaeteImage from "@/app/assets/mrs-ekaete-image.png";
import mrUbongImage from "@/app/assets/mr-ubong-image.png";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

interface CardProps {
    image: StaticImageData
    name: string
    titles: string[]
}

const ManagementCard: React.FC<CardProps> = ({ name, image, titles }) => {

    return (
        <>
            <div className={"card bg-transparent w-51 shrink-0 rounded-none shadow-sm " + openSans.className}>
                <figure>
                    <Image
                        className="w-full h-50"
                        src={image}
                        alt="Director" />
                </figure>
                <div className="card-body px-3 py-2 text-base-content">
                    <h2 className="card-title text-sm font-semibold">{name}</h2>

                    <div>
                        {titles.map((title, index) => (
                            <p key={name + "title" + index} className="text-[10px]">
                                {title}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const ManagementSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral flex flex-col gap-4 my-15">
                <div className="flex flex-col px-10">
                    <h4 className="text-sm text-primary font-medium">MANAGEMENT TEAM</h4>
                    <p className={"text-sm " + openSans.className}>Ubotex Limited is powered by three directors, Legal Adviser, External Auditor and Departmental Heads.</p>
                </div>

                <div className={"flex flex-row gap-5 py-0.25 pl-10 overflow-x-auto " + openSans.className}>
                    <ManagementCard
                        image={elderUbongImage}
                        name="Elder Ubong Obot"
                        titles={["Chief Executive Officer", "Managing Director", "Chairman, Board of Directors"]} />

                    <ManagementCard
                        image={mrsEkaeteImage}
                        name="Mrs. Ekaete Ubong Obot"
                        titles={["Director", "Company Secretary"]} />

                    <ManagementCard 
                        image={mrUbongImage}
                        name="Mr. Ubong Ubong Obot"
                        titles={["Director"]}
                    />
                </div>
            </section>
        </>
    )
}

export default ManagementSection;