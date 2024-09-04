'use client'
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaPowerOff } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";

import { navLinksUser } from "../links/navlinks";

import { useSession } from "next-auth/react";
import clsx from "clsx";

const NewNavbar = () => {
  const { data: session, status } = useSession();
  const user: User | undefined = session?.user;
  const dynamicBtn = (
    user ? (
      <Link href='/api/auth/signout'>
        <Button variant="secondary" className="hidden md:block px-2 bg-red-500">
          Logout
        </Button>
      </Link>
    ) : (
      <Link href='/login'>
        <Button variant="secondary" className="hidden md:block px-2">
          Login
        </Button>
      </Link>
    )
  );


  return (
    <Card className="container bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-3 mb-14">
      <LogoImage />

      <ul className="hidden md:flex items-center gap-10 text-card-foreground">
        {
          navLinksUser.map((item) => {
            return (
              <li className="text-primary font-medium hover:bg-gray-50 rounded-md p-1 px-3" key={item.title}>
                <Link href={item.href}>
                  {item.title}
                </Link>
              </li>
            )
          })
        }
        {/* <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="cursor-pointer">Dropdown</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li> */}
      </ul>

      <div className="flex items-center gap-1">
        <Link href={user ? '/api/auth/signout' : '/login'}>
          <Button

            className={clsx(
              "items-center gap-2 px-2 hidden lg:flex ml-2 mr-2",
              user ? "bg-red-500" : "bg-blue-500",
              "dark:bg-red-700 text-white"
            )}
          >
            {user ? (
              <FaPowerOff className="text-white" />
            ) : (
              <IoMdLogIn className="text-white" />
            )}
            <span className="hidden md:inline">
              {user ? "Logout" : "Login"}
            </span>
          </Button>
        </Link>
        <Button className="hidden md:block ml-2 mr-2">Get Started</Button>

        <div className="flex md:hidden mr-2 items-center gap-2">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="py-2 px-2 bg-gray-100 rounded-md">Pages</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <Link href={page.route}>{page.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}

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
              <DropdownMenuItem>
                <Link href={user ? '/api/auth/signout' : '/login'}>
                  <Button
                    variant="secondary"
                    className={clsx(
                      "hidden md:block px-2",
                      user ? "bg-red-500" : "",
                      "dark:bg-red-700" // Optional: add a dark theme variant
                    )}
                  >
                    {user ? "Logout" : "Login"}
                  </Button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full text-sm">Get Started</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ModeToggle />
        <Avatar>
          <AvatarImage src={user?.image ?? '/next.svg'} sizes="120px" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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