import Link from "next/link"
import { ReactNode } from "react"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

interface Props {
    className?: string
    children: ReactNode
    to: string
}

const ActionButton: React.FC<Props> = ({ className, children, to }) => {

    return (
        <Link href={to} className={ openSans.className + " btn min-w-26.5 h-8 py-2 border-none shadow-none rounded-full hover:scale-105 transition-all ease-in-out duration-300 " + className}>
            {children}
        </Link>
    )
}

export default ActionButton