import { Open_Sans, Inter } from "next/font/google";
import ActionButton from "./ActionButton";
import Image from "next/image";
import footerLogo from "@/app/assets/footer-logo.png";
import { playfairDisplay } from "../layout";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
})

const Footer: React.FC = () => {

    return (
        <>
            <footer className="w-full bg-primary">
                <div className="w-screen max-w-450 flex flex-col py-6 px-8.5">
                    <div className={`flex flex-col ${openSans.className}`}>
                        <div className="flex flex-col text-neutral p-0">
                            {/* start  */}
                            <div className="flex flex-col gap-4 w-49">
                                <h4 className="text-sm font-semibold">Do you have
                                    any Requests?</h4>

                                <p className={"text-[10px] opacity-80 font-normal " + inter.className}>Feel free to send us your questions or request a free consultation.</p>

                                <ActionButton to="" className="w-fit">Contact Us</ActionButton>
                            </div>

                            {/* center  */}
                            <div className="flex flex-row justify-between pt-4">
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-y-0.5 gap-x-4">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[0.5rem] opacity-60 font-normal">Contact Us</p>
                                            <p className="text-[10px] font-normal">+234 8033611576</p>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <p className="text-[0.5rem] opacity-60 font-normal">Opening hours</p>
                                            <p className="text-[10px] font-normal">24/7</p>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <p className="text-[0.5rem] opacity-60 font-normal">Contact Us</p>
                                            <p className="text-[10px] font-normal">+234 8183213384</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-[0.5rem] opacity-60 font-normal">Email</p>
                                        <p className="text-[10px] font-normal">ubotexnigeria@yahoo.com</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-end items-end gap-3.5">
                                    <figure>
                                        <Image src={footerLogo} alt="Ubotex logo" width={92} />
                                    </figure>

                                    <div className="flex flex-col gap-1 text-right">
                                        <p className="text-[10px] font-normal">IfaIkotOkpon Timber Market, Uyo,
                                            Akwa Ibom State, Nigeria</p>
                                        <p className="text-[0.5rem] opacity-60 font-normal">© 2025 — Copyright</p>
                                    </div>
                                </div>
                            </div>

                            {/* end  */}
                            <div className="pt-9.5">
                                <h1 className={"text-5xl text-center " + playfairDisplay.className}>UBOTEX NG</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;