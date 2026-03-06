"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import NavButton from "./NavButton";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="hidden md:flex items-center justify-between gap-2 h-16 px-6 relative z-10">
            <div className="flex-shrink-0">
                <Image
                    src="/next.svg"
                    alt="Logo"
                    width={100}
                    height={20}
                    priority
                />
            </div>

            <div className="flex gap-1">
                {NAV_ITEMS.map((item) => (
                    <NavButton
                        key={item.href}
                        title={item.label}
                        href={item.href}
                        isActive={pathname === item.href} // เช็ค State ตรงนี้
                    />
                ))}
            </div>
        </nav>
    );
}