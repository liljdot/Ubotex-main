import { IoIosMenu } from "react-icons/io"
import headerLogo from "@/app/assets/header-logo.png"
import Image from "next/image"
import Link from "next/link"

const Navbar: React.FC = () => {
    return (
        <header className="w-full fixed bg-gray-500/10 bg-clip-padding backdrop-filter backdrop-blur-2xl">
            <div className="navbar shadow-sm px-8 py-4">
                <div className="navbar-start">
                    <Link href={"/"} className="btn btn-ghost text-xl p-0 border">
                        <Image src={headerLogo} alt="Ubotex Logo" className="w-19" />
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0 text-base-content">
                            <IoIosMenu className="size-6" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>

                    <ul className="menu menu-horizontal px-1 hidden md:inline-flex">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
        </ header>
    )
}

export default Navbar