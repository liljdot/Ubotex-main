import Image from "next/image";
import commitmentImage from "@/app/assets/commitment-image.png";
import commitmentImageDesktop from "@/app/assets/commitment-image-desktop.png";
import { Open_Sans } from "next/font/google";
import ActionButton from "../ActionButton";
import { playfairDisplay } from "@/app/layout";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const CommitmentSection: React.FC = () => {

    return (
        <>
            <section className={"bg-neutral flex justify-center items-center p-0 " + openSans.className}>
                {/* mobile only */}
                <div className="card md:hidden bg-primary w-full max-w-103 md:w-full md:max-w-full rounded-none shadow-sm">
                    <figure className="w-full">
                        <Image
                            className="w-full"
                            src={commitmentImage}
                            alt="Our commitment" />
                    </figure>
                    <div className="card-body gap-4 px-11 py-3 items-center">
                        <p className="text-neutral text-center text-sm/7">
                            At UBOTEX NG, we are committed to excellence, delivering top-quality cement and building materials, exceptional hospitality, and a curated selection of fine wines. Whether you're building, unwinding, or indulging, we bring quality to every experience. Strength, luxury, and refinement, always.
                        </p>
                        <div className="card-actions">
                            <ActionButton to="" className="">Contact Us</ActionButton>
                        </div>
                    </div>
                </div>

                {/* hidden on mobile  */}
                <div className="hidden md:flex card card-side flex-row-reverse bg-transparent w-full rounded-none shadow-sm">
                    <figure className="w-[55%]">
                        <Image
                            className="w-full"
                            src={commitmentImageDesktop}
                            alt="Our commitment" />
                    </figure>
                    <div className="card-body w-[45%] px-26 py-28.5 items-center">
                        <div className="flex flex-col gap-15 px-25">
                            <p className={"text-base-content text-7xl/22 " + playfairDisplay.className}>
                                We Are Committed to Excellence in Every Industry
                            </p>
                            <div className="card-actions">
                                <ActionButton to="" className="bg-primary text-neutral">Contact Us</ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommitmentSection;