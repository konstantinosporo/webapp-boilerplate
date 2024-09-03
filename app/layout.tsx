import type { Metadata } from "next";
import { inter } from "./components/ui/font";
import "./globals.css";
// next
import { getServerSession } from "next-auth";
import MyNavBar from "./components/ui/NavBar";
import { Suspense } from "react";
import Loading from "./loading";
import { SwitchTheme } from "./components/ui/SwitchTheme";

export const metadata: Metadata = {
  title: "Web Application - Boiler",
  description:
    "This is my custom Next js fullstack boilerplate with next auth implementation for sessions handling.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" >
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={<Loading />}>
          <MyNavBar user={session?.user} />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <div className="fixed bottom-4 right-4">
            <SwitchTheme />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
