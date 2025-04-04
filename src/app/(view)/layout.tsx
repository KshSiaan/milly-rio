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
      {children}
      <Footer></Footer>
    </>
  );
}
