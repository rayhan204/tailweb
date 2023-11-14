import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { FaHamburger } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "./Product" },
  { name: "About", href: "./About" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="bg-gray-700 bg-opacity-50 fixed inset-x-0 top-0 z-50">
        <nav className="flex items-left justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Burger</span>
              <h1 className="w-full flex gap-3 text-2xl font-bold text-orange-600">
                Burger <FaHamburger size={20} class="mt-2" />
              </h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden  lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold  leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="./Login" className="text-sm font-semibold leading-6   text-white hover:opacity-90 hover:shadow-lg">
              Log in
            </a>
            <a href="/profile" className="text-white ml-4">
              <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href="./Login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                    Log in
                  </a>
                  <a href="/profile" className="text-white ml-4">
                    <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
