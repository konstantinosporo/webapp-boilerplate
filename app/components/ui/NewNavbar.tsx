'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "./SwitchTheme";
import { Button } from "@/components/ui/button";
import LogoImage from "./LogoImage";
import { nanoid } from "nanoid";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaPowerOff } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";

import { navLinksUser } from "../links/navlinks";
import { useSession } from "next-auth/react";
import clsx from "clsx";

const NewNavbar = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <Card className="py-2 border-0 flex items-center justify-between gap-3  mt-3 mb-14 fixed top-0 w-full bg-white/30 backdrop-blur-lg border-b border-white/20 text-foreground shadow-md z-50 md:container md:mx-auto md:rounded-2xl md:px-4 px-2">

      <LogoImage />

      <ul className="hidden md:flex items-center gap-6">
        {navLinksUser.map((item) => (
          <li className="font-medium" key={item.title}>
            <Link href={item.href}>
              <Button className="bg-transparent">
                {item.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1">
        <Button className="hidden md:block ml-2 mr-2">Get Started</Button>

        <div className="flex md:hidden mr-2 items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="#home">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#features">Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#pricing">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#faqs">FAQs</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={user?.image ?? '/next.svg'} sizes="120px" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={user ? '/api/auth/signout' : '/login'}>
                <Button
                  variant="secondary"
                  className={clsx(
                    "w-full px-4 py-2",
                    user ? "bg-red-500 text-white group" : "text-black",
                    "dark:bg-red-700"
                  )}
                >
                  {user ? (
                    <>
                      <FaPowerOff className="mr-2 group-hover:animate-pulse" />
                      Logout
                    </>
                  ) : (
                    <>
                      <IoMdLogIn className="mr-2 group-hover:animate-pulse" />
                      Login
                    </>
                  )}
                </Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
};

const landings = [
  {
    id: nanoid(),
    title: "Landing 01",
    route: "/project-management",
  },
  {
    id: nanoid(),
    title: "Landing 02",
    route: "/crm-landing",
  },
  {
    id: nanoid(),
    title: "Landing 03",
    route: "/ai-content-landing",
  },
  {
    id: nanoid(),
    title: "Landing 04",
    route: "/new-intro-landing",
  },
  {
    id: nanoid(),
    title: "Landing 05",
    route: "/about-us-landing",
  },
  {
    id: nanoid(),
    title: "Landing 06",
    route: "/contact-us-landing",
  },
  {
    id: nanoid(),
    title: "Landing 07",
    route: "/faqs-landing",
  },
  {
    id: nanoid(),
    title: "Landing 08",
    route: "/pricing-landing",
  },
  {
    id: nanoid(),
    title: "Landing 09",
    route: "/career-landing",
  },
];

export default NewNavbar;
