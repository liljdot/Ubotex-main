"use client"

import { ClickActionButton } from "./ActionButton"

interface Props {
    targetId: string
    children?: React.ReactNode
    className?: string
}

const TargetButton: React.FC<Props> = ({ className, children, targetId }) => {
    const scrolltoSection = (id: string) => {
        const target = document.getElementById(id || "")
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return <ClickActionButton click={() => scrolltoSection(targetId)} className={className}>
        {children}
    </ClickActionButton>
}

export default TargetButton;