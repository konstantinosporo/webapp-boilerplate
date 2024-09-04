'use client';
// libraries
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// custom
import { navLinksGlobal } from '../links/navlinks';
import LogoImage from './LogoImage';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function MyNavBarOffline() {
  const currentPath = usePathname();
  const links = navLinksGlobal;

  return (
    <Disclosure as="nav" className="dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <LogoImage />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:flex-1 sm:justify-end">
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
                    <p className="text-xs">{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
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
