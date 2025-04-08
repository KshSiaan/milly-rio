import Navbar from "@/components/shared/navbar";
import { redirect } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return redirect("/");

  return (
    <>
      <Navbar />
      <main className="">{children}</main>
    </>
  );
}
