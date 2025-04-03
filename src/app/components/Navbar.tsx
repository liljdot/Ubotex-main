import { IoIosMenu } from "react-icons/io"
import headerLogo from "@/app/assets/header-logo.png"
import Image from "next/image"
import Link from "next/link"
import { Open_Sans } from "next/font/google"
import DomainLink from "./DomainLink"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const Navbar: React.FC = () => {

    return (
        <header className="w-full fixed bg-transparent/10 bg-clip-padding backdrop-filter backdrop-blur-2xl z-1000">
            <div className="navbar shadow-sm px-8 py-4 md:py-8 max-w-450 mx-auto">
                <div className="navbar-start">
                    <Link href={"/"} className="btn btn-ghost text-xl p-0 border">
                        <Image src={headerLogo} alt="Ubotex Logo" className="w-19 md:w-37.5" />
                    </Link>
                </div>

                <div className="navbar-end min-w-fit">
                    <div className="dropdown dropdown-end md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0 text-base-content">
                            <IoIosMenu className="size-6" />
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-neutral text-primary gap-3 z-1 mt-3 min-w-40 w-fit shadow pl-3 pr-5 py-4 ${openSans.className}`}
                        >
                            <li><a className="text-base p-0">Home</a></li>
                            <li><a className="text-base p-0">Ubotex Ltd</a></li>
                            <li><a className="text-base p-0">XO Wine Store</a></li>
                            <li><a className="text-base p-0">Evana Hotels</a></li>
                            <li><a className="text-base p-0">About Us</a></li>
                            <li><a className="text-base p-0">Contact Us</a></li>
                        </ul>
                    </div>

                    <ul className={`menu menu-horizontal gap-6 text-primary px-1 hidden md:inline-flex ${openSans.className}`}>
                        <li><a className="xl:text-lg p-0">Home</a></li>
                        <li><a className="xl:text-lg p-0">Ubotex Ltd</a></li>
                        <li><DomainLink subDomain="xowine" className="xl:text-lg p-0">XO Wine Store</DomainLink></li>
                        <li><a className="xl:text-lg p-0">Evana Hotels</a></li>
                        <li><a className="xl:text-lg p-0">About Us</a></li>
                        <li><a className="xl:text-lg p-0">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </ header>
    )
}

export default Navbar