import { Inter } from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
})

const Footer: React.FC = () => {

    return (
        <>
        <footer className="w-full bg-primary">
            <div className="w-screen max-w-450 flex flex-col px-10 pt-11 pb-3">
                <div className={`flex flex-row justify-between ${inter.className}`}>
                    <div className="flex flex-col text-neutral">
                        <h4 className="text-[0.7rem] font-medium max-w-20">Do you have
                        any Requests?</h4>

                        <p className="text-[0.25rem]">Feel free to send us your questions or request a free consultation.</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;