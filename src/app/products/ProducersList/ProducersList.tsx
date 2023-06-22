import { observer } from 'mobx-react'
import ProducersListVM from './ProducersListVM'

function ProducersList({ vm }: { vm: ProducersListVM }) {
  return (
    <div>
      <h2>ProducersList</h2>
      {vm.producersStore.producers.map((producer) => {
        return (
          <div key={producer.name}>
            {producer.name} {producer.currency}
          </div>
        )
      })}
    </div>
  )
}

export default observer(ProducersList)
