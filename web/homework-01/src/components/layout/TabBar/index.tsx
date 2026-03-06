"use client";

import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import TabBarItem from "./TabBarItem";

export default function TabBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] md:hidden">
            <div className="flex items-stretch">
                {NAV_ITEMS.map((item) => (
                    <TabBarItem
                        key={item.href}
                        label={item.label}
                        href={item.href}
                        icon={item.icon}
                        isActive={pathname === item.href || pathname.startsWith(item.href + "/")}
                    />
                ))}
            </div>
        </nav>
    );
}
