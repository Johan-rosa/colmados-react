import {useState} from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const pages = ["General", "Colmado O7", "Colmado O9", "ParqueO"]

function NavItem({href, name, current, setCurrent}) {
    const baseStyle = "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    const currentStyle = "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"

    return (
        <a
            href={href}
            className={current === name ? currentStyle : baseStyle}
            onClick={() => setCurrent(name)}
        >
            {name}
        </a>
    )
}

function MovileNavItem({href, name, current, setCurrent}) {
    const currentStyle ="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
    const baseStyle = "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"

    return(
        <DisclosureButton
            as="a"
            href={href}
            className={current ? currentStyle : baseStyle}
            onClick={() => setCurrent(name)}
        >
            {name}
        </DisclosureButton>
    )
}

export default function Navbar() {
  const [current, setCurrent] = useState("General")

  const handleClick = (name) => {
    setCurrent(name)
  }

  return (
    <Disclosure as="nav" className="bg-white shadow mb-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Empresas OIP logo"
                src="https://vainas-de-colmados.netlify.app/static/logO.png"
                className="h-8 w-auto"
              />
              <span className="text-xl">Vainas de colmados</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {pages.map((name) => <NavItem href="#" name={name} current={current} setCurrent={setCurrent} key={name}/>)}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-4 pt-2">
            {pages.map((name) => <MovileNavItem href="#" name={name} current={current === name} setCurrent={setCurrent} key={name}/>)}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
