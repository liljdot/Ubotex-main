import Image from "next/image";
import commitmentImage from "@/app/assets/commitment-image.png";
import { Open_Sans } from "next/font/google";
import ActionButton from "../ActionButton";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const CommitmentSection: React.FC = () => {

    return (
        <>
            <section className={"bg-neutral flex justify-center items-center p-0 " + openSans.className}>
                <div className="card bg-primary w-full max-w-103 rounded-none shadow-sm">
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
            </section>
        </>
    )
}

export default CommitmentSection;