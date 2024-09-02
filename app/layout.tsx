import type { Metadata } from "next";
import { inter } from "./components/ui/font";
import "./globals.css";
// next
import { getServerSession } from "next-auth";
import MyNavBar from "./components/ui/NavBar";


export const metadata: Metadata = {
  title: "Web Application - Boiler",
  description: "This is my custom Next js fullstack boilerplate with next auth implementation for sessions handling. ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <MyNavBar user={session?.user} />
        {children}
      </body>
    </html>
  );
}



