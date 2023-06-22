import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/">
          <span className="text-2xl">Home</span>
        </Link>
      </div>
      <p className="fixed text-2xl left-0 top-0 flex w-full justify-center  from-zinc-200 pb-6 pt-8 lg:static lg:w-auto lg:p-4 ">
        <Link href="/producers">Producers</Link>
      </p>
    </div>
  )
}
