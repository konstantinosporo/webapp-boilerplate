import type { Metadata } from "next";
import { ThemeProvider } from "./components/hooks/theme-provider";
import { inter } from "./components/ui/font";
import { ModeToggle } from "./components/ui/SwitchTheme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Application - Boiler",
  description:
    "This is my custom Next js fullstack boilerplate with next auth implementation for sessions handling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {/* SwitchTheme from ShadCN*/}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
