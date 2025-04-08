import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="bg-[url('/image/bg-tile.svg')] bg-center bg-repeat">
        {children}
      </main>
      <Footer />
    </>
  );
}
