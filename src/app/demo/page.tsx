import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About page',
  description: 'Information about project',
}

export default function Page() {
  return (
    <div className="">
      <h1>Hello, Demo page!</h1>
    </div>
  )
}
