import Navbar from "@/components/layout/Navbar";
import TabBar from "@/components/layout/TabBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        {children}
      </main>
      <TabBar />
    </>
  );
}
