import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orders page',
  description: 'List of orders',
}

export default function Page() {
  return (
    <div className="">
      <h1>Orders</h1>
    </div>
  )
}
