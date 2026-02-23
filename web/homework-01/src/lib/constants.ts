import { Home, Info, Briefcase, Mail, FlashlightIcon, CheckIcon, BookAIcon } from "lucide-react";

export const NAV_ITEMS = [
    {
        label: "Home",
        href: "/main",
        icon: Home
    },
    {
        label: "Flights",
        href: "/main/flights",
        icon: FlashlightIcon
    },
    {
        label: "Check-in",
        href: "/main/checkin",
        icon: CheckIcon
    },
    {
        label: "Manage Booking",
        href: "/main/managebooking",
        icon: BookAIcon
    },
    {
        label: "Contact",
        href: "/main/contact",
        icon: Mail
    },
];