'use client';
// libraries
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// custom
import { navLinksUser, navLinksGlobal, navLinksDropdown } from '../links/navlinks';
import LogoImage from './LogoImage';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
// icons 
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function MyNavBar({ user }: Readonly<MyNavBarProps>) {

  const currentPath = usePathname();
  const links = user ? navLinksUser : navLinksGlobal;

  return (
    <Disclosure as="nav" className="dark:bg-gray-800 border-b-[.1px] shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <LogoImage />
            </div>
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={classNames(
                      item.href === currentPath ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    <div className="flex items-center gap-1">
                      {item.title === 'Contact' ? <MdOutlineAttachEmail className='mt-[.5px]' /> : null}
                      <p className="text-xs">{item.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <UserInfo user={user} />
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-xs focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <ProfileImage user={user} />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {user ? (
                  <>
                    {
                      navLinksDropdown.map((item) => (
                        <MenuItem key={item.title}>
                          <Link href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                            <p className="text-xs">{item.title}</p>
                          </Link>
                        </MenuItem>
                      ))
                    }
                  </>
                ) : (
                  <MenuItem>
                    <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Sign in
                    </Link>
                  </MenuItem>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {links.map((item) => (
            <DisclosureButton
              key={item.title}
              as={Link}
              href={item.href}
              className={classNames(
                item.href === currentPath ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              <p className="text-xs">{item.title}</p>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
