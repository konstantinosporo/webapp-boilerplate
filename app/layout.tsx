import type { Metadata } from "next";
import { inter } from "./ui/font";
import "./globals.css";



export const metadata: Metadata = {
  title: "Web Application - Boiler",
  description: "This is my custom Next js fullstack boilerplate with next auth implementation for sessions handling. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
