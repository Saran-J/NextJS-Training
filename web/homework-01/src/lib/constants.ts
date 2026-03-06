import { Home, Plane, CircleCheckBig, Luggage, Send } from "lucide-react";

export const NAV_ITEMS = [
    {
        label: "Home",
        href: "/main",
        icon: Home
    },
    {
        label: "Flights",
        href: "/main/flights",
        icon: Plane
    },
    {
        label: "Check-in",
        href: "/main/checkin",
        icon: CircleCheckBig
    },
    {
        label: "Manage Booking",
        href: "/main/managebooking",
        icon: Luggage
    },
    {
        label: "Contact",
        href: "/main/contact",
        icon: Send
    },
];