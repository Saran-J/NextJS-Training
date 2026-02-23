import type { Metadata } from "next";
import "./globals.css"; // มั่นใจว่ายังดึง CSS หลักมาใช้อยู่

// Metadata ช่วยเรื่อง SEO (ชื่อเว็บที่แสดงบน Tab)
export const metadata: Metadata = {
    title: "My Airline App",
    description: "Check-in and Booking System",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased font-sans">
                {children}
            </body>
        </html>
    );
}