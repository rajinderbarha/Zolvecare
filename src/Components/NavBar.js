import React from 'react'
import Free_Demo from './Free_Demo'
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

import Link from 'next/link';

function NavBar() {
  return (
    <div>
      <Sheet>
        <header className="bg-white">
          <nav
            className="mx-auto flex nav_bar items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="/Image/Logo.svg"
                  alt="logos"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="flex lg:hidden">

              <SheetTrigger
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </SheetTrigger>
            </div>
            <div className="hidden lg:flex lg:gap-x-16">

              <Link href="/about" className=" nav_link font-medium  ">
                Features
              </Link>
              <a href="#" className="nav_link font-medium ">
                Benefits
              </a>
              <a href="#" className="nav_link font-medium  ">
                How it works
              </a>
              <a href="#" className="nav_link font-medium  ">
                Pricing
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-8 lg:flex-1 lg:justify-end">
              <a href="#" className="nav_link font-medium  ">
                Sign Up
              </a>
              <Free_Demo title="Free Demo" />
            </div>
          </nav>
          {/* Mobile menu, show/hide based on menu open state. */}
          <SheetContent>
            <div className="lg:hidden" role="dialog" aria-modal="true">

              <div className="fixed inset-0 z-10" />
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image
                      className="h-8 w-auto"
                      src="/Image/Logo.svg"
                      alt="logos"
                      width={100}
                      height={100}
                    />
                  </a>
                  {/* <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button> */}
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Features
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Marketplace
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Company
                      </a>
                    </div>
                    <div className="py-6 items-center flex gap-4">
                      <a href="#" className="nav_link  font-medium  ">
                        Sign Up
                      </a>
                      <Free_Demo title="Free Demo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </header>

      </Sheet>
    </div>

  )
}

export default NavBar
