"use client"

import { IoIosMenu } from "react-icons/io"
import headerLogo from "@/app/assets/header-logo.png"
import Image from "next/image"
import Link from "next/link"
import { Open_Sans } from "next/font/google"
import DomainLink from "./DomainLink"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const Navbar: React.FC = () => {
    // const [sectionInView, setSectionInView] = useState<string>("")

    // const scrolltoSection = (id: string) => {
    //     const target = document.getElementById(id || "")
    //     if (target) {
    //         target.scrollIntoView({ behavior: "smooth", block: "start" })
    //     }
    // }

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setSectionInView(entry.target.id)
    //             } else {
    //                 setSectionInView("")
    //             }
    //         })
    //     }, { root: null, threshold: 0.5 })

    //     const targetElement = document.getElementById("about")
    //     if (targetElement) {
    //         observer.observe(targetElement)
    //     }
    // }, [])
    const pathname = usePathname()

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
                            <li ><Link href="/" className="text-base p-0">Home</Link></li>
                            <li><DomainLink subDomain="ubotex-ltd" className="text-base p-0">Ubotex Ltd</DomainLink></li>
                            <li><a className="text-base p-0">XO Wine Store</a></li>
                            <li><a className="text-base p-0">Evana Hotels</a></li>
                            <li><Link href={"/about"} className="text-base p-0">About Us</Link></li>
                        </ul>
                    </div>

                    <ul className={`menu menu-horizontal gap-6 text-primary px-1 hidden md:inline-flex ${openSans.className}`}>
                        <li className={`${pathname == "/" && "relative after:absolute after:bg-primary after:w-full after:h-1 after:-bottom-10"}`}><Link href="/" className="xl:text-lg p-0">Home</Link></li>
                        <li><DomainLink subDomain="ubotex-ltd" className="xl:text-lg p-0">Ubotex Ltd</DomainLink></li>
                        <li><DomainLink subDomain="xowine" className="xl:text-lg p-0">XO Wine Store</DomainLink></li>
                        <li><a className="xl:text-lg p-0">Evana Hotels</a></li>
                        <li className={`${pathname == "/about" && "relative after:absolute after:bg-primary after:w-full after:h-1 after:-bottom-10"}`}><Link href={"/about"} className="xl:text-lg p-0">About Us</Link></li>
                    </ul>
                </div>
            </div>
        </ header>
    )
}

export default Navbar