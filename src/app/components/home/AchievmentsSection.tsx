import { Open_Sans } from "next/font/google";
import { IconType } from "react-icons";
import { FaHelmetSafety } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

interface AchievementCardProps {
    Icon: IconType
    details: {
        value: string
        achievement: string
    }
}

const AchievementCard: React.FC<AchievementCardProps> = ({ Icon, details }) => {

    return (
        <div className="w-full bg-[#EBF6FF] md:bg-neutral flex flex-row gap-0.5 items-center justify-start md:justify-center pl-4 md:pl-0 py-7.5 md:py-0">
            <div className="bg-neutral size-6 md:size-10 lg:size-13 flex justify-center items-center rounded-full p-1 md:p-2.5">
                <Icon className="text-primary size-full" />
            </div>

            <div className={"flex flex-col text-primary " + openSans.className}>
                <h6 className="md: text-xl lg:text-3xl font-semibold">{details.value}</h6>
                <p className="text-sm md:text-base">{details.achievement}</p>
            </div>
        </div>
    )
}

const AchievementsSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral grid grid-cols-2 md:grid-cols-4 gap-[1px] my-15 md:my-13">
                <AchievementCard Icon={FaHelmetSafety} details={{value: "500+", achievement: "Workers Employed"}}/>
                <AchievementCard Icon={MdPeopleAlt} details={{value: "2k+", achievement: "Satisfied Customers"}}/>
                <AchievementCard Icon={RiServiceFill} details={{value: "5k+", achievement: "Services Provided"}}/>
                <AchievementCard Icon={IoShieldCheckmark} details={{value: "20+", achievement: "Years Experience"}}/>
            </section>
        </>
    )
}

export default AchievementsSection;