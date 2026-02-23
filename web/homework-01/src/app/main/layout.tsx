import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "NextJS Training",
  description: "Homework 01",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
