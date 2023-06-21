'use client'
import { observer } from 'mobx-react'
import ProducersListVM from './ProducersListVM'

function ProducersList({ vm }: { vm: ProducersListVM }) {
  return (
    <div>
      <h2>ProducersList</h2>
      <ul>
        {vm.producersStore.producers.map((producer) => {
          return (
            <li key={producer.name}>
              {producer.name} {producer.currency}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default observer(ProducersList)
