import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milly & Rio",
  description: "Milly & Rio description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
