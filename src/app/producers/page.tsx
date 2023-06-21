import { Metadata } from 'next'
import ProducersList from './ProducersList'

export const metadata: Metadata = {
  title: 'About page',
  description: 'Information about project',
}

export default function Page() {
  return (
    <div className="">
      <h1>Hello, Demo page!</h1>
      <ProducersList />
    </div>
  )
}
