'use client';

import { Bars3Icon, BellIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image';

// custom 
import { LINKS } from './links/navlinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function MyNavBar({ user }: Readonly<{ user: User }>) {
  const profImage = user?.image ?
    (
      <Image
        src={user.image}
        alt={`${user.name}'s image.`}
        width={35}
        height={35}
      />
    ) :
    (
      <Image
        alt="Default Image"
        src="/next.svg"
        className="h-8 w-auto"
        priority={true}
        width={15}
        height={10}
      />
    )

  const currentPath = usePathname();
  return (
    <Disclosure as="nav" className="dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {profImage}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {LINKS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={classNames(
                      item.href === currentPath ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="gap-1 hidden md:flex">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white outline outline-1 outline-green-400"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <UserIcon aria-hidden="true" className="h-3 w-3 text-green-400 " />
              </button>

              <span>
                <p className=' dark:text-slate-200 text-sm'>{user?.name}</p>
              </span>
            </div>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {profImage}
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link href="/dashboard/my-profile" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <a href="/dashboard/info" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Info
                  </a>
                </MenuItem>
                <MenuItem>
                  <Link href="/api/auth/signout" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {LINKS.map((item) => (
            <DisclosureButton
              key={item.title}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.title}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

