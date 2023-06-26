import { headers } from 'next/dist/client/components/headers'
import Link from 'next/link'
import Image from 'next/image'
import imgSrc1 from '../img/shopping-card.svg'
import imgSrc2 from '../img/search.svg'

export default function Navbar() {
  return (
    <header className="bg-white w-full border-solid border-b-2">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 logo"
            href="/">
            <div>
              <p className="text-2xl font-bold font-outfit">Clarges Trading</p>
              <p className="text-sm font-light font-outfit">Exporting Glorious British Food</p>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/producers" className="font-outfit text-base">
            Producers
          </Link>
          <Link href="/orders" className="font-outfit text-base">
            Orders
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <p className="mx-6 relative">
            <Image src={imgSrc1} alt="shopping card" width="29" height="29" role="presentation" />
            <span className="add-card font-catamaran absolute font-medium justify-center flex items-center w-5 h-5 text-center rounded-2xl text-white">
              23
            </span>
          </p>
          <p>
            <Image src={imgSrc2} alt="search" width="29" height="29" role="presentation" />
          </p>
        </div>
      </nav>
    </header>
  )
}
